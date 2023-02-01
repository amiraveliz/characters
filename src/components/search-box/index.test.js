import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./index";
import { SearchInput, StyledIcon } from "./style";

it("should render SearchBox", () => {
  const onChangeText = jest.fn();
  const wrapper = shallow(<SearchBox onChange={onChangeText} value="" />);
  wrapper.find(SearchInput).simulate("change", { target: { value: "Luke" } });

  expect(onChangeText).toHaveBeenCalledTimes(1);
  expect(onChangeText).toHaveBeenNthCalledWith(1, "Luke");
  expect(wrapper.find(SearchInput).length).toEqual(1);
  expect(wrapper.find(StyledIcon).length).toEqual(1);
});
