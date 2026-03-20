import React from "react";

import * as Styled from "./header-intro.styles";
// import audio from '../audio/raul_es.mp3';
// let track = new Audio(audio);
// track.playbackRate = .75;

const Header = () => (
  <Styled.Header>
    <Styled.HeaderRow>
      <Styled.HeaderName>
        Raúl Felix Carrizo <span>👋🏼</span>
        {/* <button
        id="pronounce"
        type="button"
        title="Hear pronunciation"
        className="vocalize icon-volume-high"
        onClick={() => {}}
      ></button> */}
      </Styled.HeaderName>
      <Styled.HeaderTitle>
        Head of Engineering{" · "}Technical Architecture{" · "}Product
      </Styled.HeaderTitle>
    </Styled.HeaderRow>
  </Styled.Header>
);

export default Header;
