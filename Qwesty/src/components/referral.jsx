import pink from "./images/pink.png"
import blue from "./images/blue.png";
import lemon from "./images/lemon.png";
import vec1 from "./images/vec1.png";
import ref from "./images/ref.png"
import rec from "./images/rec.png"
import oliv from "./images/olivia.png"
import ref1 from "./images/ref1.png"
import ref2 from "./images/ref2.png"
import vec2 from "./images/vec2.png";
import vec3 from "./images/vec3.png";
import vec4 from "./images/vec4.png";
import egg from "./images/egg.png"
import egg1 from "./images/egg1.png"
import Image3 from "./images/images.jpeg";

import { FaSearch, FaClipboardList, FaUserCircle, FaGift, FaCog, FaSignOutAlt } from 'react-icons/fa';

import Logo from "./Logo";

const Referral = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <aside className="bg-white text-black p-4 flex-shrink-0">
  <div>
    <Logo />
  </div>
  <h2 className="text-2xl font-bold">Your Company</h2>
  <p className="w-[]">Refer a friend and earn rewards!</p>

  {/* Search Bar */}
  <div className="mt-4 flex items-center relative  ">
    <input
      type="text"
      placeholder=""
      className="bg-[#333333] text-white p-2  rounded-md focus:outline-none "
    />
    <FaSearch className="text-gray-500 ml-2 absolute left-2 top-3" />
  </div>

  {/* Navigation Links */}
  <ul className="mt-4">
    <li className="flex items-center space-x-2 mt-5">
      <FaClipboardList />
      <span>Quests</span>
    </li>
    <li className="flex items-center space-x-2 mt-5">
      <FaUserCircle />
      <span>My Profile</span>
    </li>
    <li className="flex items-center space-x-2 mt-[40%]">
      <FaGift />
      <span>Rewards</span>
    </li>
    <li className="flex items-center space-x-2 mt-5">
      <FaCog />
      <span>Settings</span>
    </li>
    <li className="flex items-center mt-[50%] space-x-2 ">
      <FaSignOutAlt />
      <span>Logout</span>
    </li>
  </ul>
</aside>
      <main className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto  w-[800px] p-4">
        <header className=" text-white py-4 text-center w-[800px]">
          <p className="text-lg bg-[#EFE7FF] rounded-md text-purple-500">Fusky referred 5 friends and just got 50 $Qwes</p>
        </header>
        <div className=" relative p-1 rounded-md w-[800px] ">
              <img src={Image3} alt="Referral Image 1" className="mb-4 rounded-md  w-[700px] h-[302px]" />
              
              <div className="absolute text-white top-[20%] left-[13%]">
              <p className="font-bold my-14">Refer a researcher to earn 7 $Qwes points and a chance to get up to ₦5000  </p>
              <div className="flex items-center ml-[77px]"><p>your invite code:</p><p className="ml-[35%]">WK749T2SV</p> <button className="ml-3 bg-purple-500 w-24 rounded-lg  text-center"><p className="">copy</p></button></div>
            </div></div>
        <section className="mt-8 p-8 bg-[#201F24] shadow-md rounded-md w-[700px]">


      <p className="text-white my-5 text-3xl">Referral History</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

<div
  className="rounded-md relative text-white shadow-lg p-4 w-[157px] h-[196px]"
  style={{
    borderRadius: '10px',
    background: 'linear-gradient(270deg, #0793A6 0%, rgba(49, 224, 248, 0.97) 98.5%)',
    boxShadow: '16px 8px 20px 0px rgba(0, 0, 0, 0.10)',
  }}
>
<p className=""></p>
<div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={egg1} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">18</p>
</div>
<div  className="absolute top-32 left-[40%]"><img src={vec2} alt="vector" /></div>
<p className="absolute top-[150px] text-sm left-[36%] ">Today</p>

</div>



<div className="relative rounded-md text-white shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #B41155 0%, #E796B8 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(0, 0, 0, 0.10)',
}}>
           <div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={pink} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">26</p>
<div className="absolute top-32 left-[40%]"><img src={vec4} alt="vector" /></div>
<p className="absolute top-[150px] left-[27%] text-sm ">This Week</p>

</div>
            </div>

            

            <div className="relative text-white rounded-md shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #0B549C 0%, #7BABDC 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(32, 100, 167, 0.10)',
}}>

<div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={blue} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/>
<p className="absolute top-[50px] left-[40%] text-2xl">39</p>
<div className="absolute top-32 left-[40%]"><img src={vec3} alt="vector" /></div>
<p className="absolute top-[150px] left-[27%] text-sm  ">Last Month</p>

</div>
</div>

<div className="relative text-white rounded-md shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #1E980F 0%, #9DF292 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(45, 163, 30, 0.10)',
}}>
             <div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={lemon} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">48</p>
<div className="absolute top-32 left-[40%]"><img src={vec1} alt="vector" /></div>
<p className="absolute top-[150px] left-[10%] text-sm ">Last Twelve Months</p>

</div>
            </div>
          </div>
        </section>
<div className="flex space-x-5">
        {/* <section className="mt-5 px-8 py-4  shadow-md rounded-md "> */}
  <div className="flex space-x-3 mt-5  w-[380px] h-[200px]">

   <img src={oliv} alt="olivia" className="w-[400px]"/>
   
   <img src={rec} alt="rec" className="w-[400px] h-[175px]"/>


</div>
{/* </section> */}
</div>
      </main>


       

      {/* Right Sidebar */}
      <aside className="bg-white  text-white p-4 flex-shrink-0">
        <div>
       <img src={ref} alt="ref"  className="w-[241px] h-[183px]"/>

        </div>
        <div>
       <img src={ref1} alt="ref"  className="w-[241px] h-[183px]"/>

        </div>
        <div>
       <img src={ref2} alt="ref"  className="w-[241px] h-[183px]"/>

        </div>
      </aside>
    </div>
  );
};

export default Referral;
