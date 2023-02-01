import { useState, createContext } from "react";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const CustomThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("__theme") || DARK_THEME
  );

  const toggleTheme = () => {
    const themeUpdated = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(themeUpdated);
    window.localStorage.setItem("__theme", themeUpdated);
  };

  return (
    <CustomThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeProvider, CustomThemeContext };
