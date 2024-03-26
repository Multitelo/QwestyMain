import React from "react";

const GridCard = ({ label, value, borderColor }) => {
  return (
    <div
    className="rounded-2xl w-[90%] h-[150px] 785:h-[200px] relative hover:shadow-xl"
    style={{ border: `3px solid ${borderColor}` }}
  >
      <p className="pt-2 pl-2 font-bold">{label}</p>
      <h1
        className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute left-1/2 -bottom-0 -translate-x-1/2 -translate-y-1/2 transform`}
        style={{ color: `${borderColor}` }}
      >
        {value}
      </h1>
    </div>
  );
};

export default GridCard;
