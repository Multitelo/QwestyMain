import React from "react";
import CoinGrid from "./CoinGrid";
import BalanceCard from "./BalanceCard";

const QwestScenes = () => {
  return (
    <div className="relative z-10 text-white">
      <div className="flex items-center overflow-x-auto px-5 min-[462px]:px-0 justify-between gap-4 992:gap-0 992:justify-around 992:block whitespace-nowrap w-max min-[462px]:w-full">
        <div className="inline-block">
          <CoinGrid />
        </div>
        <div className="inline-block 992:absolute 992:right-0 992:top-20 mt-4 992:mt-0">
          <BalanceCard />
        </div>
      </div>
    </div>
  );
};

export default QwestScenes;
