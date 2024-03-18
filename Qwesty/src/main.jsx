import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider

import "./index.css";

import {
  Login,
  Signup,
  Reset,
  Header,
  Settings,
  Rewards,
  Myprofile,
  HomePage,
  Research,
  SettingsRes,
  Draft,
  Survey,
  ResearchPage
} from "./routes/Index.jsx";

import { useEffect } from "react";

function App() {
  const [usertype, setUsertype] = useState("");

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation !== 0) {
        // Prevent rotation
        window.screen.orientation.lock("portrait");
      }
    };

    // Listen for orientation change
    window.addEventListener("orientationchange", handleOrientationChange);

    // Unlock orientation when component unmounts
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
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
            <Route path="/researcher/home" element={<HomePage />} />
            <Route path="/researcher/settings" element={<SettingsRes />} />
            <Route path="/researcher/research" element={<Research />} />
            <Route path="/researcher/draft" element={<Draft />} />
            <Route path="/researcher/survey" element={<Survey />} />
            <Route path="/researcher/researchpage" element={<ResearchPage />} />



            {/* Route for Participant's page */}
            <Route path="/signedUp/Settings" element={<Settings />} />
            <Route path="/signedUp/rewards" element={<Rewards />} />
            <Route path="/signedUp/my-profile" element={<Myprofile />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); // Render the App component
