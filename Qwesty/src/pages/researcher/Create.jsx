import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import Select from "react-select";
import { fieldOptions} from '../../data/data'
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

function Create() {
    const {resTheme} = useTheme();
    const [researchDetails, setResearchDetails ] = useState({
                                                                titleOfResearch:'',
                                                                objectiveOfResearch:'',
                                                                field:'',
                                                                customField:''
                        })
    const defaultOption = {value:'', label:'Select a field'}
    const [customInput, setCustomInput] = useState(false)
    const navigateTo = useNavigate();

    const handleResearchDetails = (e) =>{
            setResearchDetails(prevState=>({...prevState, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('survey_type', 'form-surveys')
        formData.append('title', researchDetails.titleOfResearch);
        formData.append('description', researchDetails.objectiveOfResearch);
        formData.append('field_of_research', researchDetails.field.value);
        // formData.append('customField', researchDetails.customField);

        try {
            const response = await fetch('http://localhost/qwestymain/api/createsur.php', {
                method: 'POST',
                // body: formData,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` 
                },

                body: JSON.stringify({
                    survey_type: 'form-surveys',
                    title: researchDetails.titleOfResearch,
                    description: researchDetails.objectiveOfResearch,
                    field_of_research: researchDetails.field.value,
                }),

            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data)
            if(data.success){
                navigateTo('/researcher/home'); 
            }
             

        } catch (error) {
            console.error('Network error:', error.message);
        }
    }


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'none' : 'inherit',
            border: '1px solid #A5A1A1',
            color: state.isFocused ? 'black' : 'red', 
            borderRadius: '10px',
            padding: '10px',
            zIndex:'1000',
            
                }),
        singleValue: (provided, state) => ({
            ...provided,
            color:resTheme==='dark'?'#fff': 'rgba(0, 0, 0, 0.8)', 
        }),
        menuList: styles => ({
            ...styles,
            background: resTheme==='dark'?'#201F24':'#fff'
        }),
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            background: isFocused
                ? 'rgba(142, 93, 245, 0.5)'
                : isSelected
                    ? 'rgba(142, 93, 245, 1)'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100
        })
    };
    
    console.log(researchDetails)

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
            
            <div className={`create-survey-container ${resTheme}`}>
                <h1>Upload research details</h1>
                <h2>Lets get started with some details about your research</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <div>What is the title of your Research? <sup>*</sup></div>
                        <input type="text"
                            value={researchDetails.titleOfResearch}
                            placeholder="Example: The impact of climate change on urban development...."
                            onChange={handleResearchDetails}
                            name="titleOfResearch"
                            required
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
                                className="custom-select" 
                                required
                            />

                        </label>

                        {/* <p onClick={()=>setCustomInput(true)} id="custom-input">or input field</p>

                      {customInput&&  <label>
                                <input type="text"
                                    value={researchDetails.customField}
                                    placeholder=""
                                    onChange={handleResearchDetails}
                                    name="customField"
                                    />
                        </label>} */}
                    </div>
                   
                       <button type='submit'>
                          {/* <Link to="/researcher/survey"> */}
                            Set survey questions
                            {/* </Link>   */}
                         </button>
                        
                </form>
            </div>
           
    
            
            </div>
            </div>
            <div className="research-footer">
        <Footer />
        </div>  
        </div>
        
  )
}
export default Create

