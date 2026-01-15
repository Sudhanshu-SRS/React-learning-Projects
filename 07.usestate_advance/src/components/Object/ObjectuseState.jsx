import React, { useState } from 'react'

const ObjectuseState = () => {
  
  
  const [UserO, setUserO] = useState({names:"sudhanshu",age:24,city:"delhi"})
  function valuech(){
    const newobj={...UserO}
    newobj.age=23;
    newobj.names="john";
    setUserO(newobj)
  }
  return (
    <div>
      <h1>The Value Is {UserO.names}, {UserO.age}, {UserO.city}</h1>
      <button onClick={valuech}>To change Value By destructuring an object So It Can Have different Reference </button>
    </div>
  )
}

export default ObjectuseState