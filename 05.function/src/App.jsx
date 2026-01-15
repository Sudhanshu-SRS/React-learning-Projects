import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function clickhoenpe(){

  console.log("click hogay haiii")
    
  }

  let mouseenter=()=>{
    console.log("Mouse yaha aya ");
  }

  return (
    <>
     <div className='yo'> 
      <button onMouseEnter={mouseenter} onClick={clickhoenpe}>outside function</button>
      
      <button onClick={function(){
        mouseenter();
      }}>functin ke nadr wala function </button>

      <button onDoubleClick={function(){
        console.log("andr ka function hu mai in line wala")
      }}>inside function </button>

     </div>
    </>
  )
}

export default App
