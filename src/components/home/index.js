import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../actions";
import CardList from "../card-list";
import Loader from "../loader";
import SearchBox from "../search-box";
import { StyledHome, StyledMessage, StyledTitle } from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const charactersList = useSelector((store) => store.charactersList);
  const isLoading = useSelector((store) => store.isLoading);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getCharacters(dispatch);
  }, []);

  const handleChangeSearch = (text) => {
    setSearchText(text);
  };

  const charactersFiltered = charactersList.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <StyledHome>
      <StyledTitle>Star Wars Characters</StyledTitle>
      <SearchBox value={searchText} onChange={handleChangeSearch} />
      {isLoading && <Loader />}
      {!isLoading && <CardList charactersList={charactersFiltered} />}
      {searchText !== "" && charactersFiltered.length === 0 && (
        <StyledMessage>No results found</StyledMessage>
      )}
    </StyledHome>
  );
};

export default Home;
