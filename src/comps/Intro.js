import React from 'react';

import { Row } from './Global.styles';
import NextButton from './next-button';
import { Text, Em } from './typography.styles';
import * as Styled from './intro.styles';

const Intro = () => {
  return (
    <Styled.Intro>
        <Row>
            <Text>I specialise in <Em>Front end</Em> architecture and development. I spend most of my time coding but like to get involved in user experience 
              and accessibility.</Text>
            <Text>I like technical challenges and solving problems with the best tech <Em>Javascript</Em> has to offer. Things like <Em>React</Em>, <Em>GraphQL</Em>, <Em>Apollo Client</Em> and <Em>Styled Components</Em>.</Text>
        </Row>
        <NextButton target="current" />
    </Styled.Intro>
  )
}

export default Intro;