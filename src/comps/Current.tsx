import React from "react";

import { Row } from "./Global.styles";
import NextButton from "./next-button";
import { Header50, Link, Text } from "./typography.styles";
import * as Styled from "./current.styles";

const Current = () => (
  <Styled.Current id="current">
    <Row>
      <Header50>Currently...</Header50>
      <Text>
        I am working with{" "}
        <Link
          href="https://www.inquisitive.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inquisitive
        </Link>{" "}
        where we are building a platform to bring quality educational content to
        every person on Earth.
      </Text>
      <Text>
        I like to collaborate in my spare time, to chat you can reach me via{" "}
        <Link
          href="https://www.linkedin.com/in/ra%C3%BAl-felix-carrizo-70716439/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Text>
    </Row>
    <NextButton target="engineer" />
  </Styled.Current>
);

export default Current;
