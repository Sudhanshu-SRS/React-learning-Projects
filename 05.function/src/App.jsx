import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function clickhoenpe(){

  console.log("click hogay haiii")
    
  }
  return (
    <>
     <div className='yo'> 
      <button onClick={clickhoenpe}>outside function</button>
      <br />
      <button onDoubleClick={function(){
        console.log("andr ka function hu mai in line wala")
      }}>inside function </button>

     </div>
    </>
  )
}

export default App
