import React from "react";
import qwestbg from "../../assets/images/qwestbg.svg";
import { useLoading } from "../../context/LoadingContext";
import LoadingBg from "../../components/ben/LoadingBg";
import { qwestComponents } from "../../components/ben/routes";
import SideBar from "../../components/share/SideBar";
const Qwest = () => {
  const { loading } = useLoading();
  const { Profile } = qwestComponents;

  return (
    <section className="w-full md:flex relative">
      {loading && <LoadingBg />}
      {/* sidebar */}
      <div
        className={`sidebar bg-white h-screen p-5 w-[20%] hidden md:grid place-content-center`}
      >
        Sidebar
      </div>

      {/* main section */}
      <div
        className={`qwestSection w-full md:w-[80%] h-screen`}
        style={{
          background: `url(${qwestbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex justify-end py-5 pr-20 pl-40">
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default Qwest;
