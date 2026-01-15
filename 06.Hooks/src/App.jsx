

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
     <div>
      <h1>{number}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App
