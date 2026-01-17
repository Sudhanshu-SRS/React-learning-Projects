import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar3 = () => {

 const navigate=useNavigate();

 const home=()=>{
    navigate('/')
 }

 const back=()=>{
    navigate(-1)
 }


  return (
    <div>
      <div className="flex justify-center gap-4">
        <button onClick={home} className="bg-amber-300 rounded-full p-2 active:scale-90">
          Home
        </button>
        <button onClick={back} className="bg-amber-300 rounded-full p-2 active:scale-90">
          Back
        </button>
      </div>
    </div>
  )
}

export default Navbar3
