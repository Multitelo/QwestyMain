import React from "react";
import { useParams } from "react-router-dom";
import { darkTheme, switchTheme, ResearchPageData } from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";

const Insights = () => {
  const { resTheme } = useTheme();
  const { parameter } = useParams();

  const research = ResearchPageData.find(
    (item) => item.id === parseInt(parameter)
  );
  const title = research ? research.title : "Research not found";
  const amountSpent = research ? research.amountSpent : "Research not found";
  return (
    <div className={`researcher-content ${resTheme}`}>
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        {/* content */}
        <div
          className={`home-main-section ${switchTheme(
            "text-black",
            "text-white",
            resTheme
          )}`}
        >
          <h1 className="font-bold text-3xl">Insight</h1>
          <h2 className="font-bold text-2xl py-20">{title}{" = "}{amountSpent}</h2>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Insights;
