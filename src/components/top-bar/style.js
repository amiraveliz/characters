import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const StyledImage = styled.img`
  height: 68px;
`;

export { StyledContainer, StyledImage };
