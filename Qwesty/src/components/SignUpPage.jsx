import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';


function SignUpPage() {
    const [content, setContent] = useState('first');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [usertype, setUsertype] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to PHP script using Axios
        axios.post('./php/signin.php', { email, usertype, username, password })
            .then((response) => {
                console.log(response.data);
                // Handle successful submission, e.g., show a success message
                history.push('/signedUp/settings');
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
                    {content === 'first' ? (
                        <FirstSignUpContent
                            email={email}
                            setEmail={setEmail}
                            usertype={usertype}
                            setUsertype={setUsertype}
                            handleContent={handleContent}
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
                          handleSubmit={handleSubmit} // Pass handleSubmit function
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


const FirstSignUpContent = ({email, setEmail, usertype, setUsertype, handleContent})=>{
 
    const handleUserTypeChange = (event)=>{
        setUsertype(event.target.value)
    }
    
    return(
        <div className='first-content'>
            <h1>Sign up</h1>
            <label htmlFor='email'>Please enter your email</label> 
            <input type="email"
                   id="email"
                   name="email"
                   value={email}
                   placeholder='name@gmail.com'
                   onChange={(e)=>setEmail(e.target.value)}/>
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
           
               <label className='radio-container'> <input type='radio'
                   value='researcher'
                   checked={usertype === 'researcher'}
                   onChange={handleUserTypeChange}
                   id='researcher'/>
           Researcher
           <span class="checkmark"></span>
           </label>
            </div>
       <button onClick={()=>handleContent('first')}>Ok</button>
       <p>Already have an account? <span><a href="/logIn">Log In</a></span> </p>
        </div>
    )
}

const SecondSignupcontent = ({username, setUsername, setContent})=>{
    return(
        <div className='second-content'> 
               
               <label htmlFor='username'>Please enter your Username</label> 
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
          <label htmlFor='pwd'>Enter your password</label> 
            <input type="password"
                   id="pwd"
                   name="password"
                   value={password}
                   placeholder='**********'
                   onChange={(e)=>setPassword(e.target.value)}/>

        <label htmlFor='confirmpwd' id="confPwd">Confirm password</label> 
            <input type="password"
                   id="confirmpwd"
                   name="confirmPwd"
                   value={confirmPwd}
                   placeholder='**********'
                   onChange={(e)=>setConfirmPwd(e.target.value)}/>

        <button><a href="/signedUp/settings">Let's Go</a></button>
        </div>
    
 )

}