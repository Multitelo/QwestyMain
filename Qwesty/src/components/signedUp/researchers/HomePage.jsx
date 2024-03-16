import SideBar from "./SideBar"
import Top from './Top'
import Settings from "../Settings";
import { useTheme } from "../../../ThemeContext"
import ProfileContainer from "./ben/ProfileContainer";
import LineChart from "./ben/LineChart";
import ComingSoon from "./ben/ComingSoon";

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
          {/* content */}
        <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 1207:grid-cols-3 lg:gap-8">
            {/* profile  */}
            <div className="profileContainer">
              <ProfileContainer />
            </div>
            {/* chart */}
            <div className="block md:hidden">
              <LineChart />
            </div>
            {/* coming soon */}
            <div className="ComingSoon 1207:col-span-2">
              <ComingSoon />
            </div>
          </div>
          {/* chart */}
          <div className="chart hidden md:block">
            <LineChart />
          </div>
        </div>
        </div>

        
      </div>
  )
}
export default  HomePage