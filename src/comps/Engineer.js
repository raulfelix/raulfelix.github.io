import React from "react";

import { Row } from "./Global.styles";
import { Engineering, TextType, UlType } from "./engineer.styles";
import { Header50 } from "./typography.styles";

const Engineer = () => (
  <Engineering id="engineer">
    <Row>
      <Header50 className="section-title">Engineering</Header50>
      <TextType>
        Great things happen at the intersection of design, engineering, and
        leadership.
      </TextType>
      <TextType>
        I've scaled engineering organisations, shaped technical architecture,
        and introduced AI tooling across platforms — while staying hands-on
        enough to understand the craft and stay close to the teams doing the
        work.
      </TextType>
      <TextType>Some things I've built and led:</TextType>
      <UlType>
        <li>Engineering organisations from 4 → 15+ engineers</li>
        <li>Cross-functional delivery systems</li>
        <li>AI-powered platform features and tooling</li>
        <li>Scalable SaaS platforms on AWS and GCP</li>
        <li>Design systems and accessible front ends</li>
      </UlType>
      <TextType className="mb-8">
        My stack: <em>Node.js</em>, <em>React</em>, <em>Next.js</em>,{" "}
        <em>GraphQL</em>, <em>Postgres</em>, <em>AWS</em>, <em>GCP</em> and LLM
        integrations via <em>OpenAI</em> and <em>Claude</em>.
      </TextType>
    </Row>
  </Engineering>
);

export default Engineer;
