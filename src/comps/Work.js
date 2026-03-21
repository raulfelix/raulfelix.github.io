import React from "react";

import { Row } from "./Global.styles";
import { Header50 } from "./typography.styles";
import { Spacing48 } from "./spacing.styles";
import {
  WorkText,
  WorkLink,
  PillGroup,
  Pill,
  WorkSubText,
} from "./work.styles";
import NextButton from "./shared/next-button";

const Work = () => (
  <div id="work">
    <Row>
      <Header50>Selected Projects & Ventures</Header50>
      <Spacing48>
        <WorkLink
          href="https://www.energymadeeasy.gov.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Energy Made Easy
        </WorkLink>
        <WorkText>
          Australian Energy Regulator's comparison platform - rebuilt to help
          consumers easily compare electricity and gas plans across the country.
        </WorkText>
        <PillGroup>
          <Pill>React, UX, Accessibility</Pill>
        </PillGroup>
      </Spacing48>
      <Spacing48>
        <WorkLink as="span">Xpede / XpedePay</WorkLink>
        <WorkText>
          End-to-end contractor payments platform - full-stack development from
          product conception through to implementation. Currently in
          pre-release.
        </WorkText>
        <PillGroup>
          <Pill>React, Node.js, Postgres</Pill>
        </PillGroup>
      </Spacing48>

      <Spacing48>
        <WorkLink
          href="https://www.milkchoc.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milk Chocolate
        </WorkLink>
        <WorkText>
          Advisory role on the foundational layer of their property platform -
          tech stack decisions, architecture, and early full-time team hiring.
        </WorkText>
        <PillGroup>
          <Pill>Express, MongoDb, Typegoose</Pill>
        </PillGroup>
      </Spacing48>
    </Row>
    <NextButton target="about" />
  </div>
);

export default Work;
