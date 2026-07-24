import { Link } from "react-router-dom";
import Image from "../assets/bankLogo.svg";
import { CgProfile } from "react-icons/cg";
import { PiUsersThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";;
import { MdPreview } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { PiUserSwitchThin } from "react-icons/pi";
import { useState } from 'react'



const DashBoard = () => {
  const[matched,setMatched] = useState([])
    const[missing,setMissing] = useState([])
    const[file,setFile] = useState(null)
    const[status,setStatus] = useState("")
    const [requirements,setRequirements] = useState([])
    const checkCv = async (e)=>{
        e.preventDefault();

        const formData = new FormData()
        formData.append("cv",file)
        formData.append("requirements", requirements)

        console.log(file)
        console.log(formData.get("cv"))

        const response = await fetch("http://localhost:5000/upload",{
            method:"POST",
            mode:"cors",
            body: formData,
        })
        const data = await response.json();
        setMatched(data.matched)
        setMissing(data.missing)
        setStatus(data.status)
    }
  return (
    <>
      <div>
        <header className="flex m-2 bg-green-700 font-bold text-lg shadow-md items-center justify-between p-2 rounded-2xl">
          <div className="text-sm font-mono ml-3">
            <img src={Image} alt="logo" className="w-40"/>
          </div>
          <div className="text-white">
            <Link to="/" className="flex gap-3">
              <CgProfile color="white" size={20} className="mt-1"/>
              <h>HR Admin</h>
              <IoIosArrowDown color="white"size={22} className="mt-1"/>
            </Link>
          </div>
        </header>
      </div>
      <div className="flex">
        <div className="w-48 h-150 bg-gray-200 p-2 m-2 rounded-2xl shadow-lg position-fixed">
        <div className="mt-4 bg-white p-2 rounded-2xl w-39 cursor-pointer h-90 shadow-lg">
            <Link to="/dashboard">
              <div className="flex mb-5">
                <PiUsersThin size="18"/>
                <span className="ml-2 text-sm">DashBoard</span>
              </div>
            </Link>
          <Link to="/applicantdashboard">
            <div className="flex flex-direction-row mb-5">
            <RiAccountPinBoxFill size="18" />
            <span className="ml-2 text-sm">Applicants</span>
          </div>
          </Link>
          <Link to="/screen">
            <div className="flex flex-direction-row mb-5">
            <MdPreview size="18" />
            <span className="ml-2 text-sm">Screening</span>
          </div>
          </Link>
          <div className="flex flex-direction-row mb-5">
            <GrOverview size="18" />
            <span className="ml-2 text-sm">Overview</span>
          </div>
          <Link to="/home">
            <div className="flex flex-direction-row mt-25">
            <PiUserSwitchThin size="18" />
            <span className="ml-2 text-sm">Switch User</span>
          </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 w-full overflow-hidden h-150 bg-gray-200 p-2 m-2 rounded-xl shadow-lg">
            <div className="bg-green-700 p-2 w-full text-center text-white  rounded-2xl">
                    <p className="text-lg font-bold font-sans">Screening Section</p>
            </div>
            <div className="border border-outline mt-5 mb-5 pb-4 rounded-2xl bg-white">
                <input  type="file" onChange={(e)=> 
                    setFile(e.target.files[0])} 
                    className="bg-gray mt-10"/>
                <button onClick={checkCv} 
                className="bg-green-700 text-white p-2 rounded-lg" 
                type="submit" name="submit">submit</button>
            </div>
            <div className=" border border-outle bg-white rounded-2xl p-2 justify-center items-center text-center">
                <h2 className="text-blue-500 font-bold">Status: {status}</h2>
                <h3 className="w-full bg-transparent text-blue-500 mt-10  text-center font-bold">Matched Requirements</h3>
                {matched.length>0?(
                    matched.map((matched,index)=>(
                        <p key={index}>{matched}</p>
                    ))
                ):(
                    <p className="text-gray-300">No Match Found yet</p>
                )}
                <h3 className="bg-transparent text-blue-500 mt-10  text-center font-bold">Missing Skills</h3>
                {missing.length>0?(
                    missing.map((missed,index)=>(
                        <p key={index}>{missed}</p>
                    ))
                ):(
                    <p className="text-gray-300">No Missing Found</p>
                )}
            </div>  
            <div className="mb-100 ">
                <h3 className="bg-transparent text-blue-500 mt-5 font-bold  text-center">Requirements</h3>
                <input className="mt-2 shadow-2xl border-green-500 border-2 bg-white p-2 w-80" type="text" placeholder="Enter Requirements separate by Comma" value={requirements} 
                onChange={(e)=>setRequirements(e.target.value)} />
            </div>
      </div>
        
    </div>
    </>
  )
}

export default DashBoard
