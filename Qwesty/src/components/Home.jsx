import vid from '../assets/images/vid.png'
import womanPic from '../assets/images/woman.png'
import connector from '../assets/images/connector.png'
import Main from './Main';
import { useState, useEffect } from 'react'
function Home() {
  const [isTouched, setIsTouched] = useState(false);
  const solutions = [{
    problem: ' "This form is so long, I\'m starting'+'\n'+' to think I\'m applying for a job."',
    solution: 'Qwesty is so fun, you\'ll forget'+'\n'+'  you\'re giving feedback'
  },
  {
    problem:'"These responses are so empty, that'+'\n'+'  I wonder if the participants are forced to respond',
    solution:'Qwesty is the only way to'+'\n'+'  find out what your users really think, even if they don\'t want to tell you.'
 
  },
  {
    problem: '“I know what my target audience want'+'\n'+'  but but it\'s still not kinda helpful”',
    solution:'Qwesty not only tells you'+'\n'+'  What but also tells you Why'
     }
]
  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouched(true);
    
    };
   window.addEventListener('touchstart', handleTouchStart);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []); 

 

  return (
    
    <>
    <div id="grid-container-first">
      <div id="desc">
        <h1 id="title">
            User <span>research </span> has never been so fun and fast
        </h1>
      <p>
    Qwesty help UX Researchers get useful data in order to make the market
     desire their product while helping the participants enjoy and get rewards for <br/>the data they share
   </p>
    </div>

    <div id="vid">
      <img src={vid}/>
    </div>

    <div id="btn-join">
      <button id="btn"><span>join waitlist</span></button> 
    </div>

    </div>

    <div id="grid-container-second">
      <div id="heading">
        <p>Traditional Market/UX Research Platforms</p>
      </div>

      <div id="item2">
        <img src={womanPic} id="flex-item"/>
        {
           solutions.map((solutione,index) =>{
           
          return(<div key={index}>
              <Convos key={index} solutions={solutione} index={index}/>
            </div>
           )})
        }
       
      </div>

      <div id="item3">
      Qwesty
      </div>
    </div>
    {<Main/>}
    </>
  )
}

function Convos(props){
  
  return(
    <>
    <div id="flex-items" 
         style={{translate:props.index==1?'200px':props.index==2?'600px':'0'}}
        >
  <p>
    
   {props.solutions.problem}
  </p>
  <img src={connector} />
  <p >
  {props.solutions.solution}
  </p>
  </div>
  </>
  )
  
}



export default Home