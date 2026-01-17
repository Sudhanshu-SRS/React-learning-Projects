
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='nav'>
        <div><h2>Navbar</h2></div>
        <div className='links'> <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/faq'>FAQ</Link>
        
        <Link to='/about'>About</Link></div>
       </div>
    </div>
  )
}

export default Navbar