
import day from "./images/day.png";
import ref from "./images/ref.png";
import rec from "./images/rec.png";
import oliv from "./images/olivia.png";
import ref1 from "./images/ref1.png";
import profile from "./images/profile.png";
import ref2 from "./images/ref2.png";

import Image3 from "./images/images.jpeg";
import { SideBar } from "./signedUp/Index";

const Referral = () => {
  return (
    <div className="flex flex-col md:flex-row h-[170vh]">
      {/* Left Sidebar */}
      <aside className="bg-white text-black p-4 flex-shrink-0 md:w-1/4">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100   p-4">
      <header className="text-white py-4 md:flex justify-center items-center text-center hidden">
  <p className="text-lg bg-[#EFE7FF] rounded-md w-full text-purple-500">Fusky referred 5 friends and just got 50 $Qwes</p>
</header>



        <div className="relative p-1 rounded-md">
          <img src={Image3} alt="Referral Image 1" className="mb-4 rounded-md w-full md:w-[700px] h-[50vh]" />
          
          <div className="absolute text-white md:top-[45%] top-28 md:left-[13%] left-5">
            <p className="font-bold my-8">Refer a researcher to earn 7 $Qwes points and a chance to get up to ₦5000</p>
            <div className="flex items-center md:ml-[40px]">
              <p>Your invite code:</p>
              <p className="md:ml-[30%] ml-[20%]">WK749T2SV</p>
              <button className="ml-3 bg-purple-500 w-24 rounded-lg p-[2px] text-center"><p>copy</p></button>
            </div>
          </div>
        </div>
        <section className="mt-8 p-8 bg-[#201F24] shadow-md rounded-md">
          <img src={day} alt="" />
        </section>
        <div className="flex space-x-5 mt-5">
          <div className="flex space-x-3 mt-5 w-[380px] h-[200px]">
            <img src={oliv} alt="olivia" className="md:w-[350px] w-[220px]" />
            <img src={rec} alt="rec" className="md:w-[270px] w-[220px] rounded-2xl h-[180px]" />
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="bg-white text-white  p-4 flex-shrink-0 md:w-1/4">
  <img src={profile} alt="profile" className="ml-4  hidden md:block" />
        <div className="bg-white py-20 rounded-3xl px-5 ">
        <img src={ref} alt="ref" className="md:w-[241px]  w-[90%] h-[200px] mt-2  md:ml-0 ml-3 bg-gray-100 rounded-2xl p-2" />
        <img src={ref1} alt="ref" className="md:w-[241px] w-[90%]  h-[200px] mt-12 md:ml-0 ml-3 bg-gray-100 rounded-2xl p-2" />
        <img src={ref2} alt="ref" className="md:w-[241px] w-[90%]  h-[200px] mt-20 md:ml-0 ml-3 bg-gray-100 rounded-2xl p-2 " />
      </div></aside>
    </div>
  );
};

export default Referral;
