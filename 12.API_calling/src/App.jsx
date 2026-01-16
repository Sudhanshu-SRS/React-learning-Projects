import { useState } from 'react'

import './App.css'

function App() {
 function fetchdata(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log();
 }

  return (
    <>
     <div className='container'>
      <button  onClick={fetchdata}>Fetch</button>
     </div>
    </>
  )
}

export default App
