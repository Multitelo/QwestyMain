import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import SignInn from './components/SignInn.jsx';
import LogIn from './components/LogIn.jsx';
import LogInn from './components/LogInn.jsx';
import Reset from './components/Reset.jsx';
import Header from './components/Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Header />
              
            </>
          }
        />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signinn" element={<SignInn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/loginn" element={<LogInn />} />
        <Route path="/reset" element={<Reset />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
