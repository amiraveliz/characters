import React from "react";
import { shallow } from "enzyme";
import CardList from "./index";
import { StyledCardList } from "./style";
import Card from "../card";

it("should render CardList", () => {
  const wrapper = shallow(
    <CardList
      charactersList={[
        { name: "Luke", url: 1 },
        { name: "Chewbaka", url: 2 },
      ]}
    />
  );

  expect(wrapper.find(StyledCardList).length).toEqual(1);
  expect(wrapper.find(Card).length).toEqual(2);
});
