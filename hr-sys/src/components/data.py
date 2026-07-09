import pdfplumber
from pypdf import PdfReader
from flask import Flask,request,jsonify,send_from_directory
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import pyodbc
from datetime import datetime
       

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/viewApplicants", methods=["GET"])
def viewApplicants():
    conn = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};'
        'SERVER=localhost;'
        'DATABASE=hrSys;'
        'Trusted_Connection=yes;'
        'TrustedServerCertificate=yes;')
    cursor = conn.cursor()
    cursor.execute("SELECT id, full_name, email, phone, cv_file, created_at FROM applications")
    rows = cursor.fetchall()
    print(rows)
    viewApplicants = []
    for row in rows:
        viewApplicants.append({
            "id":row[0],
            "full_name":row[1],
            "email":row[2],
            "phone":row[3],
            "cv_file":row[4],
            "created_at":row[5],
        })
    return jsonify(viewApplicants)

@app.route("/uploads/<path:filename>")
def get_cv(filename):
    return send_from_directory("uploads", filename)

@app.route("/apply", methods=["POST"])
def apply():
    # Handle application logic here
    name = request.form["name"]
    email = request.form["email"]  
    phone = request.form["phone"]

    print(request.form)
    print(request.files)

    file = request.files["cv_file"]
    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    conn = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};'
        'SERVER=localhost;'
        'DATABASE=hrSys;'
        'Trusted_Connection=yes;'
        'TrustedServerCertificate=yes;')
    created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO applications (full_name, email, phone, cv_file, created_at) VALUES (?,?, ?, ?, ?)",
          name,
          email,
          phone,
          filename,
          created_at,
    )
    conn.commit()

    cursor.close()
    conn.close()
    return jsonify({"message": "Application submitted successfully!"}), 200

@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["cv"]
    requirements = request.form["requirements"]
    
    text = ""
    requirements = [r.strip() for r in requirements.split(",")]
    print(file)

    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    text = text.lower()
    matched = []

    for req in requirements:
        print("requirements:",repr(req))
        if req.lower() in text:
            matched.append(req)
    missing = [req for req in requirements if req not in matched]
    status = "Qualified" if len(missing)==0 else "Not Qualified"
    print("Matched:",matched)
    return jsonify({"matched":matched,
                    "missing":missing,
                    "status":status})
if __name__ == "__main__":
    app.run(debug=True)


