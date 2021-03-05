import React from "react";
import Image from "../../images/app7-analyze.gif";
import Marginer from "../../containers/Marginer";

import {
  AboutConatainer,
  ImgSide,
  ContentSide,
  Title,
  Content,
  Circle,
  SpanColor,
} from "../../containers/Features";
import styled from "styled-components";
import { deviceSize } from "../../containers/responsive";

const EAboutContainer = styled(AboutConatainer)`
  align-items: center;
`;
const EContentSide = styled(ContentSide)`
  width: 50%;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
  }
`;

function MobileTwo() {
  return (
    <EAboutContainer>
      <ImgSide>
        <img src={Image} alt="girl" />
      </ImgSide>
      <EContentSide>
        <Circle />
        <Marginer direction="vetical" margin={40} />

        <Title>Just run, walk or do your</Title>
        <Title>sport activities.</Title>
        <Content>
          Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla.<SpanColor> Learn more… </SpanColor>
        </Content>
      </EContentSide>
    </EAboutContainer>
  );
}

export default MobileTwo;
