import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';

function ForgottenPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to server for password reset
        axios.post('./php/reset_password.php', { email })
            .then((response) => {
                console.log(response.data);
                // Handle success, e.g., show a success message
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message
            });
    };

    return (
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                    <img src={logo} alt="A logo of Qwesty" />
                </div>

                <main>
                    <div className='first-content'>
                        <h1>Forgot Password</h1>
                        <label htmlFor='email'>Enter your email address to reset your password.</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder='name@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Reset Password</button>
                        <p>Remembered your password? <span><a href="/login">Login</a></span></p>
                    </div>
                </main>
            </div>
            <div className="signUp-right"></div>
            <footer>
            <a href="/login">
                <img
                    src={backBtn}
                    alt="an icon that takes you to the previous page"
                />
                </a>
            </footer>
        </div>
    );
}

export default ForgottenPasswordPage;
