import React from 'react';
import { scrollBodyTo } from '../util/Scroller';

import * as Styled from './next-button.styles';

const NextButton = ({target, color = '#000'}) => (
  <div className="next" style={{textAlign: 'center'}}>
    <Styled.NextButton
      type="button"
      className="btn-next hvr-wobble-vertical"
      style={{color}}
      onClick={() => scrollBodyTo(document.getElementById(target))}
      >
        <i className="icon-chevron-down" />
    </Styled.NextButton>
  </div>
)

export default NextButton;