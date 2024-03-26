import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { darkTheme, switchTheme, ResearchPageData } from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import SubInsight from "../../components/ben/insights/SubInsight";
import styles from "../../assets/css/scrollbar.module.css";
import {
  AlignJustify,
  MessageCircle,
  MessageCircleMore,
  TrendingUp,
} from "lucide-react";

const Insights = () => {
  const { resTheme } = useTheme();
  const { parameter } = useParams();

  const research = ResearchPageData.find(
    (item) => item.id === parseInt(parameter)
  );
  const title = research ? research.title : "Research not found";
  const amountSpent = research ? research.amountSpent : "Research not found";

  const insightCard = [
    { value: "Summary", icon: <AlignJustify size={26} /> },
    { value: "Responses", icon: <MessageCircle size={26} /> },
    { value: "Analytics", icon: <TrendingUp size={26} /> },
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

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
          {/* main */}
          <section className="w-full h-screen ">
            {/* scroll header */}
            <div
              className={`w-full flex gap-10 md:gap-20 my-10 px-10 py-5 overflow-x-scroll ${styles["hide-scroll"]}`}
            >
              {insightCard.map((insightCard, index) => (
                <SubInsight
                  key={index}
                  icon={insightCard.icon}
                  label={insightCard.value}
                  isActive={activeCard === index}
                  onClick={() => handleCardClick(index)}
                  iconBg={
                    index === 0
                      ? "#ED8989"
                      : index === 1
                      ? "#FFF3C7"
                      : "#C5FFF0"
                  }
                  iconColor={
                    index === 0
                      ? "#CD1313"
                      : index === 1
                      ? "#AB880C"
                      : "#10B186"
                  }
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Insights;
