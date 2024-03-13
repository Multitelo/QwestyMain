import SideBar from "../../components/share/SideBar"
import Top from "../../components/share/Top";
import { useTheme } from "../../ThemeContext"


function Research() {
    const {resTheme} = useTheme();
  return (
    
    <div className={`researcher-content ${resTheme}`}>
        <div className="researcher-menu">
          <SideBar/>
        </div>

        <div className="home-main">
        <div className="top-section">
          <Top/>
        </div>


        <div className="home-main-section">
          {/* content */}
        
        </div>
        
        <div className="research-footer">
        <Footer/>
      </div>
        </div>

        
    </div>
  )
}
export default Research