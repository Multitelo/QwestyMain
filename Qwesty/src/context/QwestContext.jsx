import React, { createContext, useState, useContext, useEffect } from "react";

const QwestContext = createContext();
export const useQwest = () => useContext(QwestContext);
export const QwestProvider = ({ children }) => {
  const [qwest, setQest] = useState([
    { startQwest: 0 },
    { qwestSate: "passed" || "failed" },
    { isCompleted: true || false },
  ]);



  return (
    <QwestContext.Provider value={{ qwest, setQest }}>
      {children}
    </QwestContext.Provider>
  );
};
