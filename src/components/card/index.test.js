import * as Actions from "../../actions";
import * as redux from "react-redux";
import { StyledCard, StyledDeleteButton } from "./style";
import Card from "./index";
import React from "react";
import { shallow } from "enzyme";

it("should render Card", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  jest.spyOn(Actions, "removeCharacter").mockImplementation(() => {});
  const wrapper = shallow(
    <Card character={{ name: "Luke", url: "http://swapi.dev/api/people/1/" }} />
  );
  wrapper.find(StyledDeleteButton).simulate("click");

  expect(Actions.removeCharacter).toHaveBeenCalledTimes(1);
  expect(Actions.removeCharacter).toHaveBeenNthCalledWith(
    1,
    mockDispatchFn,
    "http://swapi.dev/api/people/1/"
  );
  expect(wrapper.find(StyledCard).length).toEqual(1);
  expect(wrapper.find(StyledDeleteButton).length).toEqual(1);
});
