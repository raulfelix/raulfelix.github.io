import React from "react";

import * as Styled from "./Header.styles";
// import audio from '../audio/raul_es.mp3';

// let track = new Audio(audio);
// track.playbackRate = .75;

const Header = () => (
  <Styled.Header>
    <Styled.HeaderName>
      Raúl{" "}
      <button
        id="pronounce"
        type="button"
        title="Hear pronunciation"
        className="vocalize icon-volume-high"
        onClick={() => {}}
      ></button>
    </Styled.HeaderName>
    <Styled.HeaderTitle>Software &amp; User experience</Styled.HeaderTitle>
  </Styled.Header>
);

export default Header;
