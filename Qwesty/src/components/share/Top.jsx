import bell from '../../assets/images/bell.svg'
import avatar from '../../assets/images/resAvatar.svg'
import Lmode from '../../assets/images/Lmode.png';
import Dmode from '../../assets/images/Dmode.png';
import { useTheme } from '../../context/ThemeContext';
import {FaPlus }from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeadphones,CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logoBlack from "../../assets/images/Logo.png";
import logowhite from "../../assets/images/Solvety_logo_white.png";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import supportIconB from '../../assets/images/support-iconB.svg';
import supportIconW from '../../assets/images/support-iconW.svg';


function Top() {
  const {resTheme, researcherTheme, dropdown, handleResearcherDropdown, setDropdown, setIsSupportClicked} = useTheme();
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdown(false);
  };


  return (
    <div className={`reas-top ${resTheme} `} ref={dropdownRef}>
       
       <div className="logos">
        <img src={resTheme === 'light'? logoBlack:logowhite}
             alt="logo of Qwesty"/>
         </div>
       
      <Link className='create-box'
            to="/researcher/create"
            title="create">
        <FaPlus /> create
      </Link>

      <div className='bell-box'>
        <img src={bell}
             alt="bell icon"/>
      </div>
      <div className='user-content'>
       <RiArrowDropDownLine id="dropArw" />
       <div className='pic'>
        <Link to='/researcher/profile'>  
          <img src={avatar}
               alt="avatar"
               /></Link>
             
       </div>
       <Link to='/researcher/profile'><p id="big">Spencer</p></Link>
        <div className={`menu-icon ${dropdown===true?'active':''}`}
             onClick={handleResearcherDropdown}
             title={`${dropdown===true?'Hide' :'Show'} menu`} >
          {dropdown?<IoCloseOutline size={'2rem'}/>: <CiMenuFries size={'2rem'}/>}
        </div>

      <Link id='support-icon' to='/researcher/settings' onClick={()=>setIsSupportClicked(true)} title="support"> 
          <img src={resTheme=='dark'?supportIconW:supportIconB} alt="icon of support"/>
      </Link> 
      </div>   
      
     
      </div>
  )
}
export default Top