import Question from "../../components/mahtot/Question"
import { useTheme } from "../../context/ThemeContext"
import { IoArrowBack } from "react-icons/io5";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
function PreviewSurvey() {
    const {resTheme} = useTheme();
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
                            type={item.type}/>
                ))
            }
                </div>
            <div className="preview">
            <button>set deadline</button> <span> (optional)</span>
            </div> 

            <div className="end-btns">
                <button id="btn-1">Start research</button>
                <button>Schedule research</button>
                <button>Save research</button>
            </div>
            </div>
      
      
    </div>
    </div>
    <div className="research-footer">
    <Footer />
  </div>  
  </div> 
   
  )
}
export default PreviewSurvey

