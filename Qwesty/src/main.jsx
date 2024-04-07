import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PrivateRoutes from "./auth/PrivateRoutes.jsx";

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
import SurveyProviders from "./context/Survey/SurveyProviders";

function App() {
  return (
    <ThemeProvider>
      <SurveyProviders>      
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
            
            <Route element={<PrivateRoutes />}>
                <Route element={<HomePage />} path='/researcher/home' exact/>
                <Route element={<SettingsRes />} path='/researcher/settings' />
                <Route path="/researcher/research" element={<Research />} />
                <Route path="/researcher/draft" element={<Draft />} />
                <Route path="/researcher/profile" element={<Profile />} />
                <Route path="/researcher/survey" element={<Survey />} />
                <Route path="/researcher/preview-survey" element={<PreviewSurvey />} />
                <Route  path="/researcher/new-research"  element={<NewResearch />}/>
                <Route path="researcher/Scheduled-researches" element={<ScheduledResearch />}/>
                <Route path="researcher/create" element={<Create />} />
                <Route path="researcher/insight/:parameter"  element={<Insights />} />
             </Route>
              

              
            {/* Protected routes for Participant's page */}
           
              <Route path="/signedUp/Settings" element={<Settings />} />
              <Route path="/signedUp/rewards" element={<Rewards />} />
              <Route path="/signedUp/my-profile" element={<Myprofile />} />
           
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      </SurveyProviders>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); // Render the App component
