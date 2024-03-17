import React from "react";
import LineChart from "./LineChart";
import ProfileContainer from "./ProfileContainer";
import ComingSoon from "./ComingSoon";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div className="bg-white w-full h-screen">
      <section className="flex">
        {/* sample sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full h-[100%] flex flex-col bg-gray-300 p-2 md:p-10">
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
