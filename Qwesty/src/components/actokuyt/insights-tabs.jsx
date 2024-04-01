import { AlignJustify, MessageCircle, TrendingUp } from "lucide-react";
import styles from "../../assets/css/scrollbar.module.css";
import { SubInsight } from "../ben/insights";
import {useInsightsContext, InsightsProvider} from "../../context/actokuyt/Insights-context";

const insightsCards = [
  { value: "Summary", icon: <AlignJustify size={26} /> },
  { value: "Responses", icon: <MessageCircle size={26} /> },
  { value: "Analytics", icon: <TrendingUp size={26} /> },
];

export default function InsightsTabs() {
  const {activeTab, handleCardClick} = useInsightsContext();

  return (
    <div
      className={`w-full flex gap-10 md:gap-20 my-10 px-10 py-5 overflow-x-scroll ${styles["hide-scroll"]}`}
    >
      {insightsCards.map((insightCard, index) => {
        return (
          <SubInsight
            key={index}
            icon={insightCard.icon}
            label={insightCard.value}
            isActive={activeTab == index}
            onClick={() => handleCardClick(index)}
            iconBg={
              index === 0 ? "#ED8989" : index === 1 ? "#FFF3C7" : "#C5FFF0"
            }
            iconColor={
              index === 0 ? "#CD1313" : index === 1 ? "#AB880C" : "#10B186"
            }
          />
        );
      })}
    </div>
  );
}
