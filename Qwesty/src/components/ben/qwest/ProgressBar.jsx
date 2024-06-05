import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex items-start relative gap-5 mt-3">
      {/* progress bar and level text container */}
      <div className="flex flex-col items-center">
        {/* progress bar */}
        <div className="w-[180px]">
          <span id="ProgressLabel" className="sr-only">
            Loading
          </span>
          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="75"
            className="block rounded-full bg-gray-200 border-2 border-emerald-400"
          >
            <span
              className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-gray-400 to-gray-500"
              style={{ width: "75%" }}
            ></span>
          </span>
        </div>
        {/* level text */}
        <div className="text-center">
          <p className="font-bold">Level 1 Stage 1</p>
        </div>
      </div>
      {/* stage and level */}
      <div className="h-fit absolute -right-16 -top-2">
        <p className="font-bold text-center text-xl">
          <span>Jake</span>
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
