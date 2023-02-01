import React from "react";
import { useDispatch } from "react-redux";

import { removeCharacter } from "../../actions";
import {
  StyledCard,
  StyledDeleteButton,
  StyledInfoContainer,
  StyledTitle,
} from "./style";

const Card = ({ character }) => {
  const dispatch = useDispatch();

  const { name, url, hair_color, eye_color, gender } = character;

  const handleRemoveCharacter = () => removeCharacter(dispatch, url);

  return (
    <StyledCard>
      <StyledInfoContainer>
        <StyledTitle>{name}</StyledTitle>
        <span>
          <strong>Hair color: </strong>
          {hair_color}
        </span>
        <span>
          <strong>Eyes color: </strong>
          {eye_color}
        </span>
        <span>
          <strong>Gender: </strong>
          {gender}
        </span>
      </StyledInfoContainer>
      <StyledDeleteButton onClick={handleRemoveCharacter}>
        <i className="fa-solid fa-trash-can"></i>
      </StyledDeleteButton>
    </StyledCard>
  );
};

export default Card;
