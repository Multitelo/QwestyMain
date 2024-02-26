import { SideBar, TopNav } from "./Index"
import '../../assets/css/my-profile.css';
import Footer from "../Footer";
import { useState } from "react";
import { useTheme } from '../../ThemeContext'; 
import Select from "react-select";
import makeAnimated from 'react-select/animated';


function Myprofile() {
         
        const {theme} = useTheme();

  return (
    <div className={`myProfile-container ${theme}`}>

        <div id="side-nav">
             {<SideBar theme={theme}/>}
        </div> 

        <div id="topNav">
            {<TopNav theme={theme}/>}
        </div>

        <div className="main-content myProfile-content">
    hello
        </div>

    </div>
  )
}
export default Myprofile