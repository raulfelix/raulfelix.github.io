import React from "react";
import { Row } from "./Global.styles";
import { Header50, Text } from "./typography.styles";
import * as Styled from "./about.styles";

const About = () => (
  <Styled.About id="about">
    <Row>
      <Header50>Rapid Fire</Header50>
      <Text>The last book I read was 40,000 Weeks by Oliver Burkeman.</Text>
      <Text>We can chat in Spanish or Italian 🤌</Text>
      <Text>The machines are coming... 🤖</Text>
      <Text></Text>
    </Row>
  </Styled.About>
);

export default About;
