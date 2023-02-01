import { useContext } from "react";
import React from "react";

import ToggleSwitch from "../toogle-switch";
import { CustomThemeContext } from "../../contexts/custom-theme-context";
import { StyledContainer, StyledImage } from "./style";
import LightLogo from "./logo-light.svg";
import DarkLogo from "./logo-dark.svg";

const TopBar = () => {
  const { theme, toggleTheme } = useContext(CustomThemeContext);

  return (
    <StyledContainer>
      <StyledImage src={theme === "dark" ? DarkLogo : LightLogo} />
      <ToggleSwitch
        onChange={toggleTheme}
        checked={theme === "light"}
        label={`${theme} theme`}
      />
    </StyledContainer>
  );
};

export default TopBar;
