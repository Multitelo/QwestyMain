import SlideTitle from "./SlideTitle"
import CurveyBox from "./CurveyBox";
import Create from "./Create"
import { useTheme } from "../../context/ThemeContext"
import { useState } from "react"

function NewResearch() {
  const {resTheme} = useTheme();
  const [create, setCreate] = useState(false)
  const boxItem = ['Form surveys', 'Interview', 'Focus Group', 'Card sorting',
                    'Ethnographic\n(field) observation', 'A/B Testing', 'Usability Test', 'Tree Testing', 'Voice from the street', 'Diary Studies']
  
  return (
   <>
    { 
     create==true? <Create/>:
     <div className={`new-research-box ${resTheme}`}>
        <h1>Create new research</h1>
        <p id="sub-title">Money saving</p>
        <SlideTitle title="Free Research"
                    color="#fff"
                    backgroundColor="#8E5DF5"
                    circleColor="#FFF3C7"/>
        <div className="research-box-container">
            {
                boxItem.map((item, index)=>(
                    <div className="outer-container">
                        <div className="inner-container" id={`b ${index} `}>
                        <CurveyBox title={item} index={index} key={index} setCreate={setCreate}/>
                        </div>
                     </div>
                ))
            }
        </div>
    </div>}</>
  )
}
export default NewResearch