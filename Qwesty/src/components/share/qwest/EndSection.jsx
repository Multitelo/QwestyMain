import RangeSlider from "../../mahtot/qwest/RangeSlider"
import Button from "../../mahtot/qwest/Button"

function EndSection() {
  return (
    <div className="qwest-end-section">
        <div className="totQuestions">
            <p>Total Questions</p>
            <RangeSlider id='below'
                         max="6"
                         initialValue={5}/>
                         
        </div>
        <div className="q-btn-box">

            <Button name="Pause"
                    color="#333131"
                    bgColor="#FFF3C7"/>

            <Button name="End"
                    color="#FFFFFF"
                    bgColor="#FA8787"/>
        </div>
    </div>
  )
}
export default EndSection