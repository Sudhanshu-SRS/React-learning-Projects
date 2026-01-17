import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nabar2() {
  return (
    <div className='absolute right-3 '>
        <Link to='/about/name'>Mera Naam </Link>
        <Link to='/about/address'>Mera Address </Link>
          <Outlet/>
    </div>
   
  )
}

export default Nabar2