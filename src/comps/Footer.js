import React from 'react';
import { scrollToTop } from '../util/Scroller';
import * as Styled from './footer.styles';
import { Button } from './buttons.styles';

const Footer = () => (
  <Styled.Footer>
    <Button id="arrriba" type="button" className="btn btn-special" onClick={() => scrollToTop()}>Back to top</Button>
  </Styled.Footer>
)

export default Footer;