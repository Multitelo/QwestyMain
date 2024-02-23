import '../assets/css/style.css';
import Home from './Home'
import Logo from '../assets/images/Logo.png';
import arrow from '../assets/images/down-arrow.png'
import bars from '../assets/images/bars.svg'
import x from '../assets/images/x.svg';
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import Indexx from './signedUp/Index';
import Main from './Main';
import About from './About';
function Header() {

    const [barClicked, setBarClicked]= useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClick = ()=>{
      setBarClicked(prevState=> !prevState)
      
    }

    const closeAnswers = () => {
      // Close the dropdown bar in small devices when the window is scrolled
     setBarClicked(false);
    };

    useEffect(()=>{
     
      document.addEventListener("scroll", closeAnswers);
      return () => {
        document.removeEventListener("scroll", closeAnswers);
      };

      
    })

    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
 
  return (
    <>
   
   
   <div className='nav-medium-devices'>
      
      <Link to='/' className='small-logo'><img src={Logo}></img></Link>
     
      <button onClick={handleClick} 
                         id="dropdown-btn"><img src={bars}/></button>
                         </div>
           {barClicked &&              
          <nav id="nav-bar-small">
            
          <Link to='/' className='items logo'><img src={Logo}></img></Link>
          {
            barClicked&& <img src={x} id="close-bar" onClick={handleClick}/>
          } 
          <Link to='/signedUp/settings'className='items' id="first-item">about us</Link>
          <Link to='/signedUp/rewards'className='items' id="second-item">contact us</Link>
          <Link to='/'className='items' id="third-item">services<img src={arrow} id="arrow"/></Link>
         <Link to='/login'className='items' id="fourth-item">LogIn</Link>
         
      </nav>}              
                         
        <nav id="nav-bar">
            
            <Link to='/' className='items logo'><img src={Logo}></img></Link>
         
            <Link to='/signedUp/settings'className='items' id="first-item">about us</Link>
            <Link to='/signedUp/rewards'className='items' id="second-item">contact us</Link>
            <Link to='/'className='items' id="third-item">services<img src={arrow} id="arrow"/></Link>
            <Link to='/login'className='items' id="fourth-item">LogIn</Link>
           
        </nav>

   
        <Routes>
            <Route path='*' element={<Home/>}></Route>
            <Route path="/about" element={<About/>} />
        </Routes>
        </>
  )
}
export default Header