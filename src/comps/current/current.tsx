import React from "react";

import { Header50, Link, Text, Em } from "../typography.styles";
import NextButton from "../shared/next-button";
import inqLogo from "../../images/inquisitive_logo.svg";
import * as Styled from "./current.styles";

const Current = () => (
  <Styled.Current id="current">
    <Styled.CurrentRow>
      <Styled.CurrentCol>
        <Header50>Currently...</Header50>
        <Text>
          I’m <Em>Head of Engineering</Em> at{" "}
          <Link
            href="https://inquisitive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquisitive
          </Link>{" "}
          — an EdTech SaaS platform bringing quality educational content to K-6
          classrooms across Australia and the US.
        </Text>
        <Text>
          I like to collaborate and advise — to chat reach me on{" "}
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
