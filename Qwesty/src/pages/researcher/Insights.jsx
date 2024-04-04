import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useInsightsContext } from "../../context/actokuyt/Insights-context";
import { switchTheme } from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import InsightsTabs from "../../components/actokuyt/insights-tabs";
import InsightsSummaryTab from "../../components/actokuyt/insights-summary-tab";
import InsightsResponseTab from "../../components/actokuyt/insights-response-tab";
import InsightsAnalyticsTab from "../../components/actokuyt/insights-analytics-tab";
import Footer from "../../components/Footer";

const Insights = () => {
  const { activeTab } = useInsightsContext();
  // const { parameter } = useParams();
  const { resTheme } = useTheme();

  // const research = ResearchPageData.find(
  //   (item) => item.id === parseInt(parameter)
  // );
  // const title = research ? research.title : "Research not found";
  // const amountSpent = research ? research.amountSpent : "Research not found";

  // const [screenWidth, setScreenWidth] = useState(window.screen.width);

  // useEffect(() => {
  //   function handleResize() {
  //     setScreenWidth(window.screen.width);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [screenWidth]);

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
          className={`home-main-section  ${switchTheme(
            "text-black",
            "text-white",
            resTheme
          )}`}
        >
          <h1 className="font-bold text-3xl hidden sm:grid">Insights</h1>
          <section className="w-full h-[100%] mb-20">
            <InsightsTabs />
            {activeTab === 0 ? (
              <InsightsSummaryTab />
            ) : activeTab === 1 ? (
              <InsightsResponseTab />
            ) : activeTab === 2 ? (
              <InsightsAnalyticsTab />
            ) : (
              <></>
            )}
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
