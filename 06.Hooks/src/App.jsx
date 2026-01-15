

import { useState } from 'react'
import './App.css'

function App() {
  const [number, setnumber] = useState(0)

  function increase(){
    setnumber(number+1)
  }
   
  function decrease(){
    setnumber(number-1)
  }



  return (
    <div className='parent'>
          <div className='display'>
            <h1>{number}</h1>
          </div>
          <div className='btn'>
            <button onWheel={increase}>increase</button>
            <button onWheel={decrease}>Decrease</button>
          </div>
    </div>
  )
}

export default App
