import styled from "styled-components";

import { blue } from "./colour.styles";
import { Text, Ul } from "./typography.styles";

export const Engineering = styled.div`
  background-color: ${blue};
`;

export const TextType = styled(Text)`
  font-family: "IBM Plex Mono", monospace;
`;

export const UlType = styled(Ul)`
  margin-bottom: 32px;

  li {
    font-family: "IBM Plex Mono", monospace;
  }
`;
