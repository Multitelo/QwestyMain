import SideBar from "./SideBar"
import { useTheme } from "../../../ThemeContext";
function Insights() {
    const {theme} = useTheme();


  return (
   <>
   <SideBar theme={theme}/>
   </>
  )
}
export default Insights