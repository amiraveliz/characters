import React from "react";
import { StyledLabel, StyledInput, Switch } from "./style";

const ToggleSwitch = ({ checked = false, onChange = () => {}, label = "" }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <StyledLabel>
      {label}&nbsp;
      <StyledInput checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </StyledLabel>
  );
};

export default ToggleSwitch;
