import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider

import './index.css';
import LogIn from './components/LogIn.jsx';
import LogInn from './components/LogInn.jsx';
import Reset from './components/Reset.jsx';
import Header from './components/Header.jsx';
import Referral from './components/referral.jsx';
import Index from './components/signedUp/Index.jsx';
import Settings from './components/signedUp/Settings.jsx';
import Rewards from './components/signedUp/Rewards.jsx';
import SignUpPage from './components/SignUpPage.jsx';
function App() {
  const [theme, setTheme] = useState("light");

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
            {/* <Route path="/signUp" element={<SignUp />} /> */}
           
            <Route path="/login" element={<LogIn />} />
            <Route path="/loginn" element={<LogInn />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/signedUp/settings" element={<Settings />} />
            <Route path="/signedUp" element={<Index />} />
            <Route path="/signedUp/rewards" element={<Rewards />} />
            <Route path="/SignUp" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); // Render the App component

