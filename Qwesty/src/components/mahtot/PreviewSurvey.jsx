import Question from "./Question"
import { useTheme } from "../../context/ThemeContext"

function PreviewSurvey() {
    const {resTheme} = useTheme();
    const questionTypes = [
                        {title:'Q1', type:'Multiple choice'},
                        {title:'Q2', type:"Checkboxed"},
                        {title:'Q3', type:'Short text'},
                        {title:'Q4', type:"Long text"}]
  return (

    <div className={`preview-survey-container ${resTheme}`}>
        <h1>Preview your survey</h1>
        <p> You'll be able to edit this draft before you send it out.</p>
        <h2>Questions</h2>
        {
            questionTypes.map((item, index)=>(
                <Question title={item.title}
                          type={item.type}/>
            ))
        }

       <div>
           <button>set deadline</button> <span> (optional)</span>
        </div> 

        <div className="end-btns">
            <button id="btn-1">Start research</button>
            <button>Schedule research</button>
            <button>Save research</button>
        </div>
    </div>
  )
}
export default PreviewSurvey