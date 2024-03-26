import vid from '../assets/images/vid.png'
import womanPic from '../assets/images/woman.png'
import connector from '../assets/images/connector.png'
import Main from './Main';
import { useState, useEffect } from 'react'
import Faq from './Faq';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Home() {
  const [isTouched, setIsTouched] = useState(false);
  const[isHovoured, setIsHovoured] = useState({
                  problemOne:false,
                  problemTwo:false,
                  problemThree:false
  })
  const solutions = [{
    problem: ' "This form is so long, I\'m starting'+'\n'+' to think I\'m applying for a job."',
    identity:'A typical Participant\'s day',
    solution: 'Qwesty is so fun, you\'ll forget'+'\n'+'  you\'re giving feedback'
  },
  {
    problem:'"These responses are so empty, that'+'\n'+'  I wonder if the participants are forced to respond."',
    identity:'A typical Product Manager\'s day',
    solution:'Qwesty is the only way to'+'\n'+'  find out what your users really think, even if they don\'t want to tell you.'
 
  },
  {
    problem: '“I know what my target audience want'+'\n'+'  but but it\'s still not kinda helpful”',
    identity: 'A typical Content Strategist\'s day',
    solution:'Qwesty not only tells you'+'\n'+'  What but also tells you Why'
     }
]
  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouched(true);
    
    };
   window.addEventListener('touchstart', handleTouchStart);

   
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []); 
  
  const handleHover = ()=>{
    setIsHovoured()
  }
 

  return (  
    
    <>
    
  

    <div id="grid-container-second">
      <div id="heading">
        <p>Traditional Market/UX Research Platforms</p>
      </div>

      <div id="item2">
        <img src={womanPic} />
        </div>
        <div id="item3">
      Qwesty
      </div>
      <div className='item-box first'>
        <div className='first-item'
             onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemOne:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemOne:false})}}>
       {isHovoured.problemOne? <p className='hovoured'>{solutions[0].identity}</p>:
        <p>{solutions[0].problem}</p>}</div>

        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[0].solution}</p>
          </div>  

      </div>

      <div className='item-box second'>
        <div className='first-item'onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemTwo:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemTwo:false})}}>
       {isHovoured.problemTwo? <p className='hovoured'>{solutions[1].identity}</p>:
        <p>{solutions[1].problem}</p>}</div>

        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[1].solution}</p>
          </div>  

      </div>

      <div className='item-box third'>
        <div className='first-item'onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemThree:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemThree:false})}}>
       {isHovoured.problemThree? <p className='hovoured'>{solutions[2].identity}</p>:
        <p>{solutions[2].problem}</p>}</div>
        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[2].solution}</p>
          </div>  

      </div>
        {/* {
           solutions.map((solutione,index) =>{
           
          return(<div key={index}>
              <Convos key={index} solutions={solutione} index={index}/>
            </div>
           )})
        } */}

      

      
    </div>
    {<Main/>}
    {<Faq/>}
    {<Footer/>}
    </>
  )
}

// function Convos(props){
  
//   return(
//     <>
//     <div id="flex-items" 
//          style={{translate:props.index==1?'200px':props.index==2?'600px':'0'}}
//         >
//   <p id="first-displayed">
    
//    {props.solutions.problem}
//   </p>
//   <p id="on-hover">
//     {props.solutions.identity}
//   </p>
//   <img src={connector} />
//   <p >
//   {props.solutions.solution}
//   </p>
//   </div>
//   </>
//   )
  
// }



export default Home