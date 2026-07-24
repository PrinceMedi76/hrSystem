import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import ApplicantDashBoard from './components/ApplicantDashBoard'
import ScreeningCv from './components/ScreeningCv'
import PortalLayout from '../src/layouts/PortalLayout'

function App() {
  return (
    <>
    <Routes>
      
      <Route path='/portal' element={<PortalLayout /> }>
        <Route index element={<DashBoard />} />
        <Route path='home' element={<Home />} />
        <Route path="applicantdashboard" element={<ApplicantDashBoard />} />
        <Route path="home" element={<Home />} />
        <Route path="screeningcv" element={<ScreeningCv />} />
      </Route>
    </Routes>
    </>
  )
}  

export default App
