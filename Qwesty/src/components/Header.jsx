import '../assets/css/style.css';
import Home from './Home'
import Logo from '../assets/images/Logo.png';
import arrow from '../assets/images/down-arrow.png'
import { Routes, Route, Link } from "react-router-dom"
function Header() {
    
  return (
    <div>
        <nav>
            <Link to='/' className='items logo'><img src={Logo}></img></Link>
            <Link to='/'className='items'>about us</Link>
            <Link to='/'className='items'>contact us</Link>
            <Link to='/'className='items'>services<img src={arrow} id="arrow"/></Link>
            <Link to='/'className='items'>join waitlist</Link>

        </nav>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}
export default Header