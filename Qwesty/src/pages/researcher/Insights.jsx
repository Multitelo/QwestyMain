import SideBar from "../../components/share/SideBar"
import { useTheme } from "../../context/ThemeContext";
function Insights() {
    const {theme} = useTheme();


  return (
   <>
   <SideBar theme={theme}/>
   </>
  )
}
export default Insights