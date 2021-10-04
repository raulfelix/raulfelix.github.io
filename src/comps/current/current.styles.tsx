import styled from "styled-components";

import { Row } from "../Global.styles";
import { rem } from "../utils.styles";

export const Current = styled.div`
  background-color: #f9f0ff;
`;

export const CurrentRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CurrentCol = styled.div`
  width: 100%;
  @media (min-width: 968px) {
    width: 40%;
    &:first-child {
      padding-right: ${rem(60)};
      width: 60%;
    }
  }
`;

export const CurrentPreview = styled.div`
  background-color: #722ed1;
  border: 3px solid #000;
  border-radius: ${rem(16)} 0 0 0;
  max-width: 560px;
  margin: auto;
  padding-top: ${rem(24)};
  padding-left: ${rem(24)};
`;

export const PreviewFrame = styled.div`
  background-color: #ffffff;
  border-radius: ${rem(8)} 0 0 0;
`;

export const PreviewFrameHeader = styled.div`
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  padding-left: ${rem(32)};
  height: ${rem(80)};

  img {
    height: ${rem(30)};
  }
`;

export const PreviewFrameContent = styled.div`
  padding: ${rem(24)} 0 0 ${rem(32)};
`;

export const PreviewFrameRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${rem(16)};
`;

type PreviewCardFrameProps = {
  isHighlight?: boolean;
};
export const PreviewFrameCard = styled.div<PreviewCardFrameProps>`
  height: ${rem(74)};

  &:before {
    content: "";
    background-color: #f3f2f2;
    border-radius: ${rem(8)};
    display: block;
    height: 100%;
  }

  &:first-child {
    padding-right: ${rem(12)};
    width: 60%;
  }

  &:last-child {
    padding-left: ${rem(12)};
    width: 40%;
    &:before {
      border-radius: ${rem(8)} 0 0 ${rem(8)};
    }
  }

  ${({ isHighlight }) =>
    isHighlight &&
    `
    &:before {
      background-color: #D3ADF7;
    }
  `}
`;

export const PreviewFrameRowCutOff = styled(PreviewFrameRow)`
  margin-bottom: 0;
  ${PreviewFrameCard} {
    height: ${rem(40)};

    &:first-child:before {
      border-radius: ${rem(8)} ${rem(8)} 0 0;
    }

    &:last-child:before {
      border-radius: ${rem(8)} 0 0 0;
    }
  }
`;

export const purple1 = "#F9F0FF";
export const purple2 = "#EFDBFF";
export const purple3 = "#D3ADF7";
export const purple5 = "#9254DE";
export const purple6 = "#722ED1";
export const purple7 = "#531DAB";
export const purple8 = "#391085";
export const purple9 = "#22075E";
export const purple10 = "#120338";
