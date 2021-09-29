import styled from "styled-components";

import { rem } from "./utils.styles";

export const PillGroup = styled.ul`
  margin: 0;
  padding: 0;
}
`;
export const Pill = styled.li`
  background-color: transparent;
  color: #ff576f;
  display: inline-block;
  font-size: ${rem(20)};
  list-style: none;
  margin: 0 12px 6px 0;
  padding: 4px 0;
`;
