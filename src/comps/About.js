import React from 'react';
import brain from '../images/brain.svg';
import { Row } from './Global.styles';
import { Header50, Link, Text } from './typography.styles';
import * as Styled from './about.styles';

const About = () => (
  <Styled.About id="about">
    <Row>
        <div className="section-header section-header-inline mb-4">
          <img className="section-icon section-icon--brain" src={brain} alt="The brain" />
          <Header50>And a little about me</Header50>
          </div>
        <Text>Love Football. Futbal. Calcio.</Text>
        <Text>I speak Español and Italiano.</Text>
        <Text>Super good listener.</Text>
        <Text>If we have to have beer, a Peroni please 🇮🇹</Text>
        <Text>All the <Link href="https://www.linkedin.com/in/ra%C3%BAl-felix-carrizo-70716439/" target="_blank" rel="noopener noreferrer">LinkedIn</Link> stuff</Text>
        </Row>
  </Styled.About>
)

export default About;