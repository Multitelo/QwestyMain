import SideBar from "./SideBar"
import Top from './Top'
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
          Home page
        </div>
        </div>

        
      </div>
  )
}
export default  HomePage