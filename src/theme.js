import { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { CustomThemeContext } from "./contexts/custom-theme-context";

const THEMES = {
  light: {
    primary: "#F7D5A3",
    secondary: "#c2dee3",
    background: "#F7ECDC",
    title: "#F5A282",
    text: "#303030",
    disabled: "#e2e2e2",
    danger: "#ce0000",
  },
  dark: {
    primary: "#D47077",
    secondary: "#4C4569",
    background: "#2E3054",
    title: "#FFCF75",
    text: "#F8F8F8",
    disabled: "#e2e2e2",
    danger: "#ce0000",
  },
};

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    min-height: 100%;
    padding: 0;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
  }

  #root {
    height: inherit;
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(CustomThemeContext);
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
