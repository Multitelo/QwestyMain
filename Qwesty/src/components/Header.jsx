import '../assets/css/style.css';
import Home from './Home'
import Logo from '../assets/images/Logo.png';
import arrow from '../assets/images/down-arrow.png'
import bars from '../assets/images/bars.svg'
import x from '../assets/images/x.svg';
import { Routes, Route, Link } from "react-router-dom"
import { useState } from 'react';
function Header() {

    const [barClicked, setBarClicked]= useState(false)
    const handleClick = ()=>{
      setBarClicked(prevState=> !prevState)
    }
  return (
    <div className='nav-medium-devices'>
        <nav>
            <Link to='/' className='items logo'><img src={Logo}></img></Link>
            <Link to='/'className='items'>about us</Link>
            <Link to='/'className='items'>contact us</Link>
            <Link to='/'className='items'>services<img src={arrow} id="arrow"/></Link>
            <Link to='/'className='items'>join waitlist</Link>
            <button onClick={handleClick}><img src={barClicked?x:bars}/></button>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}
export default Header