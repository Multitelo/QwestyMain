import React from "react";

const Button = ({
  textColor,
  bgColor,
  hoverTextColor = "text-purple-400",
  hoverBgColor = "bg-white",
  onClick,
  theme,
  children,
}) => {
  return (
     <button
       className={`shadow-md w-1/2 px-8 py-3 font-bold rounded-lg hover:${hoverTextColor} hover:${hoverBgColor} ${textColor} ${bgColor} ${theme}`}
       onClick={onClick}
     >

      {children}
    </button>
  );
};

export default Button;
