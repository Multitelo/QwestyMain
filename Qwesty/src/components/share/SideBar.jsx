import logoBlack from "../../assets/images/Logo.png";
import logowhite from "../../assets/images/Solvety_logo_white.png";
import searchIcon from '../../assets/images/search.svg';
import settingsW from '../../assets/images/settingsB.svg';
import settingsB from '../../assets/images/settings.svg';
import gridB from '../../assets/images/gridB.svg';
import gridW from '../../assets/images/gridW.svg';
import insightB from '../../assets/images/insightB.svg';
import insightW from '../../assets/images/insightW.svg';
import pieChatB from '../../assets/images/pie-chartB.svg';
import pieChatW from '../../assets/images/pie-chartW.svg';
import logoutW from '../../assets/images/log-outB.svg';
import logoutB from '../../assets/images/log-out.svg';
import '../../assets/css/researcher.css';
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NavLink, useLocation } from "react-router-dom";
import ToggleInput from "../ToggleInput";
import { useNavigate } from 'react-router-dom';

function SideBar() {
        const {resTheme, researcherTheme, dropdown,setDropdown } = useTheme();

        const [search, setSearch] = useState('')
        const location = useLocation();
        const navigateTo = useNavigate();

        const menuItem = [
          {
              path: "/researcher/home" ,
              name: "Home",
              icon: resTheme === "dark" || location.pathname === "/researcher/home" ? gridW : gridB,
          },
       
          {
              path: "/researcher/research",
              name: "Research",
              icon: resTheme === "dark" || location.pathname === "/researcher/research" ? pieChatW : pieChatB,
          },
          {
              path: "/researcher/settings",
              name: "Settings",
              icon: resTheme === "dark" || location.pathname === "/researcher/settings" ? settingsW : settingsB,
          },
      ];

      useEffect(() => {
          window.addEventListener('resize', () => {

               let vh = window.innerHeight * 0.01;
               document.documentElement.style.setProperty('--vh', `${vh}px`);
             });

          if (dropdown) {
            document.body.classList.add('fixed-body');
          } else {
            document.body.classList.remove('fixed-body');
          }
      
          return () => {
            document.body.classList.remove('fixed-body');
          };
        }, [dropdown]);
      
        useEffect(() => {
          document.addEventListener(onC, handleOutsideClick);
      
          return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
          };
        }, [dropdown]);
        
        const handleOutsideClick = (event) => {
          if (!event.target.closest('.side-links')) {
               setDropdown(false);
          }
        };

  
         
        
          const handleLogout = () => {
            localStorage.removeItem('jwtToken');
        
           navigateTo('/login');
          };


  return (
    <div className={`researcher-bar small ${resTheme} ${dropdown===true? 'dropdown':''}`}>
        <div className="logo">
        <img src={resTheme === 'light'? logoBlack:logowhite}
             alt="logo of Qwesty"/>
         </div>

        <div className={`side-links small ${dropdown===true?'display':''}`} >
          
         <div className="flex-search">
            <img src={searchIcon} 
                 id="search-icon"  
                 alt="search-icon"/>
                 
            <input type='search'
                   value={search}
                   onChange={(e)=>setSearch(e.target.value)}
                   placeholder="search"
                   className="search"/>
          </div>
          
          {
               menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} 
                            className={`side-link  ${item.name}`} 
                            activeClassName='active'
                            exact
                            >
                         <div className="side-icon">
                              <img src={item.icon} 
                                   alt={item.name}
                                   id={item.name}/></div>
                         <div className="link-text">{item.name}</div>
                    </NavLink>
               ))
          
          }
         <div id="toggle-theme">
          <p>{resTheme==='light'?'Dark':"Light"} theme</p>
          <ToggleInput onChange={researcherTheme} checked={resTheme==='light'?false:true}/>
         </div>

          <div className="logout-btn" onClick={handleLogout}>
               <img src={resTheme==='light'?logoutB:logoutW}
                    alt="logout icon"/>
                    <p>Log out</p>
          </div>
             
         </div>    
    </div>
  )
}
export default SideBar