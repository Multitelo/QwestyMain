import React from "react";
import avatar from "../../../assets/images/qwestavatar1.png";
import "../../../assets/css/startquest.css";

const StartQuest = () => {
  return (
    <section className="w-full h-screen relative text-white flex flex-col justify-start items-center">
      {/* box */}
      <div className="question bg-[#F2ECFF] p-[2rem] md:p-[3rem] w-fit rounded-[1rem] md:rounded-[3rem] space-y-5 md:space-y-14">
        <h1 className="text-black font-bold c">
          Would you like to take a quest survey?
        </h1>
        <div className="flex gap-3 justify-around md:justify-between">
          <button className="bg-white text-black text-[1.2rem] font-bold rounded-lg py-1 px-5 md:px-12">
            Yes
          </button>
          <button className="bg-white text-black text-[1.2rem] font-bold rounded-lg py-1 px-5 md:px-12">
            No
          </button>
        </div>
      </div>

      {/* circles */}
      <div className="child space-y-3 md:absolute md:right-[20rem] md:mt-[13rem]">
        <div
          className="circle bg-white mt-5"
          style={{ width: "77px", height: "58px", borderRadius: "50%" }}
        ></div>
        <div
          className="circle bg-white w-[40px] h-[30px] ml-14 top-14"
          style={{ borderRadius: "50%" }}
        ></div>
      </div>

      {/* images */}
      <div className="child md:absolute ml-40 md:ml-0 md:right-[9rem] md:bottom-5">
        <img
          src={avatar}
          alt="avatar"
          className="w-[60px] md:w-[120px] object-cover object-center animated-avatar"
        />
      </div>
    </section>
  );
};

export default StartQuest;
