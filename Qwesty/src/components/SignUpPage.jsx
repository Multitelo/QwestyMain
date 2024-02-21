import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [content, setContent] = useState('first');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState({value:'', touched:false});
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [usertype, setUsertype] = useState('');
    const [errors, setErrors] = useState({emailError:'',
                                          usertypeErr:false, 
                                          pwdErr:false,
                                          confirmPwdErr:false})
    const [btnState, setBtnState] = useState(true)
    const handleContent = (content) => {
        setContent((prevState) =>
            prevState === 'second'
                ? 'first'
                : prevState === 'first'
                ? 'second'
                : prevState === 'third'
                ? 'second'
                : ''
        );
    };

    const handleEmail = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputValue = e.target.value;
        const isValidEmail = emailRegex.test(inputValue);
    
        setEmail({ ...email, value: inputValue });
    
        console.log("email.touched:", email.touched);
        console.log("email.value:", email.value);
    
        if (!isValidEmail || (email.touched && (!email.value || email.value.length < 8))) {
            setErrors({ ...errors, emailError: 'err' });
        } else {
            setErrors({ ...errors, emailError: 'correct' });
        }
    };
    
    const handleBtnState = ()=>{
        if( errors.emailError==='err' || usertype===""){
            setBtnState(true)
        }
        else{
            setBtnState(false)
        }
        return btnState;
    }
    const handleSubmit = () => {
        // Serialize form data
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('usertype', usertype);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('confirmPwd', confirmPwd);
        
    
        // Disable the submit button or show loading indicator
        fetch('http://localhost/qwestymain/api/signin.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log('Response:', data);
            // Provide feedback to the user about successful submission
            // Redirect the user after successful submission
            window.location.href = '/signedUp/settings';
        })
        .catch(error => {
            console.error('Error:', error);
            // Provide feedback to the user about the error
        });
    };
    
    return (
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                    <Link to='/'>
                        <img src={logo} alt="A logo of Qwesty" />
                    </Link>
                </div>
                <main>
                    {content === 'first' ? (
                        <FirstSignUpContent
                            email={email}
                            setEmail={setEmail}
                            usertype={usertype}
                            setUsertype={setUsertype}
                            handleContent={handleContent}
                            handleEmail={handleEmail}
                            errors={errors}
                            setErrors={setErrors}
                            handleBtnState={handleBtnState}
                            btnState={btnState}
                        />
                    ) : content === 'second' ? (
                        <SecondSignupcontent
                            username={username}
                            setUsername={setUsername}
                            setContent={setContent}
                           
                        />
                    ) : content === 'third' ? (
                        <ThirdSignupcontent
                            password={password}
                            setPassword={setPassword}
                            confirmPwd={confirmPwd}
                            setConfirmPwd={setConfirmPwd}
                            handleSubmit={handleSubmit}
                        />
                    ) : (
                        ''
                    )}
                </main>
            </div>
            <div className="signUp-right"></div>
            <footer>
                {content === 'first' ? (
                    <h2>1/3</h2>
                ) : (
                    <img
                        src={backBtn}
                        alt="an icon that takes you to the previous page"
                        onClick={handleContent}
                    />
                )}
            </footer>
        </div>
    );
}

export default SignUpPage;

const FirstSignUpContent = ({email, setEmail, usertype, setUsertype, handleContent, handleEmail, errors,setErrors, handleBtnState, btnState})=>{
    const handleUserTypeChange = (event)=>{
        setUsertype(event.target.value)
    }
    const handleBlur = () => {
        if (!email.value) {
            setErrors({ ...errors, emailError: 'err' });
        }
    };
    return(
        <div className='first-content'>
            <h1>Sign up</h1>
            <label htmlFor='email'>Please enter your email <sup>*</sup></label>
            <input type="email"
                   id="email"
                   name="email"
                   value={email.value}
                   placeholder='name@gmail.com'
                   onBlur={handleBlur}

                   onChange={handleEmail}
                   className={errors.emailError}
                  
                   />
                   {/* {errors.emailError==='err'&& <span id='errMsg'>Incorrect email</span>} */}
            <div className='radio-inputs'>
                <label className='radio-container'>
                    <input type='radio'
                           value='participant'
                           checked={usertype==='participant'}
                           onChange={handleUserTypeChange}
                           id="participant"/>
                    Participant
                    <span className="checkmark"></span>
                </label>
                <label className='radio-container'>
                    <input type='radio'
                           value='researcher'
                           checked={usertype === 'researcher'}
                           onChange={handleUserTypeChange}
                           id='researcher'/>
                    Researcher
                    <span className="checkmark"></span>
                   
                </label>
                
            </div>
            <button onClick={()=>handleContent('first')}
                    disabled={handleBtnState()}
                    className={handleBtnState() ? 'disabled' : 'enabled'}>
                       Ok</button>
            <p>Already have an account? <span><Link to="/LogIn">Log In</Link></span> </p>
        </div>
    )
}

const SecondSignupcontent = ({username, setUsername, setContent})=>{
    return(
        <div className='second-content'>
            <label htmlFor='username'>Please enter your Username <sup>*</sup> </label>
            <input type="text"
                   id="username"
                   name="username"
                   value={username}
                   placeholder='mandela'
                   onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={()=>setContent('third')}>Next</button>
        </div>
    )
}

const ThirdSignupcontent = ({password, setPassword, confirmPwd, setConfirmPwd, handleSubmit}) => {
    return (
        <div className='third-content'>
            <label htmlFor='pwd'>Enter your password <sup>*</sup></label>
            <input type="password"
                   id="pwd"
                   name="password"
                   value={password}
                   placeholder='**********'
                   onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor='confirmpwd' id="confPwd">Confirm password <sup>*</sup></label>
            <input type="password"
                   id="confirmpwd"
                   name="confirmPwd"
                   value={confirmPwd}
                   placeholder='**********'
                   onChange={(e)=>setConfirmPwd(e.target.value)}/>
            <button onClick={handleSubmit}>Lets Go</button>
        </div>
    )
}
