import styled from "styled-components";

export const Intro = styled.div`
  background-color: #faf7f2;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    mask-image: linear-gradient(
      to bottom,
      transparent 25%,
      rgba(0, 0, 0, 1) 80%
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 25%,
      rgba(0, 0, 0, 1) 80%
    );
  }
`;
