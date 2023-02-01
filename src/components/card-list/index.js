import React from "react";

import Card from "../card";
import { StyledCardList } from "./style";

const CardList = ({ charactersList }) => (
  <StyledCardList>
    {charactersList.map((character) => (
      <Card character={character} key={character.url} />
    ))}
  </StyledCardList>
);

export default CardList;
