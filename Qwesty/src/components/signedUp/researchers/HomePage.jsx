import SideBar from "./SideBar"
import Top from './Top'
import Settings from "../Settings";
import { useTheme } from "../../../ThemeContext"

function HomePage() {
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
          <Settings />
        </div>
        </div>

        
      </div>
  )
}
export default  HomePage