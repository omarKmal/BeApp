import React from "react";
import styled from "styled-components";
import ImageOne from "../../images/app7-section3-image1.png";
import { InnerPageWrapper } from "../../containers/PageContainer";
import DotImgOne from "../../images/app7-section3-dot3.png";
import { GlobalHeader, GlobalParg } from "../../containers/Features";
import Marginer from "../../containers/Marginer";
import { deviceSize } from "../../containers/responsive";

const FirstContainer = styled.div`
  background: url(${DotImgOne}) no-repeat;
  background-position: left;
  object-fit: cover;
  width: 100%;
  position: relative;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    background-position: left top;
  }
`;
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: ${deviceSize.laptop}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ImageSide = styled.div`
  width: 350px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    left: 100px;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 350px;
    height: 500px;
  }
`;

const ContentSide = styled.div`
  width: 380px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    height: auto;
    padding-bottom: 40px;
    width: 100%;
  }
`;
const ProgressContainer = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background-color: #8d8d8d;
  overflow: hidden;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }
`;
const Progress = styled.div`
  width: ${({ prog }) => (prog ? prog : "0%")};
  height: 100%;
  border-radius: 3px;
  background-color: #34ff2f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProgressContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px;
`;
const ProgressTitle = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 13px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 9px;
  }
`;

function Activity() {
  return (
    <FirstContainer>
      <InnerPageWrapper maxWidth="85%">
        <ContainerWrapper>
          <ImageSide>
            <img src={ImageOne} alt="phone" />
          </ImageSide>
          <Marginer
            margin={deviceSize.laptop ? "10px" : "25px"}
            direction="vertical"
          />
          <ContentSide>
            <GlobalHeader>
              Just run, walk or do your sport activities.
            </GlobalHeader>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <GlobalParg>
              Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation omnia des.
            </GlobalParg>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <ProgressContainer>
              <Progress prog="85%">
                <ProgressContent>
                  <ProgressTitle>Lorem Ipsum</ProgressTitle>
                  <ProgressTitle>85%</ProgressTitle>
                </ProgressContent>
              </Progress>
            </ProgressContainer>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <ProgressContainer>
              <Progress prog="55%">
                <ProgressContent>
                  <ProgressTitle>Lorem Ipsum</ProgressTitle>
                  <ProgressTitle>55%</ProgressTitle>
                </ProgressContent>
              </Progress>
            </ProgressContainer>
          </ContentSide>
        </ContainerWrapper>
      </InnerPageWrapper>
    </FirstContainer>
  );
}

export default Activity;
