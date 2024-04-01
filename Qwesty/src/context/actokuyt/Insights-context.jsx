import React from "react";

const InsightsContext = React.createContext();

export const useInsightsContext = () => React.useContext(InsightsContext)

export const InsightsProvider = ({ children }) => {
  const [activeTab, setActiveCard] = React.useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <InsightsContext.Provider value={{ activeTab, handleCardClick }}>
      {children}
    </InsightsContext.Provider>
  );
};