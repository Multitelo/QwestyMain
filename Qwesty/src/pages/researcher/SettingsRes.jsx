import SideBar from "../../components/share/SideBar"
import Top from '../../components/share/Top'
import { useTheme } from "../../context/ThemeContext"
import avatar from '../../assets/images/resAvatar.svg'
import Footer from "../../components/Footer";
import { useState } from "react";

function SettingsRes() {
  const {resTheme} = useTheme();
  const [isAccountClicked, setIsAccountClicked] = useState(true)
  const [isSupportClicked, setIsSupportClicked] = useState(false)

  const handleClick = (clicked) =>{
    // preventDefault()
    switch(clicked){
      case "Account": 
            setIsAccountClicked(true);
            setIsSupportClicked(false);
            break;
      case "Support":
        setIsAccountClicked(false);
        setIsSupportClicked(true);
        break;
    
      
    }
  }

  return (

    <div className={`researcher-content ${resTheme}`}>
        <div className="researcher-menu">
          <SideBar/>
        </div>

        <div className="home-main">
        <div className="top-section">
          <Top/>
        </div>


        <div className="home-main-section settings">
          {/* content */}
    <div className="insideNav" id={resTheme==="dark"?"insideNavDark":""}>
        <button className={isAccountClicked? "btn" : ''}
                onClick={()=>handleClick("Account")} >Account</button>
        <button className={isSupportClicked? "btn" : ''}
                onClick={()=>handleClick("Support")}>Support</button>
       

       </div>

       <div className="content">
         {isAccountClicked? <Account theme={resTheme}/>: 
          isSupportClicked?<Support theme={resTheme}/>: <Account theme={resTheme}/>}
          </div>
          

          
        </div>
        </div>
        <div className="research-footer">
        <Footer/>
      </div>
        
    </div>
  )
}


const Account = ({theme})=>{
  return(
    <div className={theme==="dark"?"accountContent dark":"accountContent"} style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>
      <div className="headings">
        <h1  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Account</h1>
        <p  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Edit basic informations</p>
      </div>
      
      <div className="avatar-modify">
        <div className="avatar res"><img src={avatar}/></div>
        <div id="upload-avatar"><button>Upload Avatar</button></div>
        <p id="caption" style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Image should not be more than 10mb</p>
        <div id="remove-avatar"><button className={`rmAvatar ${theme}`}>Remove Avatar</button></div>
      </div>
      <label htmlFor="userName" id="uname">Display Username</label>
      <input type="text" name="userName" id="userName"
             placeholder="@Spencer"/>
      <label htmlFor="Email">E-mail address</label>
      <input type="email" name="Email" id="Email"
             placeholder="Spencermagic@gmail.com"/>

      <div className="del-box">
      
       <h3>Delete account</h3>
        <p>by deleting this account you will lose all data associated with it</p>
       
        
        <button id="delBtn">
          Delete account
        </button>
        </div>

    </div>
  )
}



const Support = ({theme})=>{
  return(
    <div className="research-support">
      Support page
    </div>
  )
}

export default  SettingsRes