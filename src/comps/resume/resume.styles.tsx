import styled from "styled-components";
import { rem } from "../utils.styles";
import { text } from "../colour.styles";

export const ResumeWrap = styled.div`
  background-color: #f9f9f7;
  min-height: 100vh;
  padding: ${rem(80)} ${rem(24)} ${rem(120)};
`;

export const ResumeInner = styled.div`
  max-width: ${rem(780)};
  margin: 0 auto;
`;

export const ResumeName = styled.h1`
  font-family: "Circular-Std-Black", sans-serif;
  font-size: ${rem(44)};
  line-height: 1.1;
  color: ${text};
  margin-bottom: ${rem(8)};
`;

export const ResumeMeta = styled.p`
  font-size: ${rem(16)};
  color: #666;
  margin-bottom: ${rem(48)};
  line-height: 1.6;
`;

export const ResumeSection = styled.section`
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(48)};
  border-bottom: 1px solid #e0ddd8;

  &:last-child {
    border-bottom: none;
  }
`;

export const ResumeSectionTitle = styled.h2`
  font-family: "Circular-Std", sans-serif;
  font-size: ${rem(13)};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5d5b5b;
  margin-bottom: ${rem(24)};
`;

export const ResumeRole = styled.div`
  margin-bottom: ${rem(32)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResumeRoleTitle = styled.h3`
  font-family: "Circular-Std-Bold", sans-serif;
  font-size: ${rem(20)};
  color: ${text};
  margin-bottom: ${rem(12)};
`;

export const ResumeRoleMeta = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: ${rem(14)};
  color: #606060;
  margin-bottom: ${rem(12)};
  line-height: 1.5;
`;

export const ResumeBody = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: ${rem(18)};
  line-height: 1.7;
  color: ${text};
  margin-bottom: ${rem(12)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResumeBullets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ResumeBullet = styled.li`
  font-family: "DM Sans", sans-serif;
  font-size: ${rem(16)};
  line-height: 1.7;
  color: ${text};
  padding-left: ${rem(16)};
  margin-bottom: ${rem(6)};
  position: relative;

  &::before {
    content: "–";
    position: absolute;
    left: 0;
    color: #bbb;
  }
`;

export const ResumeSkillGroup = styled.div`
  margin-bottom: ${rem(20)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResumeSkillTitle = styled.h4`
  font-family: "Circular-Std", sans-serif;
  font-size: ${rem(18)};
  color: ${text};
  margin-bottom: ${rem(6)};
`;
