import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider

import './index.css';
import LogIn from './components/LogIn.jsx';
import Reset from './components/Reset.jsx';
import Header from './components/Header.jsx';
import Referral from './components/signedUp/referral.jsx';
import Index from './components/signedUp/Index.jsx';
import Settings from './components/signedUp/Settings.jsx';
import Rewards from './components/signedUp/Rewards.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import Myprofile from './components/signedUp/Myprofile.jsx';
import HomePage from './components/signedUp/researchers/HomePage.jsx';
import HomePageComponent from "./components/signedUp/researchers/ben/HomePageComponent.jsx";
import ResearchPage from "./components/signedUp/researchers/ben/ResearchPage.jsx";
import { useEffect } from 'react';
import Draft from './components/signedUp/researchers/ben/Draft.jsx';

function App() {
  const [usertype, setUsertype] = useState('');

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation !== 0) {
        // Prevent rotation
        window.screen.orientation.lock('portrait');
      }
    };

    // Listen for orientation change
    window.addEventListener('orientationchange', handleOrientationChange);

    // Unlock orientation when component unmounts
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      // Unlock orientation
      window.screen.orientation.unlock();
    };
  }, []);
  
  return (
    <ThemeProvider> 
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
            
           {/* Route for authentication */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/SignUp" element={<Signup />} />

            {/* Route for Researcher's page */}
            <Route path='/researcher/home' element={<HomePage />} />
            <Route path='/researcher/settings' element={<SettingsRes />} />
            <Route path='/researcher/research' element={<Research />} />
            {/* Route for Participant's page */} 
            <Route path="/signedUp/Settings" element={<Settings />} />
            <Route path="/signedUp/rewards" element={<Rewards />} />
            <Route path="/signedUp/my-profile" element= {<Myprofile />}/>
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path='/researcher' element={<HomePage />} />
            <Route path='/homepage' element={<HomePageComponent />} />
            <Route path='/researchpage' element={<ResearchPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); // Render the App component

