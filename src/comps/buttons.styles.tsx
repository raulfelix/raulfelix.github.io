import styled from "styled-components";

import { rem } from "./utils.styles";
import { fontWeightMedium } from "./typography.styles";
import { white, text } from "./colour.styles";

export const Button = styled.button`
  background-color: ${white};
  font-family: ${fontWeightMedium};
  height: ${rem(60)};
  line-height: ${rem(40)};
  outline: 0;
  padding: 0 ${rem(40)};
  text-align: center;
  text-decoration: none;
  width: auto;
  white-space: nowrap;
  -webkit-appearance: none;

  background-color: $white;
  border-radius: ${rem(32)};
  border: 4px solid #8931d6;
  color: ${text};
  cursor: pointer;
  font-family: $medium;
  font-size: ${rem(26)};

  &:hover {
    background-color: $white;
    cursor: pointer;
    text-decoration: none;
    transform: scale(1.05) translateY(-4px);
  }

  transition: all 0.1s ease-in-out 0s, box-shadow 0.3s ease-in-out 0s;

  &:focus {
    box-shadow: #dbb3ff 0px 0px 0px 3px;
   
`;
