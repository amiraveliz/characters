import { GET } from "../api";
import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCES,
  GET_CHARACTERS_ERROR,
  REMOVE_CHARACTER,
} from "./types";

const getCharacters = async (dispatch) => {
  try {
    dispatch({
      type: GET_CHARACTERS_START,
    });
    const {
      data: { results },
    } = await GET();

    dispatch({
      type: GET_CHARACTERS_SUCCES,
      payload: {
        charactersList: results,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
    });
  }
};

const removeCharacter = (dispatch, characterUrl) => {
  dispatch({
    type: REMOVE_CHARACTER,
    payload: {
      characterUrl,
    },
  });
};

export { getCharacters, removeCharacter };
