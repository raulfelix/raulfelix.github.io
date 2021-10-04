import React from "react";

import { Header50, Link, Text } from "../typography.styles";
import NextButton from "../shared/next-button";
import inqLogo from "../../images/inquisitive_logo.svg";
import * as Styled from "./current.styles";

const Current = () => (
  <Styled.Current id="current">
    <Styled.CurrentRow>
      <Styled.CurrentCol>
        <Header50>Currently...</Header50>
        <Text>
          I’m working with{" "}
          <Link
            href="https://inquisitive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquisitive
          </Link>{" "}
          where we are building a platform to bring quality educational content
          to every person on Earth.
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
      </Styled.CurrentCol>
      <Styled.CurrentCol>
        <Styled.CurrentPreview>
          <Styled.PreviewFrame>
            <Styled.PreviewFrameHeader>
              <img src={inqLogo} alt="" />
            </Styled.PreviewFrameHeader>
            <Styled.PreviewFrameContent>
              <Styled.PreviewFrameRow>
                <Styled.PreviewFrameCard isHighlight />
                <Styled.PreviewFrameCard />
              </Styled.PreviewFrameRow>
              <Styled.PreviewFrameRowCutOff>
                <Styled.PreviewFrameCard />
                <Styled.PreviewFrameCard />
              </Styled.PreviewFrameRowCutOff>
            </Styled.PreviewFrameContent>
          </Styled.PreviewFrame>
        </Styled.CurrentPreview>
      </Styled.CurrentCol>
    </Styled.CurrentRow>
    <NextButton target="engineer" />
  </Styled.Current>
);

export default Current;
