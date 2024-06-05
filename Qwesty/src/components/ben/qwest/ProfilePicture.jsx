import React from "react";
import dp from "../.././../assets/images/avatar.svg";

const ProfilePicture = () => {
  return (
    <div className="rounded-2xl border-2 border-orange-500 p-[0.3rem]">
      <div className="profilePicture w-[60px] h-[60px] bg-[#2e3142] rounded-2xl">
        <img src={dp} alt="profile picture" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};

export default ProfilePicture;