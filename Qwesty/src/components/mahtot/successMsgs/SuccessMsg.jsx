import { Children, useState } from "react"
import logo from '../../../assets/images/Logo.png'
import { FaCircleCheck } from "react-icons/fa6";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

function SuccessMsg({title, msg, children}) {

    
        return (


            <div className="email-sent-container">
                <div>
                   <Link to='/'>
                        <img src={logo}
                             alt="logo of solvety"/>
                    </Link>
                </div>
                <div className="msg">
                <div className="title">
                    <FaCircleCheck color={'#8E5DF5'}/>  <h2>{title}</h2>
                </div>
                
                <div>
                    {
                    msg ? <p>{msg}</p> : children
                }

                 </div>
             </div>
            </div>
          )
  
 
}
export default SuccessMsg