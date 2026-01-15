import React, { useState } from 'react'

const ArrayBatch = () => {
  
   const [first, setfirst] = useState([10,20,30,40])
   function valuech(){
    const newarr=[...first]
    setfirst(newarr=>[...newarr,50])
    setfirst(newarr=>[...newarr,50])
    setfirst(newarr=>[...newarr,50])
    setfirst(newarr=>[...newarr,50])
    setfirst(newarr=>[...newarr,50])
}



    return (
    <div>
      <h1>The value is : {first}</h1>
      <button onClick={valuech}>To change Value By Batch an Array </button>
    </div>
  )

}

export default ArrayBatch