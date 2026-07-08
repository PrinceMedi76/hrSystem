
import Screen from './components/Screen'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import Login from './components/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screen" element={<Screen />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}  

export default App
