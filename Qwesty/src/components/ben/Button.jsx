import React from "react";

const Button = ({
  textColor = "white",
  bgColor = "bg-purple-400",
  hoverTextColor = "text-purple-400",
  hoverBgColor = "bg-white",
  onClick,
  children,
}) => {
  return (
     <button
       className={`shadow-md w-1/2 px-8 py-3 font-bold rounded-lg hover:${hoverTextColor} hover:${hoverBgColor} ${textColor} ${bgColor}`}
       onClick={onClick}
     >

      {children}
    </button>
  );
};

export default Button;
