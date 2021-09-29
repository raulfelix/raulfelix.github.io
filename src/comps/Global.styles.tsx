import styled, { css } from "styled-components";

import { rem } from "./utils.styles";

export const baseRow = css`
  max-width: ${rem(1160)};
  margin: auto;
  padding: ${rem(80)} ${rem(24)};
`;

export const Row = styled.div`
  ${baseRow}
  position: relative;
`;

export const Reset = styled.div`
  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    height: auto;
  }

  a {
    text-decoration: none;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  input::-ms-clear {
    display: none;
  }

  ul,
  li {
    list-style: none;
  }
`;

export const Main = styled.main`
  background-color: #fff;
`;
