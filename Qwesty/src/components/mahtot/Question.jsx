import icon from "../../assets/images/survey.svg"


function Question({title, type}) {
    
    return (
        <div className="question-container">
            <div className="question-icon">
                <img src={icon}
                     alt="Question icon"/>

            </div>
            <div className="question-box">
                <h2>{title}</h2>
                <p>{type}</p>
                <p>What's your favorite color?</p>
            </div>
        </div>
  )
}
export default Question