import { useState } from "react"
import { Link } from "react-router-dom"
import { PiArrowCircleLeftThin } from "react-icons/pi";


const Screen = () => {
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
            
            <div className="bg-blue-400 p-10 text-white">
                <div className="flex flex-direction-row items-center">
                    
                <div className="text-sm font-mono">
                            <Link to="/">
                            <button className=" font-mono p-1 text-black m-1"><PiArrowCircleLeftThin size="35" /></button>
                          </Link>
                          </div>
                          <p className="text-xl font-bold font-serif ml-30">HR SYSTEM</p>
                </div>
                
                <input  type="file" onChange={(e)=> 
                    setFile(e.target.files[0])} 
                    className="bg-gray mt-10"/>
                <button onClick={checkCv} 
                className="bg-green-400 p-1 rounded-lg" 
                type="submit" name="submit">submit</button>
            </div>
            <div className="justify-center items-center text-center">
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
                <h3 className="bg-transparent text-blue-500 mt-10 font-bold  text-center">Requirements</h3>
                <input className="mt-10 shadow-2xl outline-0 border p-2 w-80" type="text" placeholder="Enter Requirements separate by Comma" value={requirements} 
                onChange={(e)=>setRequirements(e.target.value)} />
            </div>
        </>
    )
}

export default Screen