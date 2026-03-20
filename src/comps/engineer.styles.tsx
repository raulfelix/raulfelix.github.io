import styled from "styled-components";

import { link, text } from "./colour.styles";
import { Text, Ul } from "./typography.styles";

export const Engineering = styled.div`
  background-color: ${link};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        90deg,
        transparent 63px,
        rgba(194, 65, 12, 0.35) 63px,
        rgba(194, 65, 12, 0.35) 64px,
        transparent 64px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 39px,
        rgba(146, 64, 14, 0.22) 39px,
        rgba(146, 64, 14, 0.22) 40px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 7px,
        rgba(146, 64, 14, 0.07) 7px,
        rgba(146, 64, 14, 0.07) 8px
      );
  }
`;

export const TextType = styled(Text)`
  font-family: "IBM Plex Mono", monospace;
  font-size: 2rem;
  line-height: 40px;
  margin-bottom: 40px;
  color: ${text};
`;

export const UlType = styled(Ul)`
  margin-bottom: 40px;

  li {
    font-family: "IBM Plex Mono", monospace;
    font-size: 2rem;
    line-height: 40px;
    margin-bottom: 0;
    margin-left: 3rem;
    color: ${text};
  }
`;
