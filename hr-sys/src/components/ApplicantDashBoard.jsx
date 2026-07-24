import {Link} from 'react-router-dom'
import Image from "../assets/bankLogo.svg";
import { CgProfile } from "react-icons/cg";
import { PiUsersThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";;
import { MdPreview } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { PiUserSwitchThin } from "react-icons/pi";
import { useState,useEffect } from 'react'



const DashBoard = () => {
  const [viewApplicants,setViewApplicants] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/viewApplicants")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setViewApplicants(data)})
  },[])
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
          <div className="flex flex-direction-row mb-5">
            <RiAccountPinBoxFill size="18" />
            <span className="ml-2 text-sm">Applicants</span>
          </div>
          <Link to="/screeningcv">
            <div className="flex flex-direction-row mb-5">
            <MdPreview size="18" />
            <span className="ml-2 text-sm">Screening</span>
          </div>
          </Link>
          <div className="flex flex-direction-row mb-5">
            <GrOverview size="18" />
            <span className="ml-2 text-sm">Overview</span>
          </div>
          <div className="flex flex-direction-row mt-25 w-fit rounded-2xl bg-green-700 p-1 text-white">
            <PiUserSwitchThin size="18" />
            <span className="ml-2 text-xs">HR Section</span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full overflow-hidden h-150 bg-gray-200 p-2 m-2 rounded-xl shadow-lg">
        <div className="bg-white overflow-x-auto overflow-y-auto">
          <table>
            <thead className="border-b bg-gray-50 w-190">
              <tr className="text-sm">
                <th className=" px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Full_Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">CV_file</th>
                <th className="px-4 py-2 text-left">Submitted_At</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="w-190">
              {viewApplicants.map((applicant)=>(
            <tr key={applicant.id} className="border-b hover:bg-gray-100 w-40">
                <td className="px-4 py-2 text-left text-xs">{applicant.id}</td>
                <td className="px-4 py-2 font-medium text-left text-sm">{applicant.full_name}</td>
                <td className="px-4 py-2 text-left text-xs">{applicant.email}</td>
                <td className="px-4 py-2 text-left text-xs">{applicant.phone}</td>
                <td className="px-4 py-2 text-left text-xs">📂{applicant.cv_file}</td>
                <td className="px-4 py-2 text-left text-xs">{applicant.created_at}</td>
                <td className="px-4 py-2 text-left text-xs"><button onClick={()=> {
                  console.log(applicant.cv_file)
                  window.open(`http://localhost:5000/uploads/${applicant.cv_file}`,"_blank")}} className="bg-green-700 w-19 hover:bg-green-800 text-white text-xs px-4 px-2 rounded-lg">
                  View Cv</button></td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default DashBoard
