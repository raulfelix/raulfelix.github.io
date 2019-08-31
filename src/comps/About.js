import React from 'react';
import brain from '../images/brain.svg';

const About = () => (
  <section className="content-row centered yellow" id="about">
    <div className="f-grid f-row">
      <div className="f-1">
        <div className="section-header section-header-inline mb-4">
          <img className="section-icon section-icon--brain" src={brain} alt="The brain" />
          <h2 className="section-title">A bit about me</h2>
        </div>
      </div>
    </div>
    <div className="f-grid f-row">
      <div className="f-1-2 bp-m-1 bp-s-1">
        <p>Football is my first love.</p>
        <p>I speak Spanish and Italian.</p>
        <p>I am a good listener.</p>
        <p>Peroni is my beer.</p>
      </div>
      <div className="f-1-2 bp-m-1 bp-s-1">
      <p>You didn't find my work history here because I think knowing who you are dealing with is important… but check out <a href="https://www.linkedin.com/in/ra%C3%BAl-felix-carrizo-70716439/" target="_blank" rel="noopener noreferrer">linkedIn</a> if you do want to see it.</p>
      </div>
    </div>
  </section>
)

export default About;