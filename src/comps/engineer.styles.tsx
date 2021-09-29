import styled from "styled-components";

import { blue } from "./colour.styles";
import { Text, Ul } from "./typography.styles";

export const Engineering = styled.div`
  background-color: ${blue};
`;

export const TextType = styled(Text)`
  font-family: courier;
`;

export const UlType = styled(Ul)`
  li {
    font-family: courier;
  }
`;
