import React from 'react';

import { Row } from './Global.styles';
import NextButton from './NextButton';
import { Text } from './typography.styles';
import * as Styled from './intro.styles';

const Intro = () => {
  return (
    <Styled.Intro>
        <Row>
            <Text>I specialise in <em>Front end</em> architecture and development. I spend most of my time coding but like to get involved in user experience 
              and accessibility.</Text>
            <Text>I like technical challenges and solving problems with the best tech <em>Javascript</em> has to offer. Things like <em>React</em>, <em>GraphQL</em>, <em>Apollo Client</em> and <em>Styled Components</em>.</Text>
        </Row>
        <NextButton target="current" />
    </Styled.Intro>
  )
}

export default Intro;