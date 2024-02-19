import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberDetails, setRememberDetails] = useState(false)
    const [content, setContent] = useState('email');

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
                                value={email}
                                placeholder='name@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        <label id="checkbox-input">
                            <input type='checkbox'
                                   checked={rememberDetails}
                                   onChange={e=> setRememberDetails(e.target.checked)}/>
                            Remember for 30 days
                        </label>
                            <button onClick={handleNext}>Next</button>
                            <p>Don't have an account? <span><Link to="/SignUp">Sign up</Link></span></p>
                        </div>
                    ) : content === 'password' ? (
                        <div className='second-content'>
                                <h2>Welcome back mandela</h2>

                            <label htmlFor='pwd'>Enter your Password</label>
                            <input
                                type="password"
                                id="pwd"
                                name="password"
                                value={password}
                                placeholder='**********'
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
