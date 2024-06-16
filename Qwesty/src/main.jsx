import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider


import "./index.css";
import Avatar from "./components/share/qwest/Avatar.jsx";
import Fire from "./components/share/qwest/Fire.jsx";

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
  Qwest,
  QwestSec
} from "./routes/Index.jsx";
import SurveyProviders from "./context/Survey/SurveyProviders";
import Providers from "./context/Provider/Providers.jsx";
import Calendar from "./components/mahtot/Calendar.jsx";
import {MantineProvider} from '@mantine/core'

function App() {
  return (
    <ThemeProvider>
      <Providers>
      <SurveyProviders>      
        <React.StrictMode>
          <MantineProvider 
              withGlobalStyles 
              withNormalizeCSS
              theme={{
                globalStyles: (_theme)=>({
                  body: {
                    width: '100vw',
                    height:'100vh',
                  },
                  "#root": {
                    width: '100%',
                    height: '100%'
                  },
                }),
              }}
              >
              <BrowserRouter>
                <Routes>
                  
                  {/* Route for homepage */}
                  <Route path="/" element={<Header />} />

                  {/* Route for authentication */}
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Reset" element={<Reset />} />
                  <Route path="/SignUp" element={<Signup />} />
                  <Route path='/verify' element={<Verify/>} />
                  
                  {/* Route for Researcher's page */}
                  <Route path="/researcher/home" element={<HomePage />} />
                  <Route path="/researcher/settings" element={<SettingsRes />} />
                  <Route path="/researcher/research" element={<Research />} />
                  <Route path="/researcher/draft" element={<Draft />} />
                  <Route path="/researcher/profile" element={<Profile />} />
                  <Route path="/researcher/survey" element={<Survey />} />
                  <Route path="/researcher/preview-survey" element={<PreviewSurvey/>} />
                  <Route path="/researcher/new-research" element={<NewResearch/>} />
                  <Route path="researcher/Scheduled-researches" element={<ScheduledResearch/>} />
                  <Route path='researcher/create' element={<Create/>} />
                  <Route path='researcher/insight/:parameter' element={<Insights/>} />
                  <Route path='calendar' element={<Calendar/>} />

                  
                  {/* Route for Participant's page */}
                  <Route path="/signedUp/Settings" element={<Settings />} />
                  <Route path="/signedUp/rewards" element={<Rewards />} />
                  <Route path="/signedUp/my-profile" element={<Myprofile />} />
                  <Route path="/signedUp/qwest-game" element={< Qwest/>}/>
                  <Route path="/signedUp/qwest-game-play" element={< QwestSec/>}/>
                  <Route path="/avatar" element={< Avatar/>}/>
                  <Route path="/Fire" element={< Fire/>}/>

                </Routes>
              </BrowserRouter>
           </MantineProvider>
      </React.StrictMode>
      </SurveyProviders>
      </Providers>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); // Render the App component
