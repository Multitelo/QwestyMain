
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    const localParticipantTheme = localStorage.getItem('theme')
    return localParticipantTheme ? localParticipantTheme:'light'
  });
  const [resTheme, setResTheme] = useState( ()=>{
    const localResearchTheme = localStorage.getItem('resTheme')
    return localResearchTheme?localResearchTheme:'light';
  })
  const [usertype, setUsertype] = useState('');
  const [dropdown, setDropdown] = useState(false);
// console.log(resTheme)

  useEffect(()=>{
      localStorage.setItem('resTheme', resTheme);
      localStorage.setItem('theme', theme);
  }, [resTheme, theme])
  
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
