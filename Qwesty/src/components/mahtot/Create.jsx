import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import Select from "react-select";
import { fieldOptions} from '../../data/data'

function Create() {
    const {resTheme} = useTheme();
    const [researchDetails, setResearchDetails ] = useState({
                                                                titleOfResearch:'',
                                                                objectiveOfResearch:'',
                                                                field:''
                        })
    const defaultOption = {value:'', label:'Select a field'}

   

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
            zIndex:'1',
            
                }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#9A9696', 
        }),
    };
    
    console.log(researchDetails)
    return (
       
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
                            options={fieldOptions}
                            onChange={(selectedOption) => setResearchDetails({ ...researchDetails, field: selectedOption })}
                            name="field"
                            id="select-field"
                            styles={customStyles}
                            classNamePrefix="react-select"
                            menuPlacement="auto"
                            maxMenuHeight={300}
                            className="custom-select" // Add a custom class name
                        />

                    </label>
                    <p>or input field</p>
                </div>
                <button type='submit'
                        >
                            Set survey questions</button>
            </form>
         </div>
  )
}
export default Create