

function CurveyBox({title, index}) {

  return (
    <div className="curvey-box" >
        <h2>{title}</h2>
        <div id="comming-soon-btn" className={`box ${index==0?'first':''}`} style={{cursor:index==0?'pointer':''}}>
            {index===0?'Create':'coming soon'}
        </div>
    </div>
  )
}
export default CurveyBox