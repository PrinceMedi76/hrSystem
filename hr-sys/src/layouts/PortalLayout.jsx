import DashBoard from '../components/ApplicantDashBoard'
import Home from '../components/Home'
import Login from '../components/Login'
import { Outlet } from 'react-router-dom'

const PortalLayout = () => {
  return (
    <>
        <div>
          <Home />
        </div>
        <main>
            <Outlet />
        </main>
    </>

  )
}

export default PortalLayout
