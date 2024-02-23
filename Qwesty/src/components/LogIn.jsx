import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';
import eyeOpen from '../assets/images/eye.jpg';
import eyeClosed from '../assets/images/hiddenEye.jpg';

function LogIn() {
    const [email, setEmail] = useState({value:'', touched:false})
    const [password, setPassword] = useState({value:'', touched:false})
    const [rememberDetails, setRememberDetails] = useState(false)
    const [content, setContent] = useState('email');
    const [errors, setErrors] = useState({emailError:'',
                                          pwdErr:false})
    
    const [btnState, setBtnState] = useState(true)
    const [showPwd, setShowPwd] = useState(false)
    const errMsg = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to PHP script using Axios
        axios.post('./php/login.php', { email, password })
            .then((response) => {
                console.log(response.data);
                // Handle successful login, e.g., redirect to dashboard
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message
            });
    };


    const handleEmail = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputValue = e.target.value;

        setEmail({ ...email, value: inputValue });
    
       
        const isValidEmail= emailRegex.test(inputValue)
        if (!isValidEmail || (email.touched && (!email.value || email.value.length < 8))) {
            setErrors({ ...errors, emailError: 'err' });
        } else {
            setErrors({ ...errors, emailError: 'correct' });
        }
    };
    
    
    
    
    const handleBtnState = () => {

        if (content === 'email') {
            return (errors.emailError === 'err' );
        } else if (content === 'password') {
            return (errors.pwdErr ==='err'|| !password.value)
        } 
   
        return true; 
    };

    const handleNext = () => {
        if (content === 'email') {
            setContent('password');
        }
    };

    const handleBack = () => {
        if (content === 'password') {
            setContent('email');
        }
    };

    const handleBlur = () => {
        if (!email.value) {
            setErrors({ ...errors, emailError: 'err' });
        }
    };

   
      

    const handlePwd = (e) => {

        const inputPwd = e.target.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'<,>.?/\[\]\\|\-]).{8,}$/;

        const isValidPwd = passwordRegex.test(inputPwd);
    
        setPassword({ ...password, value: inputPwd });
    
        if (!isValidPwd || (password.touched && (!inputPwd || inputPwd.length < 8))) {
            setErrors({ ...errors, pwdErr: 'err' });
        } else {
            setErrors({ ...errors, pwdErr: 'correct' });
        }
     };

    return (
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                   <Link to="/">
                   <img src={logo} alt="A logo of Qwesty" />
                    </Link> 
                </div>

                <main>
                    {content === 'email' ? (
                        <div className='first-content'>
                            <h1>Login</h1>
                            <label htmlFor='email'>Please enter your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email.value}
                                placeholder='name@gmail.com'
                                onBlur={handleBlur}
                                onChange={handleEmail}
                                className={errors.emailError}
                            />

                        <label id="checkbox-input">
                            <input type='checkbox'
                                   checked={rememberDetails}
                                   onChange={e=> setRememberDetails(e.target.checked)}/>
                            Remember for 30 days
                        </label>

                            <button onClick={handleNext}
                                    disabled={handleBtnState()}
                                    className={handleBtnState() ? 'disabled' : 'enabled'}>
                                Next</button>
                            <p>Don't have an account? <span><Link to="/SignUp">Sign up</Link></span></p>
                        </div>
                    ) : content === 'password' ? (
                        <div className='second-content login'>
                                <h2>Welcome back mandela</h2>

                            <label htmlFor='pwd'>Enter your Password</label>

                <div className={`pwd-container ${errors.pwdErr}`}>

                        <input type={showPwd?'text':'password'}
                               id="pwd"
                               name="password"
                               value={password.value}
                               placeholder='**********'
                               onChange={handlePwd}
                               onBlur={()=> {if (!password.value) {
                                setErrors({ ...errors, pwdErr: 'err' });
                            }}}

                   
                   /> 

                   <img src={showPwd?eyeOpen: eyeClosed}
                        alt="An image of an eye, which indicates whether the password should be visible or not"
                        onClick={()=> setShowPwd(prevState=>!prevState)}
                        className={showPwd?'open':""}
                />
                        </div>
                        <div className='errMsg'>{errors.pwdErr==="err"?errMsg:""}</div>

                            <Link to='/signedUp/Settings'
                                  id="loginBtn"><button>
                                Log In
                                </button></Link>
                            <Link to="/Reset" 
                                  id="forgotLink"> <p>forgot password?</p></Link>
                        </div>
                    ) : null}
                </main>
            </div>
            <div className="signUp-right"></div>
            <footer>
                {content === 'email'?(
                    <h2>1/2</h2>
                ): (
                    <img
                    onClick={handleBack}
                    src={backBtn}
                    alt="an icon that takes you to the previous page"
                />
                )}
               
            </footer>
        </div>
    );
}

export default LogIn;
