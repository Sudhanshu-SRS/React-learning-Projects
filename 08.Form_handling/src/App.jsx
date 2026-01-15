import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const handelsubmit=(e)=>{
  e.preventDefault();
  console.log("form submitted");
 }
  return (
  
   
   <div>
    <form onSubmit={function(e){
        handelsubmit(e)
      }}>
      <label >Name:</label>
      <input type="text" name="name" placeholder='Enter Your Name' />
      <br />
      <button >submit</button>
    </form>
   </div>
  )
}

export default App
