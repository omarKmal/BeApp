import React from "react";
import DotTwo from "../../images/app7-section3-dot2.png";
import ImgTwo from "../../images/app7-section3-image2.png";
import { GlobalHeader, GlobalParg } from "../../containers/Features";

import styled from "styled-components";
import { InnerPageWrapper } from "../../containers/PageContainer";
import Marginer from "../../containers/Marginer";
import { deviceSize } from "../../containers/responsive";
const SecondContainer = styled.div`
  background: url(${DotTwo}) no-repeat;
  background-position: right center;
  width: 100%;
  object-fit: cover;
  transform: translate(0, -150px);
  margin-bottom: -150px;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    transform: translate(0, 0);
    background-position: top center;
    margin-bottom: 0;
  }
`;
const WrapperContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 400px;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    order: 1;
    width: 350px;
    height: 500px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  /* justify-content: flex-end;
  align-items: center; */
  flex-direction: column;
  width: 35%;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    order: 2;
    width: 100%;
    margin-bottom: 40px;
  }
`;

function ActivityTwo() {
  return (
    <SecondContainer>
      <InnerPageWrapper maxWidth="80%">
        <WrapperContainer>
          <ImgContainer>
            <img src={ImgTwo} alt="mobile" />
          </ImgContainer>
          <ContentContainer>
            <GlobalHeader>
              Just run, walk or do your sport activities.
            </GlobalHeader>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <GlobalParg>
              Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla.
            </GlobalParg>
          </ContentContainer>
        </WrapperContainer>
      </InnerPageWrapper>
    </SecondContainer>
  );
}

export default ActivityTwo;
