import { Link } from 'react-router-dom'
import { useState } from 'react';
import { PiArrowCircleLeftThin } from "react-icons/pi";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("cv_file", selectedFile);

        const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        mode:"cors",
        body: formData,
        });
        const data = await response.json();
        setName("");
        setEmail("");
        setPhone("");
        setSelectedFile(null);
        console.log(data);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
     <div className="bg-white p-10 rounded-lg shadow-md w-96 font-normal">
       <h2 className='font-semibold text-lg text-blue-600 mb-5'>Submit Your Application Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Full_Name:  </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:  </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="phone">Phone:  </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="cv_file">Cv_File:  </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" onChange={(e)=>setSelectedFile(e.target.files[0])} />
        </div>
        <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Submit
        </button>
        <div className="text-sm font-mono ">
            <Link to="/">
            <button className=" font-mono p-1 text-black m-1"><PiArrowCircleLeftThin size="35" /></button>
          </Link>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Login
