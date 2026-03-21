import React from "react";

import { Row } from "./Global.styles";
import { Text } from "./typography.styles";
import * as Styled from "./intro.styles";

const Intro = () => {
  return (
    <Styled.Intro>
      <Row>
        <Text>
          I operate at the intersection of technical architecture, product
          strategy, and org design - partnering with founders to translate
          business goals into engineering roadmaps, while coaching teams to
          deliver with autonomy and accountability.
        </Text>
        <Text>
          My background spans EdTech, FinTech, Logistics, and Enterprise Banking
          - building across the full stack from individual contributor through
          to engineering leadership. Hands-on enough to stay close to the craft;
          experienced enough to step back and design for scale.
        </Text>
      </Row>
    </Styled.Intro>
  );
};

export default Intro;
