import styled from "styled-components";

const StyledCard = styled.div`
  border: ${(props) => `1px solid ${props.theme.background}`};
  width: 50%;
  padding: 16px;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledDeleteButton = styled.button`
  background-color: ${(props) => props.theme.danger};
  width: 24px;
  height: 24px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const StyledTitle = styled.h3`
  color: ${(props) => props.theme.title};
`;

export { StyledCard, StyledDeleteButton, StyledInfoContainer, StyledTitle };
