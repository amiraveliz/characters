import { createStore } from "redux";
import Immutable from "seamless-immutable";
import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCES,
  GET_CHARACTERS_ERROR,
  REMOVE_CHARACTER,
} from "../actions/types";

const initialState = Immutable({
  charactersList: [],
  isLoading: false,
});

const charactersStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_START:
      return state.merge({
        isLoading: true,
      });
    case GET_CHARACTERS_SUCCES:
      return state.merge({
        charactersList: action.payload.charactersList,
        isLoading: false,
      });
    case GET_CHARACTERS_ERROR:
      return state.merge({
        isLoading: false,
      });
    case REMOVE_CHARACTER:
      return state.merge({
        charactersList: state.charactersList.filter(
          (character) => character.url !== action.payload.characterUrl
        ),
      });
    default:
      return state;
  }
};

const store = createStore(charactersStore);

export { charactersStore as CharactersStore };

export default store;
