import { useState } from "react"
import MotionSurvey from "./MotionSurvey"
import { useTheme } from "../../context/ThemeContext"

function ScheduledResearch() {
      const {resTheme} = useTheme();
      const filterByType = ['Survey',
                            'User Interviews',
                            'All research',
                            'Usability test']
      
  return (
    <div className={`scheduled-container ${resTheme}`}>
      <h2>Scheduled Research</h2>
      <p>Filter by type</p>
      <div className="filter-box">

        {
          filterByType.map((type, index)=>(
            <div className="type">
             {type}
              </div>
          ))
        }

      </div>

     <div className="survey-comp">
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
      </div>   
     

    </div>
  )
}
export default ScheduledResearch