import React from 'react';

import { Row } from './Global.styles';
import { Header50, Link, Text } from './typography.styles';
import { Spacing48 } from './spacing.styles';
import { PillGroup, Pill } from './work.styles';
import NextButton from './NextButton';

const Work = () => (
  <div id="work">
    <Row>
     <Header50>Some work</Header50> 
      <Spacing48>
        <Link href="http://kalendar.s3-website-ap-southeast-2.amazonaws.com" target="_blank" rel="noopener noreferrer">Kalendar</Link>
        <Text>An implementation of a calendar client built for an enterprise client. This version has been completely rewritten to integrate with Google calendar.</Text>
        <PillGroup>
          <Pill>React, Mobx, Styled Components</Pill>
        </PillGroup>
      </Spacing48>
      <Spacing48 >
        <Link href="http://lifewithoutandy.com" target="_blank" rel="noopener noreferrer">Life Without Andy</Link>
        <Text>A collaboration piece built for pop-culture content creators who have built up a truly global fan base over the years.</Text>
        <PillGroup>
          <Pill className="pill">Wordpress, Javascript, CSS</Pill>
        </PillGroup>
      </Spacing48>

      <Spacing48 >
        <Link href="https://www.energymadeeasy.gov.au" target="_blank" rel="noopener noreferrer">Energy Made Easy</Link>
        <Text>Fair pricing from the Australian Energy Regulator. Rebuilding the process for people to easily compare their electricity and gas plans to find better rates and deals.</Text>
        <PillGroup>
          <Pill>React, UX</Pill>
        </PillGroup>
      </Spacing48>
    </Row>
    <NextButton target="about" />
  </div>
)

export default Work;