
import Screen from './components/Screen'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screen" element={<Screen />} />
    </Routes>
    </>
  )
}  

export default App
