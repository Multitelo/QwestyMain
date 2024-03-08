import React, { useState } from 'react';
import logo from '../assets/images/logoEdited.jpg';
import '../assets/css/verify.css'; 
import { Link } from 'react-router-dom';

const Verify = () => {
  const [otpValues, setOTPValues] = useState(['', '', '', '', '']); 

  
  const handleChange = (index, value) => {
   
    if (!isNaN(value) && value >= 0) {
      const newValues = [...otpValues];
      newValues[index] = value.slice(0, 1); 
      setOTPValues(newValues);
    }
  };
  console.log(otpValues)

 
  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && otpValues[index] === '') {
     
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else if (event.key === 'ArrowRight') {
     
      if (index < 4) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (event.key === 'ArrowLeft') {
     
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  return (
    <div style={{width:'100%', height:'100vh', backgroundColor:'white'}}>
    <div className='verify-container'>
      <Link to='/'> <img src= {logo}
            alt="Logo of qwesty"/></Link>

      
            <h1>Verify Email</h1>

            <div id='verify-box'>
            <p>Please enter the code sent to your email to finish signing up process.</p>
      

       <div className="otp-input-container">
        
        {otpValues.map((value, index) => (
           <input
           key={index}
           id={`otp-input-${index}`}
           type="text" 
           inputMode="numeric" 
           className="otp-input"
           value={value}
           onChange={(e) => handleChange(index, e.target.value)}
           onKeyDown={(e) => handleKeyDown(e, index)}
           maxLength={1} 
           pattern="[0-9]*" 
           noValidate 
         />
        ))}
        </div>

        <div><p>Code will expire in 20 minutes.</p></div>
        <button>Resend</button>
        </div>
    </div>
    </div>
  );
};

export default Verify;
