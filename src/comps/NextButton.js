import React from 'react';
import { scrollBodyTo } from '../util/Scroller';

import iconDropDown from '../images/icon_dropdown.svg';

import * as Styled from './next-button.styles';

const NextButton = ({target, color = '#000'}) => (
  <div className="next" style={{textAlign: 'center'}}>
    <Styled.NextButton
      type="button"
      className="hvr-wobble-vertical"
      style={{color}}
      onClick={() => scrollBodyTo(document.getElementById(target))}
      >
        <img src={iconDropDown} alt="" />
    </Styled.NextButton>
  </div>
)

export default NextButton;