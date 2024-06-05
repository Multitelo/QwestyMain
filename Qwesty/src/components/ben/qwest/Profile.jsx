import React from "react";
import ProgressBar from "./ProgressBar";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  return (
    <div className="hidden md:flex gap-3 items-center px-5">
      <ProfilePicture />
      <ProgressBar />
    </div>
  );
};

export default Profile;