import React from 'react';
import compass from '../images/compass.svg';

const Engineer = () => (
  <section className="content-row pink">
    <div className="f-grid f-row">
      <div className="f-1">
        <div className="section-header-inline mb-4">
          <img className="section-icon" src={compass} alt="Pair of compasses"/>
          <h2 className="section-title">Engineering</h2>
        </div>
        <p>Great things happen at the point where design and engineering meet...</p>
        <p>I understand how to work within a design team to craft cutting edge experiences and translate that into high quality front end code.
          I am a creative coder with strong collaboration skills which allows me to help product deliver interesting solutions to design problems.</p>
        <p className="mb-8"> I can also work across the development stack having experience with <em>Node.js</em> and <em>Ruby</em>.</p>
        <p>Here are some things I have engineered:</p>
        <ul>
          <li>Living design systems</li>
          <li>Micro frontends</li>
          <li>AAA compliant accessible apps</li>
          <li>Responsive web apps</li>
          <li>Mobile applications</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Engineer