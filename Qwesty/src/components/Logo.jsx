
import Log from '../assets/images/Logo.png'

export default function Logo() {
  return (
    <div className="">
    <div className="flex relative">
        <img src={Log} alt="logo" />
       
    </div> 
    <div className="flex items-center ">
        
        <div className="font-semibold  text-xl absolute top-16 left-[135px]">westy</div>
    </div>
    </div>
  )
}
