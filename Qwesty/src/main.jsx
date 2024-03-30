import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

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
  Verify
} from "./routes/Index.jsx";

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <BrowserRouter>


          <Routes>
            
            {/* Route for homepage */}
            <Route path="/" element={<Header />} />

            {/* Route for authentication */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />

            {/* Protected Route for Researcher's page */}
           
              {/* <Route 
                  path="/researcher/home" 
                  element={
                    <ProtectedRoute>
                      <HomePage />
                      </ProtectedRoute>
                  } />
              <Route 
                  path="/researcher/settings" 
                  element={
                    <ProtectedRoute>
                    <SettingsRes />
                    </ProtectedRoute>} /> */}

              <Route path="/researcher/research" element={<Research />} />
              <Route path="/researcher/draft" element={<Draft />} />
              <Route path="/researcher/profile" element={<Profile />} />
              <Route path="/researcher/survey" element={<Survey />} />
              <Route
                path="/researcher/preview-survey"
                element={<PreviewSurvey />}
              />
              <Route
                path="/researcher/new-research"
                element={<NewResearch />}
              />
              <Route
                path="researcher/Scheduled-researches"
                element={<ScheduledResearch />}
              />
              <Route path="researcher/create" element={<Create />} />
              <Route
                path="researcher/insight/:parameter"
                element={<Insights />}
              />
           

            {/* Protected routes for Participant's page */}
            {/* <ProtectedRoute> */}
              <Route path="/signedUp/Settings" element={<Settings />} />
              <Route path="/signedUp/rewards" element={<Rewards />} />
              <Route path="/signedUp/my-profile" element={<Myprofile />} />
            {/* </ProtectedRoute> */}
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); // Render the App component
