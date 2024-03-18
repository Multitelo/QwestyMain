import SideBar from "../../components/share/SideBar"
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import SelectionBox from "../../components/SelectionBox";
import { FaPlus } from "react-icons/fa6";
import { PiStackSimple } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { FaRegCircleQuestion } from "react-icons/fa6";
import ScheduledResearch from "../../components/mahtot/ScheduledResearch";
import NewResearch from "../../components/mahtot/NewResearch";
import { useState } from "react";
function Research() {
    const {resTheme} = useTheme();
    const [content, setContent] = useState({newResearch:false,
                                            drafts:false,
                                            scheduledResearch:false,
                                            aboutCreatingResearch:false})
    const boxItem = [
      {
        title: 'Create new research',
        icon: <FaPlus />,
        backgroundColor: '#FFF1BE',
        color: '#000',
        id:'small',
        onClick: ()=>{setContent(prevState=>({...prevState, newResearch:true}))}

      },
      {
        title: 'Create from draft',
        icon: <PiStackSimple />,
        backgroundColor: '#8E5DF5',
        color: '#fff',
        id:'small',
       
      },
      
      {
        title: 'See All Scheduled research',
        icon: <GoClock />,
        backgroundColor: '#D0FFF2',
        color: '#000',
        id:'large-wide',
        onClick: ()=>{setContent(prevState=>({...prevState, scheduledResearch:true}))}
      },
      {
        title: 'About creating research',
        icon: <FaRegCircleQuestion/>,
        backgroundColor: resTheme==='light'? '#fff':'#201F24',
        color: resTheme==='light'?'#000':'#F4F4F4',
        id:'large'
      },
    ]
  const firstBoxItems = boxItem.slice(0, 2);
  const secondBoxItems = boxItem.slice(2,4);
    
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
             {
              content.scheduledResearch? <ScheduledResearch />:
              content.newResearch?<NewResearch/>:
              <div className="research-box">
               <div className="first-boxes">
                {

              firstBoxItems.map((box, index) => 
                    (
                      <SelectionBox key={index}
                                    icon={box.icon}
                                    title={box.title}
                                    bgColor={box.backgroundColor}
                                    color={box.color}
                                    id={box.id}
                                    onClick={box.onClick}
                                    />
                   ) )
                }
                </div>

                <div className="second-boxes">
                {

              secondBoxItems.map((box, index) => 
                    (
                      <SelectionBox key={index}
                                    icon={box.icon}
                                    title={box.title}
                                    bgColor={box.backgroundColor}
                                    color={box.color}
                                    id={box.id}
                                    onClick={box.onClick}/>
                   ) )
                }
                </div>
              </div>}
        </div>
        
       
        </div>
        <div className="research-footer">
        <Footer/>
      </div>
        
    </div>
  )
}
export default Research