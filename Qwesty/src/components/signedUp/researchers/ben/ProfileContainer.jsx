import React from 'react'
import Profile from "../../../../assets/ben/profile.svg";


const ProfileContainer = () => {
  return (
    <div className="p-5 rounded-lg bg-white grid grid-cols-2 gap-5 md:gap-10 justify-center items-center">
    <img
      src={Profile}
      alt="profile"
      width={200}
      height={200}
    />
    <div className="text-lg flex justify-start flex-col">
      <h1 className="font-semibold whitespace-nowrap">ID: 0000001</h1>
      <h1 className="font-bold">Spencer</h1>
      <div className="hidden 475:flex flex-col 1320:flex-row gap-3  mt-12">
        <h1 className="text-sm lg:text-lg font-bold">Account</h1>
        <span className="whitespace-nowrap w-fit rounded-full font-bold bg-green-200 px-2.5 py-0.5 text-sm text-green-800">
          Verified
        </span>
      </div>
    </div>
    <div className="475:hidden flex  ml-10 gap-3 items-center justify-center mt-3 md:mt-12">
      <h1 className="">Account</h1>
      <span className="whitespace-nowrap rounded-full font-bold bg-green-200 px-2.5 py-0.5 text-sm text-green-800">
        Verified
      </span>
    </div>
  </div>
  )
}

export default ProfileContainer;