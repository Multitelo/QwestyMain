import { useState } from "react"
import logo from '../assets/images/Logo.png';
import { FaCircleCheck } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import SuccessMsg from "../components/mahtot/successMsgs/SuccessMsg";

function EmailSent() {
    const {emailSent} = useTheme();

    if(emailSent){
        return (

                 <SuccessMsg title="Email Sent"
                             msg="Please check your email and follow the link we've sent to proceed."/>
           
          )
    }
    else{
        return(
            null
        )
    }
 
}
export default EmailSent