import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                    <img src={logo} alt="A logo of Qwesty" />
                </div>

                <main>
                    {content === 'email' ? (
                        <div className='first-content'>
                            <h1>Login</h1>
                            <label htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder='name@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleNext}>Next</button>
                            <p>Don't have an account? <span><a href="/SignUp">Sign up</a></span></p>
                        </div>
                    ) : content === 'password' ? (
                        <div className='second-content'>
                            <label htmlFor='pwd'>Enter your Password</label>
                            <input
                                type="password"
                                id="pwd"
                                name="password"
                                value={password}
                                placeholder='**********'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button><Link to='/signedUp/settings'>Log In</Link></button>
                            <p>Forgotten Your Password? <span><a href="/Reset">Reset</a></span></p>
                        </div>
                    ) : null}
                </main>
            </div>
            <div className="signUp-right"></div>
            <footer>
                <img
                    onClick={handleBack}
                    src={backBtn}
                    alt="an icon that takes you to the previous page"
                />
            </footer>
        </div>
    );
}

export default LoginPage;
