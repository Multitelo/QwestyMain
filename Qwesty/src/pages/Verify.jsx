import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';
import '../assets/css/verify.css'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Verify = () => {
  const [otpValues, setOTPValues] = useState(['', '', '', '', '']); 
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigateTo = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userId');
    const userTypeParam = urlParams.get('usertype');
    setUserId(userIdParam);
    setUserType(userTypeParam);
  }, []);

  
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
    const otpString = otpValues.join('');
    const otpConcatenated = parseInt(otpValues.join(''), 10);

    try {
      const userIdNumber = parseInt(userId, 10);

     
          const requestBody = {
              userId: userIdNumber, 
              otp: otpConcatenated,      
              usertype: userType,
          };
      
          const formData = new FormData();
          formData.append('userId', userId);
          formData.append('otp', otpValues.join('')); 
          formData.append('usertype', userType);

      const response = await fetch('http://localhost/qwestymain/api/verify_otp.php', {
        method: 'POST',
        body: formData,
      });
    
      if (response.ok) {
        console.log('OTP verification successful');
       
        const data = await response.json();
        console.log(data)


        if (data) {
        const { token } = data; 

        if (token) {
            localStorage.setItem('jwtToken', token); 
            navigateTo('/researcher/home');
        } else {
            console.error('Token not found in response data');
        }
    } else {
        console.error('Invalid response data');
        
    }
} else {
        console.error('Error verifying OTP:', response.statusText);
        setErrMsg('Wrong Input')
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
          <p style={{color:'red'}}>{errMsg}</p>
          <div>
            
            <p>Code will expire in 10 minutes.</p>
          
          </div>
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
