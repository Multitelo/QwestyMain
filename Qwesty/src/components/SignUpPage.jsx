import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
// import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [content, setContent] = useState('first');
    const [username, setUsername] = useState({value:'', touched:false });
    const [email, setEmail] = useState({value:'', touched:false});
    const [password, setPassword] = useState({value:'', touched:false});
    const [confirmPwd, setConfirmPwd] = useState({value:'', touched:false});
    const [usertype, setUsertype] = useState('');
    const [errors, setErrors] = useState({emailError:'',
                                          unameErr:false, 
                                          pwdErr:false,
                                          confirmPwdErr:false})
    const [pwdErr, setPwdErr] = useState(false)
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
    
       
    
        if (!isValidEmail || (email.touched && (!email.value || email.value.length < 8))) {
            setErrors({ ...errors, emailError: 'err' });
        } else {
            setErrors({ ...errors, emailError: 'correct' });
        }
    };
    
    const handleBtnState = () => {
        if (content === 'first') {
            return (errors.emailError === 'err' || usertype === "");
        } else if (content === 'second') {
            return errors.unameErr === 'err' || !username.value;
        } else if (content === "third"){
            return (errors.confirmPwdErr ==='err' || errors.pwdErr ==='err'|| !password.value || !confirmPwd.value )
        }
   
        return true; 
    };

    const handleSubmit = () => {
        // Serialize form data
        if(password.value!==confirmPwd.value){
            setPwdErr(true)
            setErrors({...errors, confirmPwdErr:'err'})
        }
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('usertype', usertype);
        formData.append('username', username.value);
        formData.append('password', password.value);
        // formData.append('confirmPwd', confirmPwd);
        
    
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
                            errors={errors}
                            setErrors={setErrors}
                            handleBtnState={handleBtnState}
                            btnState={btnState}
                        />
                    ) : content === 'third' ? (
                        <ThirdSignupcontent
                            password={password}
                            setPassword={setPassword}
                            confirmPwd={confirmPwd}
                            setConfirmPwd={setConfirmPwd}
                            errors={errors}
                            setErrors={setErrors}
                            handleSubmit={handleSubmit}
                            handleBtnState={handleBtnState}
                            pwdErr={pwdErr}
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

const SecondSignupcontent = ({username, setUsername, setContent, setErrors, errors, handleBtnState})=>{
    
    const [errMsg, setErrMsg] = useState('')
    const handleUname = (e) =>{
        const inputName= e.target.value
        const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
        const isValidUsername = usernameRegex.test(inputName)
       
        setUsername({...username, value:inputName})
     
        if (!isValidUsername || !/^[a-zA-Z0-9_]+$/.test(inputName)) {
            setErrors({ ...errors, unameErr: 'err' });
            setErrMsg('')
        } else {
            setErrors({ ...errors, unameErr: 'correct' });
            setErrMsg('')
        }
        
        if(!/^[a-zA-Z0-9_]+$/.test(inputName)){
            setErrMsg("username should contain only letters, numbers and underscore")
        }
    }
    const handleBlur = () => {
        if (!username.value) {
            setErrors({ ...errors, unameErr: 'err' });
        }
    };
    return(
        <div className='second-content'>
            <label htmlFor='username'>Please enter your Username <sup>*</sup> </label>
            <input type="text"
                   id="username"
                   name="username"
                   value={username.value}
                   placeholder='mandela'
                   onChange={handleUname}
                   onBlur={handleBlur}
                   className={errors.unameErr}/>
              <div className='errMsg'>{errMsg}</div>
            <button onClick={()=>setContent('third')}
                    disabled={handleBtnState()}
                    className={handleBtnState() ? 'disabled' : 'enabled'}>
                        Next</button>
        </div>
    )
}

const ThirdSignupcontent = ({password, setPassword, confirmPwd, setConfirmPwd, handleSubmit, errors, setErrors, handleBtnState,pwdErr}) => {
    
    const errMsg = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'<,>.?/\[\]\\|\-]).{8,}$/;

    const handlePwd = (e) => {
        const inputPwd = e.target.value;
        const isValidPwd = passwordRegex.test(inputPwd);
    
        setPassword({ ...password, value: inputPwd });
    
        if (!isValidPwd || (password.touched && (!inputPwd || inputPwd.length < 8))) {
            setErrors({ ...errors, pwdErr: 'err' });
        } else {
            setErrors({ ...errors, pwdErr: 'correct' });
        }
    
        // Revalidate confirm password field whenever password field changes
        handleConfirmPwd(confirmPwd.value);

    };
    
    const handleConfirmPwd = (e) => {
        const confirmPwdValue = e.target.value;
        const isValidPwd = passwordRegex.test(confirmPwdValue);
    
        setConfirmPwd({ ...confirmPwd, value: confirmPwdValue });
    
        if (!confirmPwdValue) {
            setErrors({ ...errors, confirmPwdErr: 'err' });
        } else if (password.value !== confirmPwdValue || !isValidPwd) {
            setErrors({ ...errors, confirmPwdErr: 'err' });
        } else {
            setErrors({ ...errors, confirmPwdErr: 'corrects' });
        }
    };
    
    const handleBlur = () => {
        if (!password.value) {
            setErrors({ ...errors, pwdErr: 'err' });
        }
    };
    return (
        <div className='third-content'>
            <label htmlFor='pwd'>Enter your password <sup>*</sup></label>
            <input type="password"
                   id="pwd"
                   name="password"
                   value={password.value}
                   placeholder='**********'
                   onChange={handlePwd}
                   onBlur={handleBlur}

                   className={errors.pwdErr}
                   /> 
     <div className='errMsg'>{errors.pwdErr==="err"?errMsg:""}</div>

            <label htmlFor='confirmpwd' id="confPwd">Confirm password <sup>*</sup></label>
            <input type="password"
                   id="confirmpwd"
                   name="confirmPwd"
                   value={confirmPwd.value}
                   placeholder='**********'
                   onChange={handleConfirmPwd}
                   onBlur={()=>{if (!confirmPwd.value) {
                    setErrors({ ...errors, confirmPwdErr: 'err' });
                }}}
                   className={errors.confirmPwdErr}/>
                   {pwdErr && <div className='errMsg'>Password didn't match</div>}
            <button onClick={handleSubmit}
                     disabled={handleBtnState()}
                     className={handleBtnState() ? 'disabled' : 'enabled'}>Lets Go</button>

        </div>
    )
}
