import { CharactersStore } from "./index";
import Immutable from "seamless-immutable";
import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCES,
  GET_CHARACTERS_ERROR,
  REMOVE_CHARACTER,
} from "../actions/types";

describe("CharactersStore", () => {
  it("should return the initial state", () => {
    expect(CharactersStore(undefined, {})).toEqual({
      isLoading: false,
      charactersList: [],
    });
  });

  it("should handle GET_CHARACTERS_START", () => {
    const updatedStore = CharactersStore(undefined, {
      type: GET_CHARACTERS_START,
    });

    expect(updatedStore.isLoading).toEqual(true);
  });

  it("should handle GET_CHARACTERS_SUCCES", () => {
    const charactersList = [{ name: "Luke" }, { name: "Han Solo" }];

    const updatedStore = CharactersStore(undefined, {
      type: GET_CHARACTERS_SUCCES,
      payload: {
        charactersList,
      },
    });

    expect(updatedStore.charactersList).toEqual(charactersList);
    expect(updatedStore.isLoading).toEqual(false);
  });

  it("should handle GET_CHARACTERS_ERROR", () => {
    const updatedStore = CharactersStore(undefined, {
      type: GET_CHARACTERS_ERROR,
    });

    expect(updatedStore.isLoading).toEqual(false);
  });

  it("should handle REMOVE_CHARACTER", () => {
    const charactersList = [
      { name: "Luke", url: "http://swapi.dev/api/people/1/" },
      { name: "Han Solo", url: "http://swapi.dev/api/people/2/" },
    ];
    const storeWithCharacters = CharactersStore(undefined, {
      type: GET_CHARACTERS_SUCCES,
      payload: { charactersList },
    });
    // two characters added

    // deleting Luke
    const characterUrl = "http://swapi.dev/api/people/1/";
    const updatedStore = CharactersStore(storeWithCharacters, {
      type: REMOVE_CHARACTER,
      payload: {
        characterUrl,
      },
    });
    expect(updatedStore.charactersList).toEqual(
      Immutable([{ name: "Han Solo", url: "http://swapi.dev/api/people/2/" }])
    );
  });
});
