import { removeCharacter, getCharacters } from "./index";
import axios from "axios";
import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCES,
  GET_CHARACTERS_ERROR,
  REMOVE_CHARACTER,
} from "./types";
const BASE_URL = "https://swapi.dev/api/people";

jest.mock("axios");

describe("actions", () => {
  const mockDispatch = jest.fn();

  describe("getCharacters", () => {
    it("should call dispatch with GET_CHARACTERS_SUCCES type", async () => {
      const results = { data: { results: [{ name: "Luke" }] } };

      axios.get.mockResolvedValueOnce(results);

      const expectedStartAction = {
        type: GET_CHARACTERS_START,
      };
      const expectedSuccessAction = {
        type: GET_CHARACTERS_SUCCES,
        payload: {
          charactersList: [{ name: "Luke" }],
        },
      };

      await getCharacters(mockDispatch);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/`);
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
      expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);
    });

    it("should call dispatch with GET_CHARACTERS_ERROR type", async () => {
      const expectedStartAction = {
        type: GET_CHARACTERS_START,
      };
      const expectedErrorAction = {
        type: GET_CHARACTERS_ERROR,
      };

      axios.get.mockRejectedValueOnce();

      await getCharacters(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
      expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedErrorAction);
    });
  });

  describe("deleteCharacter", () => {
    it("should dipatch REMOVE_CHARACTER with an url as an id", () => {
      const expectedAction = {
        type: REMOVE_CHARACTER,
        payload: {
          characterUrl: "http://swapi.dev/api/people/1/",
        },
      };

      removeCharacter(mockDispatch, "http://swapi.dev/api/people/1/");

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
