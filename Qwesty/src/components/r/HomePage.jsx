import React from "react";
import Profile from "../../assets/ben/profile.svg";
import Web3 from "../../assets/ben/web3.svg";


const HomePage = () => {
    const bgStyle = {
        backgroundImage: `url('${Web3}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
      };


  return (
    <div className="bg-white w-full h-screen">
      <section className="flex">
        <div className="sidebar h-screen w-[400px] bg-gray-300 grid place-content-center shadow-md">
          Sidebar
        </div>
        <div className="w-full h-screen flex flex-col bg-emerald-500 p-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="p-5 rounded-lg bg-gray-200 flex flex-col lg:flex-row gap-10 justify-center items-center">
              <img
                src={Profile}
                alt="profile"
                className="rounded-md w-[200px] h-auto lg:max-w-none lg:h-[200px] lg:w-auto"
              />
              <div className="text-2xl">
                <h1 className="font-semibold">ID: 0000001</h1>
                <h1 className="font-bold">Spencer</h1>
                <div className="flex gap-3 items-center justify-center mt-12">
                  <h1 className="">Account</h1>
                  <span className="whitespace-nowrap rounded-full font-bold bg-green-100 px-2.5 py-0.5 text-sm text-green-600">
                    Verified
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 relative" style={bgStyle}>
            <div className='absolute w-full h-full bg-[#212360] bg-opacity-60 rounded-lg z-10'></div>
                    <div className='relative w-full h-full p-5 z-20 text-white grid place-content-center gap-10 text-center'>
                        <h1 className="font-bold text-2xl">Mainnet Coming soon</h1>
                        <p>Enjoy our Testnet version</p>
                    </div>
            </div>
          </div>
          <div className="p-3 bg-gray-200 rounded-md w-full my-5"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
