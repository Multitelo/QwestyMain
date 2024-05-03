import { useState } from "react"

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import SuccessMsg from "../components/mahtot/successMsgs/SuccessMsg";

function ResetSuccess() {

    
        return (

                 <SuccessMsg title="Password reset successful">
                    <p><Link to='/login' id="link">Login</Link> now</p>
                 </SuccessMsg>
                             
                
           
          )
   
    
 
}
export default ResetSuccess