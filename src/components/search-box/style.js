import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 50%;
  margin: 0 auto;
`;

const SearchForm = styled.form`
  display: flex;
  padding: 2px;
  border: 1px solid currentColor;
  border-radius: 5px;
  margin: 0 0 30px;
  border: none;
  padding: 0;
  position: relative;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  border: 1px solid transparent;
  border-radius: inherit;
  border: ${(props) => `2px solid ${props.theme.primary}`};
  width: 100%;
  padding: 9px 4px 9px 40px;
`;

const StyledIcon = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: ${(props) => props.theme.primary};
`;

export { SearchContainer, SearchForm, SearchInput, StyledIcon };
