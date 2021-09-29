import React from 'react';

import * as Styled from './Header.styles';
import audio from '../audio/raul_es.mp3';

let track = new Audio(audio);
track.playbackRate = .75;

const Header = () => (
  <Styled.Header>
    <div className="f-grid f-row">
      <div className="f-1">
        <Styled.HeaderName>Raúl <button id="pronounce" type="button" title="Hear pronunciation" className="vocalize icon-volume-high" onClick={() => track.play()}></button></Styled.HeaderName>
        <Styled.HeaderTitle>Software &amp; User experience</Styled.HeaderTitle>
      </div>
    </div>
  </Styled.Header>
)

export default Header;