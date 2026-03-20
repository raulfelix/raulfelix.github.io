import React from 'react';

import { Row } from './Global.styles';
import NextButton from './shared/next-button';
import { Text, Em } from './typography.styles';
import * as Styled from './intro.styles';

const Intro = () => {
  return (
    <Styled.Intro>
        <Row>
            <Text>I lead engineering organisations through scale — currently <Em>Head of Engineering</Em> at Inquisitive, where I've grown the team from 4 to 15+ engineers across multiple squads.</Text>
            <Text>I operate at the intersection of technical architecture, product strategy, and org design — partnering with founders to translate business goals into engineering roadmaps, while coaching teams to deliver with autonomy and accountability.</Text>
        </Row>
        <NextButton target="current" />
    </Styled.Intro>
  )
}

export default Intro;