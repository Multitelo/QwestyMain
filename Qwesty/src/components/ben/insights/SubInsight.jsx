import { MessageCircle } from "lucide-react";
import React from "react";

const SubInsight = ({ iconColor, iconBg, icon, label, isActive, onClick }) => {
  return (
    <div
      className="rounded-lg cursor-pointer flex-shrink-0  w-[200px] md:w-[250px] h-[100px] relative shadow-md bg-slate-100"
      style={{
        border: isActive ? `2px solid ${iconBg}` : `2px solid transparent`,
      }}
      onClick={onClick}
    >
      <div
        className="p-[1px] rounded-md w-fit absolute top-2 right-2"
        style={{ color: `${iconColor}`, backgroundColor: `${iconBg}` }}
      >
        {icon}
      </div>
      <h1 className="font-bold text-xl text-center absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </h1>
    </div>
  );
};

export default SubInsight;
