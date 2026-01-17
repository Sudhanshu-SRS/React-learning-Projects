import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Navbar from './components/Navbar';
import Page404 from './pages/Page404';
import Name from './pages/Name';
import Address from './pages/Address';
import FaqDetails from './pages/FaqDetails';
import Navbar3 from './components/Navbar3';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar3/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
        <Route path='name' element={<Name/>}/>
        <Route path='address' element={<Address/>}/>

        
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/faq/:kaha' element={<FaqDetails/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default App