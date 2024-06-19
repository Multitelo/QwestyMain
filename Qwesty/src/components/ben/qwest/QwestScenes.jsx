import React from "react";
import CoinGrid from "./CoinGrid";
import BalanceCard from "./BalanceCard";
import QuestionSection from "./QuestionSection";
import { surveyQuestions } from "../../../data/data";
import { QwestProvider, useQuest } from "../../../context/QwestContext";
import EndSection from "../../share/qwest/EndSection";

const QwestScenesContent = ({ onEndQuest }) => {
  const { coins } = useQuest();

  return (
    <div className="relative z-10 text-white h-screen">
      <div className="flex items-center min-[462px]:px-0 overflow-x-auto justify-between gap-6 992:gap-0 992:justify-around 992:block whitespace-nowrap w-full min-[462px]:w-full">
        <div className="inline-block min-w-[180px]">
          <CoinGrid />
        </div>
        <div
          className={`inline-block 992:absolute 992:right-0 ${!coins ? "992:top-6" : coins.length >= 3 ? "992:top-20" : "992:top-14"} mt-5 992:mt-0`}
        >
          <BalanceCard />
        </div>
      </div>
      <div className="mt-6 992:mt-[14rem] 992:float-right w-fit 992:px-20">
        <QuestionSection surveyQugitestion={surveyQuestions} onEndQuest={onEndQuest} />
        <div className="flex justify-start">
          <EndSection/>
      </div>
      </div>
      
    </div>
  );
};

const QwestScenes = ({ onEndQuest }) => (
  <QwestProvider>
    <QwestScenesContent onEndQuest={onEndQuest} />
  </QwestProvider>
);

export default QwestScenes;
