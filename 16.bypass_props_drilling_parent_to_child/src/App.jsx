import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

const [theme, setThem] = useState('light')
  return (
    
      <div>
        <Navbar them={theme}  chnagetheme={setThem}/>
      </div>
   
  )
}

export default App
