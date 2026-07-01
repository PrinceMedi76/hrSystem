import pdfplumber
from pypdf import PdfReader
from flask import Flask,request,jsonify
from flask_cors import CORS
       

app = Flask(__name__)
CORS(app)

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


