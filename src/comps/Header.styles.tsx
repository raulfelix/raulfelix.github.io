import styled, { keyframes } from "styled-components";

import { rem } from "./utils.styles";
import { Row } from "./Global.styles";
import { font24, font48, fontWeightBold } from "./typography.styles";

export const wobble = keyframes`
  6% {
    transform: translateX(-2px);
  }
  8% {
    transform: translateX(-2px);
  }
  10% {
    transform: translateX(2px);
  }
  12% {
    transform: translateX(-2px);
  }
  14% {
    transform: translateX(2px);
  }
  16% {
    transform: translateX(-2px);
  }
  18%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  background-color: #dafbe1;
  padding: 0;
`;

export const HeaderRow = styled(Row)`
  position: relative;
  padding-top: 80px;
  padding-bottom: 20px;
`;

export const HeaderName = styled.h1`
  ${font48}
  font-family: ${fontWeightBold};
  margin-bottom: ${rem(8)};
`;

export const HeaderTitle = styled.p`
  ${font24}
`;

export const HeaderColourButton = styled.button`
  border-radius: ${rem(60)};
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  right: ${rem(24)};
  top: ${rem(24)};
  width: ${rem(60)};
  height: ${rem(60)};

  transition: all 200ms ease;
  transform: rotate(90deg);
  span {
    background-color: #d9c8ad;
    display: block;
    height: 25%;
    width: 100%;

    &:nth-child(2) {
      background-color: #44b9ed;
    }
    &:nth-child(3) {
      background-color: #ffd117;
    }
    &:nth-child(4) {
      background-color: #b762ff;
    }
  }

  &:hover {
    cursor: pointer;
    transform: rotate(0);
  }
`;
