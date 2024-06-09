import React from "react";
import CoinGrid from "./CoinGrid";
import BalanceCard from "./BalanceCard";
import QuestionSection from "./QuestionSection";

const QwestScenes = () => {
  return (
    <div className="relative z-10 text-white h-screen">
      <div className="flex items-center min-[462px]:px-0 overflow-x-auto justify-between gap-6 992:gap-0 992:justify-around 992:block whitespace-nowrap w-full min-[462px]:w-full">
        <div className="inline-block min-w-[180px]"> 
          <CoinGrid />
        </div>
        <div className="inline-block 992:absolute 992:right-0 992:top-20 mt-4 992:mt-0">
          <BalanceCard />
        </div>
      </div>
      {/* QuestionSection */}
      <div className="mt-6 992:mt-[14rem] 992:float-right w-fit 992:px-20">
        <QuestionSection />
      </div>
    </div>
  );
};

export default QwestScenes;
