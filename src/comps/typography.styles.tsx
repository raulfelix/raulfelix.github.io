import styled, { css } from "styled-components";
import { link, linkText } from "./colour.styles";
import { rem } from "./utils.styles";

export const fontFamilyBase = `'Circular-std', system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;

export const fontWeightLight = "300";
export const fontWeightNormal = "Circular-std";
export const fontWeightMedium = "Circular-Std-Bold";
export const fontWeightBold = "Circular-Std-Black";

export const fontBase = css`
  font-family: ${fontFamilyBase};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
`;

export const font24 = css`
  ${fontBase}
  font-size: ${rem(24)};
  line-height: ${rem(32)};
`;

export const font32 = css`
  ${fontBase}
  font-size: ${rem(32)};
  line-height: ${rem(46)};
`;

export const font48 = css`
  ${fontBase}
  font-size: ${rem(48)};
  line-height: ${rem(54)};
`;

export const Header50 = styled.h2`
  font-size: ${rem(50)};
  line-height: ${rem(60)};
  font-family: ${fontWeightBold};
  margin-bottom: ${rem(32)};
`;

export const Text = styled.p`
  ${font32}
  margin-bottom: ${rem(32)};
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;

  li {
    ${font32}
    margin: 0 0 ${rem(8)} ${rem(48)};
    padding: 0;
    line-height: ${rem(38)};
  }
`;

export const Link = styled.a`
  ${font32}
  background-color: ${link};
  border-radius: ${rem(4)};
  color: ${linkText};
  padding: 0 ${rem(3)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${linkText};
    outline: none;
  }
`;

export const Em = styled.em`
  font-style: normal;
`;
