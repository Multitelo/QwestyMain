import { SideBar, TopNav } from "./Index"

function Settings() {
  return (
    <div className="settings-container" style={{backgroundColor: "#F7F7F7"}}>


   <div id="side-nav">
   {<SideBar/>}
    </div> 
    <div id="topNav">
    {<TopNav/>}
    </div>
   
    <div className="main-content">
       
       
        </div>

    </div>


    
    
    
  )
}
export default Settings