import React, { createContext, useState } from 'react'
export const nameContext = createContext();

const NameContext = (props) => {
 const [names, setname] = useState("Sudhanshu");
  return (
    <div>
        <nameContext.Provider value={[names,setname]}>
            {props.children}
        </nameContext.Provider>
    </div>
  )
}

export default NameContext