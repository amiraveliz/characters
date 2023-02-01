import React from "react";
import { shallow } from "enzyme";
import Loader from "./index";
import { StyledLoader } from "./style";

it("should render Loader", () => {
  const wrapper = shallow(<Loader />);

  expect(wrapper.find(StyledLoader).length).toEqual(1);
});
