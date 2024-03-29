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

  const handleVerify = async () => {
    try {
      const response = await fetch('http://localhost/qwestymain/api/verify_otp.php', {
        mode: 'no-cors',
            method: "post",
            headers: {
                 "Content-Type": "application/json"
            },
        body: JSON.stringify(otpValues),
      });
  
      if (response.ok) {
        console.log('OTP verification successful');
      } else {
        console.error('Error verifying OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  

  // Function to check if all OTP values are filled
  const isAllValuesFilled = otpValues.every(value => value !== '');

  return (
    <div style={{width:'100%', height:'100%', minHeight:'100vh', backgroundColor:'white'}}>
      <div className='verify-container'>
        <Link to='/'> <img src={logo} alt="Logo of qwesty"/></Link>
        <h1>OTP Verification</h1>
        <div id='verify-box'> {otpValues}
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
          <div><p>Code will expire in 10 minutes.</p></div>
          <div style={{display:'flex'}} className='verify-btns'>
            <button 
            onClick={handleVerify} 
            disabled={!isAllValuesFilled}
            className={isAllValuesFilled ? 'not' : 'disabled-button'}>

  Verify
</button>
<button>Resend</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
