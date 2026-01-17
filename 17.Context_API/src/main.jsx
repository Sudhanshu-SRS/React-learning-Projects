import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameContext from './Context/NameContext.jsx'

createRoot(document.getElementById('root')).render(
  
   <NameContext>
    <App />
   </NameContext>
  
)
