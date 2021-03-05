import React from "react";
import styled from "styled-components";
import Dots from "../../images/app7-section3-dot3.png";
import ImgThree from "../../images/app7-section3-image3.png";
import { InnerPageWrapper } from "../../containers/PageContainer";
import { GlobalHeader, GlobalParg } from "../../containers/Features";
import Marginer from "../../containers/Marginer";
import { deviceSize } from "../../containers/responsive";

const ThreeContainer = styled.div`
  background: url(${Dots}) no-repeat;
  background-position: left;
  object-fit: cover;
  width: 100%;
  /* transform: translate(0, -150px); */
  @media screen and (max-width: ${deviceSize.laptop}px) {
    background-position: top left;
  }
`;
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 400px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    order: 1;
    width: 350px;
    height: 500px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 35%;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    order: 2;
    width: 100%;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Circle = styled.div`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: #34ff2f;
  display: inline-block;
`;
const Title = styled.h4`
  color: #fff;
  font-weight: 600;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 13px;
  }
`;

function ActivityThree() {
  return (
    <ThreeContainer>
      <InnerPageWrapper maxWidth="80%">
        <ContainerWrapper>
          <ImgContainer>
            <img src={ImgThree} alt="phone" />
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
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </GlobalParg>
            <Marginer margin={10} direction="vertical" />
            <GlobalParg>
              Phasellus elementum nibh a lectus volutpat cursus. Etiam ante
              urna, tincidunt nec pretium eu, posuere a nulla. Donec sed
              efficitur augue.
            </GlobalParg>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <TitleContainer>
              <Circle />
              <Marginer
                direction="horizontal"
                margin={deviceSize.laptop ? "10px" : "25px"}
              />
              <Title>Samet et kamon viavandel quanto pertrole</Title>
            </TitleContainer>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <TitleContainer>
              <Circle />
              <Marginer
                direction="horizontal"
                margin={deviceSize.laptop ? "10px" : "25px"}
              />
              <Title>Lorem ipsum kamon viavandel quanta</Title>
            </TitleContainer>
            <Marginer
              margin={deviceSize.laptop ? "10px" : "25px"}
              direction="vertical"
            />
            <TitleContainer>
              <Circle />
              <Marginer
                margin={deviceSize.laptop ? "10px" : "25px"}
                direction="horizontal"
              />
              <Title>Quanta es omnia</Title>
            </TitleContainer>
          </ContentContainer>
        </ContainerWrapper>
      </InnerPageWrapper>
    </ThreeContainer>
  );
}

export default ActivityThree;

// Samet et kamon viavandel quanto pertrole
