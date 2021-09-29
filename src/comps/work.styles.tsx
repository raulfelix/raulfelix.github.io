import styled from "styled-components";

import { rem } from "./utils.styles";
import { red } from "./colour.styles";
import { fontWeightMedium, Link, Text } from "./typography.styles";

export const WorkText = styled(Text)`
  margin-bottom: 0;
`;

export const WorkLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${rem(16)};
`;

export const PillGroup = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Pill = styled.li`
  background-color: transparent;
  color: ${red};
  display: inline-block;
  font-size: ${rem(24)};
  font-family: ${fontWeightMedium};
  list-style: none;
  margin: 0 12px 6px 0;
  padding-top: ${rem(4)};
`;
