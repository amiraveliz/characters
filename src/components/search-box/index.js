import React from "react";

import { SearchContainer, SearchForm, SearchInput, StyledIcon } from "./style";

const SearchBox = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput onChange={handleChange} value={value} />
        <StyledIcon>
          <i className="fa-solid fa-magnifying-glass"></i>
        </StyledIcon>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBox;
