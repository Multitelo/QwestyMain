import { Circle, EllipsisVertical } from "lucide-react";
import React, { useEffect, useState } from "react";
import { darkTheme, switchTheme } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";

const ResearchCard = ({
  status,
  statusColorBg,
  statusColorText,
  title,
  researchType,
  numberReached,
  amountSpent,
}) => {
  const { resTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const closeSidebar = (event) => {
      if (open && !event.target.closest(".options")) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeSidebar);

    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, [open]);

  return (
    <div className={`rounded-2xl w-full p-5 border-[1px] mb-5 ${switchTheme('bg-white border-gray-400', darkTheme + " text-white border-gray-700", resTheme)}`}>
      <div className="flex justify-between relative">
        <span
          className={`inline-flex items-center justify-center gap-1 rounded-full px-2.5 py-0.5`}
          style={{backgroundColor: statusColorBg}}
        >
          <Circle color={statusColorText} size={16} fill={statusColorText} />
          <p className={`whitespace-nowrap text-sm font-semibold`} style={{ color: switchTheme(statusColorText, statusColorText, resTheme) }}>
            {status}
          </p>
        </span>
        <EllipsisVertical onClick={handleToggle} className="options cursor-pointer" />
        {open && (
          <div className="option bg-gray-200 rounded-xl px-3 py-2 absolute top-7 -right-3 shadow-md">
            <p className="cursor-pointer">Delete</p>
          </div>
        )}
      </div>
      <h1 className="font-bold text-lg md:text-2xl py-3">{title}</h1>
      <div className="w-full flex flex-col 531:flex-row justify-between">
        <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
          <h2 className="font-semibold text-lg 531:text-xl">Research type</h2>
          <p className="text-md 531:text-lg font-semibold">{researchType}</p>
        </div>
        <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
          <h2 className="font-semibold text-lg 531:text-xl">Number reached</h2>
          <p className="text-md 531:text-lg font-semibold">{numberReached}</p>
        </div>
        <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
          <h2 className="font-semibold text-lg 531:text-xl">Amount spent</h2>
          <p className="text-md 531:text-lg font-semibold">{amountSpent}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
