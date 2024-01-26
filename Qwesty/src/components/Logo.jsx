import pic1 from "../components/images/Vector 7.png"
import pic2 from "../components/images/Vector 8.png"
import pic3 from "../components/images/Vector 9.png"
import pic4 from "../components/images/Vector 4.png"
export default function Logo() {
  return (
    <div className="">
    <div className="flex relative">
        <img src={pic1} alt="logo" />
        <img src={pic2} alt="logo" />
    </div> 
    <div className="flex items-center ">
        <img src={pic3} alt="logo" />
        <img src={pic4} alt="logo" />
        <div className="font-semibold  text-xl absolute top-12 left-[118px]">westy</div>
    </div>
    </div>
  )
}
