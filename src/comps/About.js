import React from 'react';
import brain from '../images/brain.svg';

const About = () => (
  <section className="content-row centered yellow">
    <div className="f-grid f-row">
      <div className="f-1">
        <div className="section-header">
          <img className="section-icon" src={brain} alt="The brain" />
          <h2 className="section-title">A few things about me</h2>
        </div>
        <p>Football is my first love.</p>
        <p>I speak Spanish and Italian.</p>
        <p>I am a good listener... talk to me.</p>
        <p>Peroni is my beer.</p>
        <p>Instead of a list of places I worked at I think knowing who you are dealing with is more important… Check out <a href="https://www.linkedin.com/in/ra%C3%BAl-felix-carrizo-70716439/" target="_blank" rel="noopener noreferrer">linkedIn</a> if you do want to see my professional history.</p>
      </div>
    </div>
  </section>
)

export default About;