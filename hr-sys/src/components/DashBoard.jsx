import { Link } from "react-router-dom";
import Image from "../assets/adnoc.jpeg";
import { PiUsersThin } from "react-icons/pi";
import { RiAccountPinBoxFill } from "react-icons/ri";;
import { MdPreview } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { PiUserSwitchThin } from "react-icons/pi";
import { PiArrowCircleLeftThin } from "react-icons/pi";


const DashBoard = () => {
  return (
    <>
      <div>
        <header className="flex m-2 text-green-700 font-bold text-lg shadow-md items-center justify-between bg-gray-200 p-2 rounded-2xl">
          <div className="text-sm font-mono">
            <Link to="/">
            <button className=" font-mono p-1 text-black m-1"><PiArrowCircleLeftThin size="35" /></button>
          </Link>
          </div>
          BANK OF AFRICA
          <img src={Image} alt="logo" className="w-10 h-10 rounded-full" />
        </header>
      </div>
      <div className="flex flex-direction-row justify-center items-center gap-1">
        <div className="w-48 h-104 bg-gray-200 p-2 m-2 rounded-2xl shadow-lg">
        <div className="mt-4 bg-white p-2 rounded-2xl w-39 cursor-pointer h-90 shadow-lg">
          <div className="flex flex-direction-row mb-5">
            <PiUsersThin size="18"/>
            <span className="ml-2 text-sm">Users</span>
          </div>
          <div className="flex flex-direction-row mb-5">
            <RiAccountPinBoxFill size="18" />
            <span className="ml-2 text-sm">Manage Accounts</span>
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
      <div className="flex-1 h-104 bg-gray-200 p-2 m-2 rounded-2xl shadow-lg">
          
      </div>
      </div>
    </>
  )
}

export default DashBoard
