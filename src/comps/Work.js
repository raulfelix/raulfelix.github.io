import React from 'react';

const Work = ({ onClose }) => (
  <div className="modal">
    <button type="button" className="btn-close" onClick={onClose}>
      <span className="one"></span>
      <span className="two"></span>
    </button>
    <div className="modal__content">
      <div className="work__item">
        <a className="work__item-title" href="http://kalendar.s3-website-ap-southeast-2.amazonaws.com" target="_blank" rel="noopener noreferrer">Kalendar</a>
        <p>An implementation of a calendar client built for an enterprise client. This version has been completely rewritten to integrate with Google calendar.</p>
        <ul className="pill_group">
          <li className="pill">React</li>
          <li className="pill">Mobx</li>
          <li className="pill">Styled components</li>
        </ul>
      </div>
      <div className="work__item">
        <a className="work__item-title" href="http://lifewithoutandy.com" target="_blank" rel="noopener noreferrer">Life Without Andy</a>
        <p>A collaboration piece built for photographers of pop-culture content who have built up a truly global fan base over the years.</p>
        <ul className="pill_group">
          <li className="pill">Wordpress</li>
          <li className="pill">Javascript</li>
          <li className="pill">CSS</li>
        </ul>
      </div>

      <div className="work__item">
        <a className="work__item-title" href="http://lifewithoutandy.com" target="_blank" rel="noopener noreferrer">Energy Made Easy</a>
        <p>A collaboration piece for the Australian Energy Regulator. Rebuilding the process for people to easily compare their electricity and gas plans to find better rates and deals.</p>
        <ul className="pill_group">
          <li className="pill">React</li>
          <li className="pill">UX</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Work;