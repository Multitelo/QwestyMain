import logoBlack from "../../../assets/images/logoBlack.png";
import logowhite from "../../../assets/images/Logo.png";
import searchIcon from '../../../assets/images/search.svg';
import settingsB from '../../../assets/images/settingsB.svg';
import '../../../assets/css/researcher.css';
import { useState } from "react";

function SideBar() {
        const [search, setSearch] = useState('')
  return (
    <div className="researcher-side-bar">
        <img src={logoBlack}
             alt="logo of Qwesty"/>

        <div className="side-links small">

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
     
             
         </div>    
    </div>
  )
}
export default SideBar