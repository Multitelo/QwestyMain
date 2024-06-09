import React from "react";
import qwestbg from "../../assets/images/qwestbg.svg";
import LoadingBg from "../../components/ben/LoadingBg";
import StartQuest from "../../components/ben/qwest/StartQuest";
import Sidebar from "../../components/share/SideBar";
import { useLoading } from "../../context/LoadingContext";
import { useQwest } from "../../context/QwestContext";
import QwestScenes from "../../components/ben/qwest/QwestScenes";

const Qwest = () => {
  const { loading } = useLoading();
  const {
    currentQuestionIndex,
    responses,
    progress,
    startQwest,
    answerQuestion,
    skipQuestion,
  } = useQwest();

  return (
    <section className="w-full h-screen flex relative">
      {loading && <LoadingBg />}

      {/* sidebar */}
      <div className="w-[20%] hidden 992:block">
        <Sidebar />
      </div>

      {/* main section */}
      <div
        className="qwestSection w-full 992:w-[80%] h-full relative"
        style={{
          background: `url(${qwestbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay absolute opacity-[0.4] bg-black w-full h-full p-20"></div>
        <div className="w-full h-full p-3 overflow-auto">
          {/* <StartQuest /> */}
          <QwestScenes />
        </div>
      </div>
    </section>
  );
};

export default Qwest;
