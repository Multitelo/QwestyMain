import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import toast, { Toaster } from "react-hot-toast";

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
  Profile,
  Survey,
  Research,
  SettingsRes,
  Draft,
  PreviewSurvey,
  NewResearch,
  ScheduledResearch,
  Create,
  Insights,
  Verify,
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
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "8px",
                background: "#333",
                color: "#fff",
                width: '100%',
              },
            }}
          />
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
            <Route path="/verify" element={<Verify />} />
            {/* Route for Researcher's page */}
            <Route path="/researcher/home" element={<HomePage />} />
            <Route path="/researcher/settings" element={<SettingsRes />} />
            <Route path="/researcher/research" element={<Research />} />
            <Route path="/researcher/draft" element={<Draft />} />
            <Route path="/researcher/profile" element={<Profile />} />
            <Route path="/researcher/survey" element={<Survey />} />
            <Route
              path="/researcher/preview-survey"
              element={<PreviewSurvey />}
            />
            <Route path="/researcher/new-research" element={<NewResearch />} />
            <Route
              path="researcher/Scheduled-researches"
              element={<ScheduledResearch />}
            />
            <Route path="researcher/create" element={<Create />} />
            <Route
              path="researcher/insight/:parameter"
              element={<Insights />}
            />

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
