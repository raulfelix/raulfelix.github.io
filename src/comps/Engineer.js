import React from 'react';

import compass from '../images/compass.svg';
import { Row } from './Global.styles';
import { Engineering, TextType, UlType } from './engineer.styles';
import { Header50 } from './typography.styles';
import NextButton from './NextButton';

const Engineer = () => (
  <Engineering id="engineer">
    <Row>
        <div className="section-header-inline mb-4">
          <img className="section-icon" src={compass} alt="Pair of compasses"/>
          <Header50 className="section-title">Engineering</Header50>
        </div>
        <TextType>Great things happen at the point where design and engineering meet...</TextType>
        <TextType>I understand how to work within a design team to craft cutting edge experiences and translate that into high quality front end code.
          I am a creative coder with strong collaboration skills which allows me to help product deliver interesting solutions to design problems.</TextType>
        <TextType className="mb-8"> I can also work across the development stack having experience with <em>Node.js</em> and <em>Ruby</em>.</TextType>
        <TextType>Here are some things I have engineered:</TextType>
        <UlType>
          <li>Living design systems</li>
          <li>Micro frontends</li>
          <li>Accessible applications</li>
          <li>Responsive web apps</li>
          <li>Mobile applications</li>
        </UlType>
    </Row>
        <NextButton target="work" />
  </Engineering>
)

export default Engineer