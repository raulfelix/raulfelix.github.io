import React from 'react';
import audio from '../audio/raul_es.mp3';

let track = new Audio(audio);
track.playbackRate = .75;

const Header = () => (
  <header>
    <div className="f-grid f-row">
      <div className="f-1">
        <h2 className="site-h1">Raúl Felix Carrizo <button id="pronounce" type="button" title="ra-ooh-l" className="vocalize icon-volume" onClick={() => track.play()}></button></h2>
        <h1 className="site-h2">Software Engineer</h1>
      </div>
    </div>
  </header>
)

export default Header;