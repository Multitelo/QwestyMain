import React, { useEffect, useState } from "react";
import CoinGrid from "./CoinGrid";
import BalanceCard from "./BalanceCard";
import QuestionSection from "./QuestionSection";
import { surveyQuestions } from "../../../data/data";
import { QwestProvider, useQuest } from "../../../context/QwestContext";
import QwestButton from "./QwestButton";

const QwestScenesContent = ({ onEndQuest }) => {
  const [questStarted, setQuestStarted] = useState(false);

  useEffect(() => {
    const questState = localStorage.getItem("questStarted");
    if (questState) {
      setQuestStarted(true);
    }
  }, []);
  const { coins, togglePause, isPaused, endQuiz } = useQuest();

  return (
    <div className="relative z-10 text-white h-screen">
      <div className="flex items-center min-[462px]:px-0 overflow-x-auto justify-between gap-0  992:block whitespace-nowrap w-full min-[462px]:w-full">
        <div className="inline-block min-w-[180px] 992:absolute ">
          <CoinGrid />
        </div>
        {/* <div
          className={`inline-block 992:absolute 992:right-0 ${!coins ? "992:top-" : coins.length >= 3 ? "992:top-20" : "992:top-14"} mt-5 992:mt-0`}
        > */}
        <div
          className={`inline-block 992:absolute 992:right-0 992:top-[5rem] mt-5 992:mt-0`}
        >
          <BalanceCard />
        </div>
      </div>
      <div className="mt-6 992:mt-[20rem] 992:float-right w-fit">
        <div className="992:px-20">
          <QuestionSection
            surveyQuestion={surveyQuestions}
            onEndQuest={onEndQuest}
          />
        </div>
        <section className="my-10 flex">
          <div className="ml-auto w-fit pr-10 992:flex gap-10 hidden">
            <QwestButton color="black" bgColor="white" onClick={togglePause}>
              {isPaused ? "Start" : "Pause"}
            </QwestButton>
            <QwestButton color="#8E5DF5" bgColor="#FA8787" onClick={endQuiz}>
              End
            </QwestButton>
          </div>
        </section>
      </div>
      {/* <div className="p-20 bg-white h-20 w-20 absolute z-20">hjjjkjkjk</div> */}
    </div>
  );
};

const QwestScenes = ({ onEndQuest }) => (
  <QwestProvider>
    <QwestScenesContent onEndQuest={onEndQuest} />
  </QwestProvider>
);

export default QwestScenes;
