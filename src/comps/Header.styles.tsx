import styled from "styled-components";

import { rem } from "../utils.styles";

export const Header = styled.header`
  padding-top: ${rem(100)};
  position: relative;
`;

export const HeaderName = styled.h2`
  font-size: ${rem(30)};
  margin-bottom: ${rem(24)};
`;

export const HeaderTitle = styled.h1`
  font-size: ${rem(60)};
  margin-bottom: ${rem(24)};
`;
