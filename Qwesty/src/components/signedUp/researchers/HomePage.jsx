import { useTheme } from '../../../ThemeContext'; 
import SideBar from './SideBar';
import Top from './Top';
import Footer from "../../Footer";

function HomePage() {

    const {theme} = useTheme();


  return (

    <div className={`researcher-home-container ${theme}`}>
       
        <div id="side-nav">
             {<SideBar theme={theme}/>}
        </div> 

        <div id="topNav">
            {<Top theme={theme}/>}
        </div>

        <div className="main-content myProfile-content">


        </div>

 <div className="signedUp-footer">
            {<Footer/>}
        </div>

    </div>
  )
}
export default HomePage