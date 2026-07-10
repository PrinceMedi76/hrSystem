import { data, Link } from "react-router-dom";
import Image from "../assets/bankLogo.svg";
import { CgProfile } from "react-icons/cg";
import { PiUsersThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";;
import { MdPreview } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { PiUserSwitchThin } from "react-icons/pi";
import { useState,useEffect } from 'react'
import { SlRefresh } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { VscPreview } from "react-icons/vsc";
import { TbClock } from "react-icons/tb";


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
          <div className="flex flex-direction-row mb-5">
            <button>
              <PiUsersThin size="18"/>
              <span className="ml-2 text-sm">DashBoard</span>
            </button>
          </div>
          <div className="flex flex-direction-row mb-5">
            <RiAccountPinBoxFill size="18" />
            <span className="ml-2 text-sm">Applicants</span>
          </div>
          <div className="flex flex-direction-row mb-5">
            <MdPreview size="18" />
            <span className="ml-2 text-sm">Preview</span>
          </div>
          <div className="flex flex-direction-row mb-5">
            <GrOverview size="18" />
            <span className="ml-2 text-sm">Overview</span>
          </div>
          <div className="flex flex-direction-row mt-25">
            <PiUserSwitchThin size="18" />
            <span className="ml-2 text-sm">Switch User</span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full overflow-hidden h-150 bg-gray-200 p-2 m-2 rounded-xl shadow-lg">
        <div className="flex justify-between">
          <div>
            <h2 className="flex m-2 ml-5 font-bold text-md">Applicants</h2>
            <h6 className="flex m-2 ml-5 text-xs">Manage and review all job applications</h6>
          </div>
          <div className=" items-center justify-center flex">
            <button onClick={()=> setViewApplicants(data)} className="flex gap-2 w-30 p-2 bg-green-700 text-white font-semibold text-sm rounded-xl m-1">
              <SlRefresh className="mt-1 ml-3" size={15}/>Refresh
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-42 rounded bg-white p-3 mb-4 ml-3 flex gap-5">
            <div className="w-8 h-8 bg-green-100 rounded-4xl p-1">
              <IoPeopleOutline size={24} />
            </div>
            <div className="grid text-start text-xs font-semibold">
              <h>Total Applicants</h>
              <h className="text-green-600 text-xl font-bold">48</h>
              <h>All time</h>
            </div>
          </div>
          <div className="w-45 rounded bg-white p-3 mb-4 ml-5 flex gap-5">
            <div className="w-9 h-9 bg-blue-100 rounded-4xl p-2">
              <SlCalender size={19} />
            </div>
            <div className="grid text-start text-xs font-semibold">
              <h>This Month</h>
              <h className="text-blue-600 text-xl font-bold">12</h>
              <h>July 2026</h>
            </div>
          </div>
          <div className="w-45 rounded bg-white p-3 mb-4 ml-5 flex gap-5">
            <div className="w-9 h-9 bg-orange-100 rounded-4xl p-2">
              <VscPreview size={19} />
            </div>
            <div className="grid text-start text-xs font-semibold">
              <h>Reviewed</h>
              <h className="text-orange-400 text-xl font-bold">12</h>
              <h>This Month</h>
            </div>
          </div>
          <div className="w-45 rounded bg-white p-3 mb-4 ml-5 flex gap-5">
            <div className="w-9 h-9 bg-purple-100 rounded-4xl p-2">
              <TbClock size={19} />
            </div>
            <div className="grid text-start text-xs font-semibold">
              <h>Pending</h>
              <h className="text-purple-600 text-xl font-bold">33</h>
              <h>To Be reviewed</h>
            </div>
          </div>
        </div>
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
