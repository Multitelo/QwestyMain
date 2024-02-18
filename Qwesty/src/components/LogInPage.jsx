
// import '../assets/css/login-signup.css';
// import logo from '../assets/images/logoBlack.png';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';


// function LogInPage() {

//     const [content, setContent] = useState('first');
    
//     const handleContent = (content)=>{
//              setContent(prevState => prevState==='second'?'first':prevState==='first'?'second':prevState==='third'?'second':'')
//     }

//     const [username, setUsername] = useState('');
//     const [email, setEmail]  = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPwd, setConfirmPwd] = useState('')
//     const [usertype, setUsertype] = useState('')

    
//   return (
    
//     <div className='signUp-container'>
//      <div className='signUp-left'>
//        <div id="logo-container">
//            <Link to="/">
//            <img src={logo}
//                  alt="A logo of Qwesty"/>
//            </Link>
//        </div>

//        <main>
//         {content === 'first'?<FirstSignUpContent email={email} setEmail={setEmail} usertype={usertype} setUsertype={setUsertype} handleContent={handleContent}/>:
//         content==='second'?<SecondSignupcontent username={username} setUsername={setUsername} setContent={setContent}/>:
//         content==='third'?<ThirdSignupcontent password={password} setPassword={setPassword} confirmPwd={confirmPwd} setConfirmPwd={setConfirmPwd} />:''
//         }
//        </main>

    
//   </div>
// <div className='signUp-right'>

// </div>
//  <footer>
//  {content==='first'?<h2>1/3</h2>:
//  <img src={backBtn} 
//       alt="an icon that takes you to the previous page" 
//       onClick={handleContent}/>}
//        </footer>
//     </div>
//   )
// }
// export default LogInPage


// const FirstSignUpContent = ({email, setEmail, usertype, setUsertype, handleContent})=>{
 
//     const handleUserTypeChange = (event)=>{
//         setUsertype(event.target.value)
//     }
    
//     return(
//         <div className='first-content'>
//             <h1></h1>
//             <label htmlFor='email'>Please enter your email</label> 
//             <input type="email"
//                    id="email"
//                    name="email"
//                    value={email}
//                    placeholder='name@gmail.com'
//                    onChange={(e)=>setEmail(e.target.value)}/>
//           <div className='radio-inputs'>   
//           <label className='radio-container'>
//             <input type='radio'
//                    value='participant'
//                    checked={usertype==='participant'}
//                    onChange={handleUserTypeChange}
//                    id="participant"/>
//                Participant
//                <span className="checkmark"></span>
//                </label>
           
//                <label className='radio-container'> <input type='radio'
//                    value='researcher'
//                    checked={usertype === 'researcher'}
//                    onChange={handleUserTypeChange}
//                    id='researcher'/>
//            Researcher
//            <span class="checkmark"></span>
//            </label>
//             </div>
//        <button onClick={()=>handleContent('first')}>Ok</button>
//        <p>Already have an account? <span>Log in</span> </p>
//         </div>
//     )
// }

// const SecondSignupcontent = ({username, setUsername, setContent})=>{
//     return(
//         <div className='second-content'> 
               
//                <label htmlFor='username'>Please enter your Username</label> 
//             <input type="text"
//                    id="username"
//                    name="username"
//                    value={username}
//                    placeholder='mandela'
//                    onChange={(e)=>setUsername(e.target.value)}/>

//         <button onClick={()=>setContent('third')}>Next</button>
//         </div>
//     )
// }

// const ThirdSignupcontent = ({password, setPassword, confirmPwd, setConfirmPwd})=>{

//  return(
//     <div className='third-content'>
//           <label htmlFor='pwd'>Enter your password</label> 
//             <input type="password"
//                    id="pwd"
//                    name="password"
//                    value={password}
//                    placeholder='**********'
//                    onChange={(e)=>setPassword(e.target.value)}/>

//         <label htmlFor='confirmpwd' id="confPwd">Confirm password</label> 
//             <input type="password"
//                    id="confirmpwd"
//                    name="confirmPwd"
//                    value={confirmPwd}
//                    placeholder='**********'
//                    onChange={(e)=>setConfirmPwd(e.target.value)}/>

//         <button>Lets go!</button>
//         </div>
    
//  )

// }