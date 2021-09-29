import styled from "styled-components";

import { rem } from "./utils.styles";
import { Row } from "./Global.styles";
import { font24, font48, fontWeightBold, Header50 } from "./typography.styles";

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

export const HeaderIconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${rem(32)};

  ${Header50} {
    margin-left: ${rem(24)};
    margin-bottom: 0;
  }
`;
