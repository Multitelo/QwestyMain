import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import Select from "react-select";
import PreviewSurvey from "./PreviewSurvey";

function Create() {
    const {resTheme} = useTheme();
    const [researchDetails, setResearchDetails ] = useState({
                                                                titleOfResearch:'',
                                                                objectiveOfResearch:'',
                                                                field:''
                        })
    const defaultOption = {value:'', label:'Select a field'}
    const fieldOptions = [{value:'sth', label:'sth'},
                          {value:'sth2', label:'sth2'}]
    const [btn, setBtn] = useState(false)

    const handleResearchDetails = (e) =>{
            setResearchDetails(prevState=>({...prevState, [e.target.name]:e.target.value}))
    }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'none' : 'inherit',
            border: '1px solid #A5A1A1',
            color: state.isFocused ? 'black' : 'red', 
            borderRadius: '10px',
            padding: '10px',
           
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#9A9696', 
        }),
    };
    
    console.log(researchDetails)
    return (
       <>
       { btn?<PreviewSurvey/>:
        <div className={`create-survey-container ${resTheme}`}>
            <h1>Upload research details</h1>
            <h2>Lets get started with some details about your research</h2>
            <form>
                <label>
                    <div>What is the title of your Research? <sup>*</sup></div>
                    <input type="text"
                           value={researchDetails.titleOfResearch}
                           placeholder="Example: The impact of climate change on urban development...."
                           onChange={handleResearchDetails}
                           name="titleOfResearch"
                          />

                </label>

                <label>
                    Research objectives (optional)
                    <textarea
                           value={researchDetails.objectiveOfResearch}
                           onChange={handleResearchDetails} 
                           placeholder="List the main goals of your research"
                           name="objectiveOfResearch"
                           />
                </label> 

                <div>
                    <label>
                        What is your research field?
                        <Select
                                value={researchDetails.field}
                                options = {fieldOptions}
                                onChange={(selectedOption)=>setResearchDetails({...researchDetails, field:selectedOption})}
                                name="field"
                                className="select-field"
                                styles={customStyles}
                        />
                    </label>
                    <p>or input field</p>
                </div>
                <button type='submit'
                        onClick={()=>setBtn(true)}>
                            Set survey questions</button>
            </form>
         </div>}</>
  )
}
export default Create