import React from 'react';
import { scrollBodyTo } from '../util/Scroller';

const NextButton = ({target, color = '#fff'}) => (
  <div className="next" style={{textAlign: 'center'}}>
    <button
      type="button"
      className="btn-next hvr-wobble-vertical"
      style={{color}}
      onClick={() => scrollBodyTo(document.getElementById(target))}
      >
        <i className="icon-chevron-down" />
    </button>
  </div>
)

export default NextButton;