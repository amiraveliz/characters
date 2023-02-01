import styled from "styled-components";

const StyledHome = styled.div`
  position: relative;
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.title};
  text-align: center;
`;

const StyledMessage = styled.h1`
  text-align: center;
`;

export { StyledHome, StyledMessage, StyledTitle };
