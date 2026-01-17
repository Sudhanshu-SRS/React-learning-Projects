import React from 'react'

const Navbar = (props) => {
    
  return (
    <div>

        <h1>The Current theme Is {props.them}</h1>
        <button onClick={()=>{
            props.chnagetheme('dark')
        }}
        
        onDoubleClick={()=>{
            props.chnagetheme('light')
        }}

        >Click me to Change Theme</button>
    </div>
  )
}

export default Navbar