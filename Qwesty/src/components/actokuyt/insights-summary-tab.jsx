import React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  switchTheme,
  insigthGridCard,
  TotalResponseBody,
  TotalResponseHeading,
} from "../../data/data";
import { Download} from "lucide-react";
import { GridCard, Button, TotalResponse } from "../../components/ben/insights";

export default function InsightsSummaryTab() {
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  
  const { resTheme } = useTheme();

  // borderColor switch statement
  const borderColor = (index) => {
    switch (index) {
      case 0:
        return "#D36D0D";
      case 1:
        return "#4D26EB";
      case 2:
        return "#095B75";
      case 3:
        return "#787A0B";
      case 4:
        return "#0B7A31";
      default:
        return "#667085";
    }
  };
  // valueColor switch statement
  const valueColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#ffffff" : "#D36D0D";
      case 1:
        return screenWidth <= 768 ? "#ffffff" : "#4D26EB";
      case 2:
        return "#095B75";
      case 3:
        return "#787A0B";
      case 4:
        return "#0B7A31";
      default:
        return screenWidth <= 768 ? "white" : "#667085";
    }
  };

  // labelColor switch statement
  const labelColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#ffffff" : "#000000";
      case 1:
        return screenWidth <= 768 ? "#ffffff" : "#000000";
      case 2:
        return screenWidth <= 768 ? "#095B75" : "#000000";
      case 3:
        return screenWidth <= 768 ? "#787A0B" : "#000000";
      case 4:
        return screenWidth <= 768 ? "#0B7A31" : "#000000";
      default:
        return screenWidth <= 768 ? "white" : "#000000";
    }
  };

  // bgColor switch statement
  const bgColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#FF9960" : "transparent";
      case 1:
        return screenWidth <= 768 ? "#795AF7" : "transparent";
      case 2:
        return screenWidth <= 768 ? "#B5E8F9" : "transparent";
      case 3:
        return screenWidth <= 768 ? "#F3F65B" : "transparent";
      case 4:
        return screenWidth <= 768 ? "#55F58C" : "transparent";
      default:
        return screenWidth <= 768 ? "#8694B2" : "transparent";
    }
  };

  React.useEffect(() => {
    borderColor();
    bgColor();
    valueColor();
    labelColor();
  }, [borderColor, bgColor, valueColor, labelColor]);

  React.useEffect(() => {
    function handleResize() {
      setScreenWidth(window.screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="w-full gap-5 flex flex-col 785:flex-row px-0 785:px-10 h-[100%]">
      <div className="w-full 785:w-[60%] pl-5 md:pl-0">
        <div className="grid grid-cols-2 1207:grid-cols-3 gap-y-5">
          {insigthGridCard.map((grid, index) => (
            <GridCard
              key={index}
              label={grid.label}
              value={grid.value}
              borderColor={borderColor(index)}
              bgColor={bgColor(index, screenWidth)}
              valueColor={valueColor(index, screenWidth)}
              labelColor={labelColor(index, screenWidth)}
            />
          ))}
        </div>
        {/* buttons */}
        <div className="hidden  sm:flex w-full gap-5 mt-40">
          <Button
            p={`0.7rem 1.25rem`}
            theme={switchTheme("bg-[#5E6A82]", "bg-[#5E6A82]", resTheme)}
          >
            <Download size={26} />
            Download Summary
          </Button>
          <Button
            p={`0.7rem 2.7rem`}
            theme={switchTheme("bg-[#5E6A82]", "bg-[#5E6A82]", resTheme)}
          >
            <Download size={26} />
            Download All
          </Button>
        </div>
      </div>
      <TotalResponse
        TableBody={TotalResponseBody}
        TableHeading={TotalResponseHeading}
      />
    </div>
  );
}
