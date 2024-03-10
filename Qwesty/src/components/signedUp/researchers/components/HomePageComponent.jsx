import React from "react";
import LineChart from "./LineChart";
import ProfileContainer from "./ProfileContainer";
import ComingSoon from "./ComingSoon";

const HomePage = () => {
  return (
    <div className="bg-white w-full h-screen">
      <section className="flex">
        {/* sample sidebar */}
        <div className="sidebar h-[100v]  hidden  w-[400px] bg-gray-300 992:grid place-content-center shadow-md">
          Sidebar
        </div>
        {/* content */}
        <div className="w-full h-[100%] flex flex-col bg-emerald-500 p-2 md:p-10">
          <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 1207:grid-cols-3 lg:gap-8">
            {/* profile  */}
            <div className="profileContainer">
              <ProfileContainer />
            </div>
            {/* chart */}
            <div className="block md:hidden">
              <LineChart />
            </div>
            {/* coming soon */}
            <div className="ComingSoon 1207:col-span-2">
              <ComingSoon />
            </div>
          </div>
          {/* chart */}
          <div className="chart hidden md:block">
            <LineChart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
