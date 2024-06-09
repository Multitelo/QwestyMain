import React from "react";
import qwestLogo from "../../../assets/qwest_assets/logo.svg";
import qwestCoin from "../../../assets/qwest_assets/coin.svg";

const CoinGrid = ({ balance = 360, coins = 6 }) => {
  return (
    <div>
      <div className="hidden sm:flex mb-1">
        <img src={qwestLogo} alt="qwest logo" />
        <h1 className="font-bold text-2xl">{balance}</h1>
      </div>
      <div className="coin_grid grid grid-cols-3 whitespace-nowrap w-fit gap-x-1 gap-y-2">
        {Array.from({ length: coins }).map((coin, index) => (
          <div key={index} className="bg-white whitespace-nowrap w-14 sm:w-16 py-[1px] rounded-lg flex justify-center items-center">
            {index !== 5 && <img src={qwestCoin} alt="coin" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinGrid;
