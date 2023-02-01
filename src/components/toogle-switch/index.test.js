import React from "react";
import { shallow } from "enzyme";
import ToggleSwitch from "./index";
import { StyledLabel, StyledInput, Switch } from "./style";

it("should render ToggleSwitch", () => {
  const onChange = jest.fn();
  const wrapper = shallow(
    <ToggleSwitch onChange={onChange} checked={false} label="test" />
  );
  wrapper.find(StyledInput).simulate("change", { target: { checked: true } });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenNthCalledWith(1, true);
  expect(wrapper.find(StyledInput).length).toEqual(1);
  expect(wrapper.find(StyledLabel).length).toEqual(1);
  expect(wrapper.find(Switch).length).toEqual(1);
});
