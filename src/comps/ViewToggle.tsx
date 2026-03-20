import React from "react";
import styled from "styled-components";
import { rem } from "./utils.styles";
import { text } from "./colour.styles";

const ToggleButton = styled.button<{ $resumeMode: boolean }>`
  position: fixed;
  top: ${rem(24)};
  right: ${rem(24)};
  z-index: 1000;
  background-color: ${({ $resumeMode }) =>
    $resumeMode ? "#212121" : "#ffffff"};
  color: ${({ $resumeMode }) => ($resumeMode ? "#ffffff" : text)};
  border: 1.5px solid
    ${({ $resumeMode }) => ($resumeMode ? "#212121" : "#e0ddd8")};
  border-radius: ${rem(32)};
  padding: ${rem(10)} ${rem(20)};
  font-size: ${rem(14)};
  font-family: "Circular-std", sans-serif;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: all 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

type Props = {
  resumeMode: boolean;
  onToggle: () => void;
};

const ViewToggle = ({ resumeMode, onToggle }: Props) => (
  <ToggleButton $resumeMode={resumeMode} onClick={onToggle}>
    {resumeMode ? "← Portfolio" : "Full CV"}
  </ToggleButton>
);

export default ViewToggle;
