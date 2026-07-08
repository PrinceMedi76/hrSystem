import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="justify-center items-center flexflex-col min-h-screen">
        <h2 className="m-10 text-xl font-bold text-sky-700 ">Welcome to HR System Management</h2>
      <div className="text-center mt-40">
        <Link to="/screen">
          <button className="w-25 p-2 bg-gray-300 text-black font-bold rounded-3xl m-1  hover:bg-black hover:text-white transition-shadow transform-3d hover:w-30">HR</button>
        </Link>
        <Link to="/dashboard">
          <button className="w-25 p-2 bg-gray-300 text-black font-bold rounded-3xl m-1  hover:bg-black hover:text-white transition-shadow transform-3d hover:w-30">Admin</button>
        </Link>
        <Link to="/login">
          <button className="w-25 p-2 bg-gray-300 text-black font-bold rounded-3xl m-1  hover:bg-black hover:text-white transition-shadow transform-3d hover:w-30">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
