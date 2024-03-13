
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [resTheme, setResTheme] = useState('light')
  const [usertype, setUsertype] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const handleResearcherDropdown = ()=>{
    setDropdown(prevState=> !prevState)
  }

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  const researcherTheme = () => {
      setResTheme(prevState=> prevState==='light'?'dark':'light')
  }


  return (
    <ThemeContext.Provider value={{dropdown,setDropdown, handleResearcherDropdown, theme, toggleTheme, usertype, setUsertype, resTheme, researcherTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
