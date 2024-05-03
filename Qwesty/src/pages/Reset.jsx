import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import backBtn from '../assets/images/backBtn.png';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';
import { useTheme} from '../context/ThemeContext'
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Reset() {
    const [email, setEmail] = useState('');
    const {usertype,
        setUsertype,
        setEmailSent
        } = useTheme();
    const navigateTo = useNavigate()

     const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('usertype', usertype)

        try{
            const response = await fetch('http://localhost/qwestymain/api/forgot.php', {
                method:'POST',
                body: formData,
        })

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);

        }

        const data = await response.json();

        if(data.success){
            setEmailSent(true)
            navigateTo('/email\-sent')
        }
        console.log(data)
    }catch (error) {
        console.error('Network error:', error.message);
        
    };
    }
    const handleUserTypeChange = (event)=>{
        
        setUsertype(event.target.value)
    }
    return (
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                <Link to="/">
                <img src={logo} alt="A logo of Qwesty" /></Link>    
                </div>

                <main>
                   
                   <div>
                        <h2>Reset password</h2>

                        <form onSubmit={handleSubmit} className='first-content reset'>
                        <label htmlFor='email'>Please what is your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder='name@gmail.com'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='radio-inputs'>
                            <label className='radio-container'>
                                <input type='radio'
                                    value='participant'
                                    checked={usertype==='participant'}
                                    onChange={handleUserTypeChange}
                                    id="participant"
                                    required/>
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
                        <button type='submit'>Send link to email</button>
                        </form>
                        <p>Remembered your password? <span><Link to="/login">Login</Link></span></p>
                    </div>
                </main>
            </div>
            <div className="signUp-right">
            <footer>
            <Link to="/LogIn">
                <img
                    src={backBtn}
                    alt="an icon that takes you to the previous page"
                />
                </Link>
            </footer>
            </div>
           
        </div>
    );
}

export default Reset;
