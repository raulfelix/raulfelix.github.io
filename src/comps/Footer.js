import React from 'react';
import { scrollToTop } from '../util/Scroller';

const Footer = () => (
  <footer>
    <button id="arrriba" type="button" className="btn btn-special" onClick={() => scrollToTop()}>Back up</button>
  </footer>
)

export default Footer;