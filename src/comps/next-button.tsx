import React from "react";
import { scrollBodyTo } from "../util/Scroller";

import iconDropDown from "../images/icon_dropdown.svg";
import * as Styled from "./next-button.styles";

type Props = {
  target: string;
  color?: string;
};

const NextButton = ({ target, color = "#000" }: Props) => (
  <div className="next" style={{ textAlign: "center" }}>
    <Styled.NextButton
      type="button"
      className="hvr-wobble-vertical"
      style={{ color }}
      onClick={() => {
        const el = document.getElementById(target);
        if (el) scrollBodyTo(el);
      }}
    >
      <img src={iconDropDown} alt="" />
    </Styled.NextButton>
  </div>
);

export default NextButton;
