import React from "react";
import Marginer from "../../containers/Marginer";

import Image from "../../images/app7-phone.gif";
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
  align-items: flex-end;
  justify-content: flex-end;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* width: 70%; */
  @media screen and (max-width: ${deviceSize.tablet}px) {
    order: 2;
    width: 100%;
    justify-content: flex-start;
  }
`;

function Mobile() {
  return (
    <EAboutContainer>
      <ContentSide>
        <ContentWrapper>
          <Circle />
          <Marginer direction="vetical" margin={40} />

          <Title>Just run, walk or do your </Title>
          <Title>sport activities.</Title>
          <Content>
            <SpanColor>Aliquip ex ea commodo</SpanColor> consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla.
          </Content>
        </ContentWrapper>
      </ContentSide>
      <ImgSide>
        <img src={Image} alt="phone" />
      </ImgSide>
    </EAboutContainer>
  );
}

export default Mobile;
