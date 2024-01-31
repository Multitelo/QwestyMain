import '../../assets/css/signed-styles.css'
import logoBlack from "../../assets/images/logoBlack.png";
import bell from '../../assets/images/bell.svg'
import calendar from '../../assets/images/calendar.svg'
import avatar from '../../assets/images/avatar.svg';
import coinStack from '../../assets/images/coin-stack.svg';
import logOut from '../../assets/images/log-out.svg';
import menu from '../../assets/images/menu-2.svg';
import search from '../../assets/images/search.svg';
import settingsB from '../../assets/images/settingsB.svg';
import settings from '../../assets/images/settings.svg';
import userPlus from '../../assets/images/user-plus.svg';
import user from '../../assets/images/user.svg';
import Settings from './Settings';
import x from '../../assets/images/menu-x.svg';
import { Link,useLocation, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function Index() {


  return (


    <>
    {<SideBar/>}
    {<TopNav/>}
    </>
   
    // <div style={{backgroundColor: "#F7F7F7", height:"100vh"}} >
    //     <header className="flexContainer" >
        
          
      
     
    //   {<Settings/>}
    //     </header>
    
   
    //     </div>
  )
}


const SideBar =()=>{
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  
  // Function to determine if link is active
  const isLinkActive = (to) =>{
    return location.pathname === to;
  }
  const handleClick = ()=>{
   setIsClicked(prevState=> !prevState)
  }
  return(
    <>
    <div className="side-bar for-big-devices">
    <Link to="/signedUp">
      <img src={logoBlack} alt="Qwesty's logo" id="logoB"/></Link> 
      <div className="flex-search">
        <img src={search} id="search-icon"  alt="search-icon"/>
        <input type="search" value="search" placeholder="Search" className="searchBox"/>
      </div>
     
         <div className="calendarBox">
         <Link to="/signedUp"><img src={calendar} id="calendar-icon" alt="Calendar icon"/><span>Qwests</span>
         </Link>
       </div>
       
       <div className="profileBox">
       <Link to="/signedUp"> <img src={user} id="user-icon" alt="User icon"/> <span>My profile</span></Link>
       </div>
       <div className="rewards-box">
       <Link to="/signedUp"> <img src={coinStack} id="coinStack-icon" alt="Coin-stack icon"/> <span>Rewards</span></Link>
       </div>
       <div className="settings-box" id={isLinkActive('/signedUp/settings') ? 'active': ''}>
       <Link to="/signedUp/settings"> <img src={isLinkActive('/signedUp/settings')?settingsB:settings} id="settings-icon" alt="a settings icon" /> <span>Settings</span></Link>
       </div>
       <div className="referrals-box">
       <Link to="/signedUp"><img src={userPlus} id="user-plus-icon" alt="User icon"/> <span>Referrals</span></Link>
       </div>
        <div className='logOut-box'>
          <Link to="/"><img src={logOut} alt="log-out icon"/><span>Log out</span></Link>
        </div>
      </div> 

      {/* For small devices */}
      <div id="small-devices">
      <div id="s-logo">
      <Link to="/signedUp">
      <img src={logoBlack} alt="Qwesty's logo" /></Link> 
      </div>
      <div id="s-topNav">
      <div id="bell"><Link to="/signedUp"> <img src={bell} id="bell-icon" alt="A notification's bell icon"/></Link></div>
      <div id="avatar"><img src={avatar} id="avatar-icon" alt="User's picture" /></div>
      <img src={ isClicked?x:menu} alt="A navigation menu icon" id="menu"
           onClick={handleClick}/>
    
      </div>
      </div>
      { isClicked && <div className='drop-down'>
      <div className="flex-search">
        <img src={search} id="search-icon"  alt="search-icon"/>
        <input type="search" value="search" placeholder="Search" className="searchBox"/>
      </div>
     
         <div className="calendarBox">
         <Link to="/signedUp"><img src={calendar} id="calendar-icon" alt="Calendar icon"/><span>Qwests</span>
         </Link>
       </div>
       
       <div className="profileBox">
       <Link to="/signedUp"> <img src={user} id="user-icon" alt="User icon"/> <span>My profile</span></Link>
       </div>
       <div className="rewards-box">
       <Link to="/signedUp"> <img src={coinStack} id="coinStack-icon" alt="Coin-stack icon"/> <span>Rewards</span></Link>
       </div>
       <div className="settings-box">
       <Link to="/signedUp/settings"> <img src={settings} id="settings-icon" alt="a settings icon"/> <span>Settings</span></Link>
       </div>
       <div className="referrals-box">
       <Link to="/signedUp"><img src={userPlus} id="user-plus-icon" alt="User icon"/> <span>Referrals</span></Link>
       </div>
        <div className='logOut-box'>
          <Link to="/"><img src={logOut} alt="log-out icon"/><span>Log out</span></Link>
        </div>
      </div>}
      </>
  )
}

const TopNav = ()=>{
  return (
    <div className="top-nav big-devices">
    <div id="bell"><Link to="/signedUp"> <img src={bell} id="bell-icon" alt="A notification's bell icon"/></Link></div>
      <div id="avatar"><img src={avatar} id="avatar-icon" alt="User's picture" /></div>
      <h2>Jake</h2>
    </div>
  )
}

export {TopNav, SideBar}
export default Index