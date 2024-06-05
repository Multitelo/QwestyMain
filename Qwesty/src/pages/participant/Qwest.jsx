import React from "react";
import qwestbg from "../../assets/images/qwestbg.svg";
import { useLoading } from "../../context/LoadingContext";
import LoadingBg from "../../components/ben/LoadingBg";
import { qwestComponents } from "../../components/ben/routes";
import StartQuest from "../../components/ben/qwest/StartQuest";
import avatar from "../../assets/images/qwestavatar1.png";

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
        <div className="w-full p-3">
          {/* <Profile /> */}
          <StartQuest />
        </div>
      </div>
    </section>
  );
};

export default Qwest;
