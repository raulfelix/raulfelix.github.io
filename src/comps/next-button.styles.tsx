import styled from "styled-components";
import { linkText } from "./colour.styles";

export const NextButton = styled.button`
  background: none;
  font-size: 24px;
  padding: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    box-shadow: inset 0 0 0 3px ${linkText};
    outline: 0;
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 3px ${linkText};
  }
`;
