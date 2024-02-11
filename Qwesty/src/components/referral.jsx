
import day from "./images/day.png";
import ref from "./images/ref.png";
import rec from "./images/rec.png";
import oliv from "./images/olivia.png";
import ref1 from "./images/ref1.png";
import ref2 from "./images/ref2.png";

import Image3 from "./images/images.jpeg";

import Logo from "./Logo";

const Referral = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="bg-white text-black p-4 flex-shrink-0 md:w-1/4">
        <div>
          <Logo />
        </div>
        <h2 className="text-2xl font-bold">Your Company</h2>
        <p>Refer a friend and earn rewards!</p>

        {/* Search Bar */}
        <div className="mt-4 flex items-center relative">
          <input
            type="text"
            placeholder=""
            className="bg-[#f4b2f4] text-white p-2 rounded-md focus:outline-none"
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
          <li className="flex items-center space-x-2 mt-56">
            <FaGift />
            <span>Rewards</span>
          </li>
          <li className="flex items-center space-x-2 mt-5">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center mt-[150%] space-x-2">
            <FaSignOutAlt />
            <span>Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto p-4">
        <header className="text-white py-4 text-center">
          <p className="text-lg bg-[#EFE7FF] rounded-md text-purple-500">Fusky referred 5 friends and just got 50 $Qwes</p>
        </header>
        <div className="relative p-1 rounded-md">
          <img src={Image3} alt="Referral Image 1" className="mb-4 rounded-md w-full md:w-[700px] h-auto" />
          
          <div className="absolute text-white top-[20%] left-[13%]">
            <p className="font-bold my-14">Refer a researcher to earn 7 $Qwes points and a chance to get up to ₦5000</p>
            <div className="flex items-center ml-[77px]">
              <p>Your invite code:</p>
              <p className="ml-[35%]">WK749T2SV</p>
              <button className="ml-3 bg-purple-500 w-24 rounded-lg text-center"><p>copy</p></button>
            </div>
          </div>
        </div>
        <section className="mt-8 p-8 bg-[#201F24] shadow-md rounded-md">
          <img src={day} alt="" />
        </section>
        <div className="flex space-x-5 mt-5">
          <div className="flex space-x-3 mt-5 w-[380px] h-[200px]">
            <img src={oliv} alt="olivia" className="w-[400px]" />
            <img src={rec} alt="rec" className="w-[400px] h-[175px]" />
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="bg-white text-white  p-4 flex-shrink-0 md:w-1/4">
        <div className="bg-white py-20 rounded-3xl px-5 mt-20">
        <img src={ref} alt="ref" className="w-[241px] h-[200px] mt-20 " />
        <img src={ref1} alt="ref" className="w-[241px] h-[200px] mt-20 bg-gray-100 rounded-2xl p-2" />
        <img src={ref2} alt="ref" className="w-[241px] h-[200px] mt-20 bg-gray-100 rounded-2xl p-2" />
      </div></aside>
    </div>
  );
};

export default Referral;
