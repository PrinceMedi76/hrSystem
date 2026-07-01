import { useState } from "react"


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
                <p className="text-xl font-bold font-serif">HR SYSTEM</p>
                <input  type="file" onChange={(e)=> 
                    setFile(e.target.files[0])} 
                    className="bg-gray mt-10"/>
                <button onClick={checkCv} 
                className="bg-green-400 p-1 rounded-lg" 
                type="submit" name="submit">submit</button>
            </div>
            <div>
                <h2>Status: {status}</h2>
                <h3 className="bg-gray-500 text-purple-200 mt-10  text-center">matched Requirements</h3>
                {matched.length>0?(
                    matched.map((matched,index)=>(
                        <p key={index}>{matched}</p>
                    ))
                ):(
                    <p>No Match Found yet</p>
                )}
                <h3 className="bg-gray-500 text-purple-200 mt-10  text-center">Missing Skills</h3>
                {missing.length>0?(
                    missing.map((missed,index)=>(
                        <p key={index}>{missed}</p>
                    ))
                ):(
                    <p>No Match Found yet</p>
                )}
            </div>  
            <div className="mb-100">
                <h3 className="bg-gray-500 text-purple-200 mt-10  text-center">Requirements</h3>
                <input className="mt-10 outline-0 border p-2 w-80" type="text" placeholder="Enter Requirements separate by Comma" value={requirements} 
                onChange={(e)=>setRequirements(e.target.value)} />
            </div>
        </>
    )
}

export default Screen