import React, { useState } from 'react'

const ArrayuseState = () => {
 
   const [user, setuser] = useState([10,20,30,40])
    
   function valuech(){
    const newarr=[...user]
    newarr.push(101)
    setuser(newarr)
   }


  return (
    <div>
      <h1>The value is : {user}</h1>
      <button onClick={valuech}>To change Value By destructuring an Array So It Can Have different Reference </button>
    </div>
  )
}

export default ArrayuseState