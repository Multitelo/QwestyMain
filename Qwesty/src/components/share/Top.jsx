import bell from '../../assets/images/bell.svg'
import avatar from '../../assets/images/resAvatar.svg'
import Lmode from '../../assets/images/Lmode.png';
import Dmode from '../../assets/images/Dmode.png';
import { useTheme } from '../../context/ThemeContext';
import {FaPlus }from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeadphones,CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logoBlack from "../../assets/images/logoBlack.png";
import logowhite from "../../assets/images/Logo.png";
import { useState, useEffect, useRef } from 'react';

function Top() {
  const {resTheme, researcherTheme, dropdown, handleResearcherDropdown, setDropdown} = useTheme();
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdown(false);
  };
  useEffect(() => {
    // const handleClickOutside = (event) => {
    //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //     closeDropdown();
    //   }
    // };

    // document.addEventListener('mousedown', handleClickOutside);

    // return () => {
    //   document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, []);

  return (
    <div className={`reas-top ${resTheme} `} ref={dropdownRef}>
       
       <div className="logos">
        <img src={resTheme === 'light'? logoBlack:logowhite}
             alt="logo of Qwesty"/>
         </div>
       
      <div className='create-box'>
        <FaPlus /> create
      </div>

      <div className='bell-box'>
        <img src={bell}
             alt="bell icon"/>
      </div>
      <div className='user-content'>
       <RiArrowDropDownLine id="dropArw" />
       <div className='pic'>
          <img src={avatar}
               alt="avatar"/>
            
       </div>
       <p id="big">Spencer</p>
        <div className={`menu-icon ${dropdown===true?'active':''}`}
             onClick={handleResearcherDropdown}
             title={`${dropdown===true?'Hide' :'Show'} menu`} >
          {dropdown?<IoCloseOutline size={'2rem'}/>: <CiMenuFries size={'2rem'}/>}
        </div>

       <CiHeadphones id="headphones"/>
      </div>   
      
     
      </div>
  )
}
export default Top