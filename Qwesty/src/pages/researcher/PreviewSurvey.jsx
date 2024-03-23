import Question from "../../components/mahtot/Question"
import { useTheme } from "../../context/ThemeContext"
import { IoArrowBack } from "react-icons/io5";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CalendarM from "../../components/mahtot/CalendarMu.jsx";
import dayjs from 'dayjs';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";

function PreviewSurvey() {
    const {resTheme} = useTheme();
    const [deadline, setDeadline] = useState(dayjs());
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   

    const questionTypes = [
                        {title:'Q1', type:'Multiple choice'},
                        {title:'Q2', type:"Checkboxes"},
                        {title:'Q3', type:'Short text'},
                        {title:'Q4', type:"Long text"}]

  return (
    <div className={`researcher-content ${resTheme}`}>
    <div className="researcher-menu">
      <SideBar/>
    </div>

    <div className="home-main">
    <div className="top-section">
      <Top/>
    </div>
    <div className="home-main-section">
      {/* content */}
      <div className={`preview-survey-container ${resTheme}`}>
           <Link to="/researcher/survey">
             <IoArrowBack size={'2rem'}/>
           </Link> 
            <h1>Preview your survey</h1>
            <p> You'll be able to edit this draft before you send it out.</p>
            <h2>Questions</h2>
            <div className="question-component">
            {
                questionTypes.map((item, index)=>(
                    <Question title={item.title}
                            type={item.type}
                            key={index}/>
                ))
            }
                </div>
                <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                  set deadline 
                </Button>   (optional)
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
      >
        <Typography sx={{ p: 2 }}>
        { <CalendarM deadline={deadline} 
                     setDeadline={setDeadline}
                    handleClose={handleClose}/>}

          
          </Typography>
      </Popover>
    </div>

            <div className="end-btns">
                <button id="btn-1">Start research</button>
                <button>Schedule research</button>
                <button>Save research</button>
            </div>
            </div>
      
      
    </div>
    <div className="research-footer">
    <Footer />
  </div>  
  </div> </div>
   
   )
      }
export default PreviewSurvey

