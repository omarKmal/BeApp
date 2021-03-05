import React from "react";
import styled, { css, keyframes } from "styled-components";
import RunImage from "../../images/app7-slider-woman.png";
import NumImage from "../../images/app7-slider-011.png";
import Marginer from "../../containers/Marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deviceSize } from "../../containers/responsive";
import { SpanColor } from "../../containers/Features";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../Button/Button";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
  }
`;
const TopSectionContainer = styled.div`
  width: 50%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
    height: 500px;
  }
`;
const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const BoxContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackBox = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  background-color: #34ff2f;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 200px;
    width: 200px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 5;
  img:first-of-type {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
  }
  img:nth-of-type(2) {
    max-width: 80px;
    max-height: 100px;
    position: absolute;
    top: 25%;
    left: 14px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 50%;

  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
    justify-content: center;
    align-items: unset;
  }
`;
const Header = styled.h2`
  color: #fff;
  font-weight: 700;
  line-height: 1;
  font-size: 2.5rem;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
    width: 100%;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.laptop}px) {
    font-size: 30px;
  }
`;
const Title = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: #e1e1e1;
  text-align: right;
  width: 80%;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 12px;
    width: 100%;
    text-align: left;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.laptop}px) {
    font-size: 12px;
  }
`;
const ESpanColor = styled(SpanColor)`
  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 50%;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  margin-bottom: 15px;
  font-size: 25px;
  filter: contrast(60%);
  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: contrast(90%);
  }
`;
const move = keyframes`
   from {
    width: 100px
    height: 100px;
  }
   to {
    width: 500px;
    height: 500px;
    opacity: 0;
  }

`;
const anim = css`
  background-color: transparent;
  z-index: 0;
  border: 1px solid #fff;
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 50%;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100px;
    height: 100px;
  }
`;
const FirstMoveCircle = styled.div`
  ${anim};
  animation: ${move} 2s ease-in-out infinite;
`;
const SecondMoveCircle = styled.div`
  ${anim};
  animation: ${move} 2.5s ease-in-out infinite;
`;
const ThirdMoveCircle = styled.div`
  ${anim};
  animation: ${move} 3s ease-in-out infinite;
`;

function Hero({ isTablet }) {
  return (
    <>
      <HeroContainer name="home">
        <TopSectionContainer>
          <SectionWrapper>
            <BoxContainer>
              <FirstMoveCircle></FirstMoveCircle>
              <SecondMoveCircle></SecondMoveCircle>
              <ThirdMoveCircle></ThirdMoveCircle>
              <FirstMoveCircle></FirstMoveCircle>
              <BackBox></BackBox>
            </BoxContainer>
            <ImageContainer>
              <img src={RunImage} alt="run" />
              <img src={NumImage} alt="1" />
            </ImageContainer>
          </SectionWrapper>
        </TopSectionContainer>

        <ContentContainer>
          <Header>Your personal </Header>
          <Header>trainer anywhere</Header>
          <Header>you want</Header>
          <Marginer direction="vertical" margin={isTablet ? 15 : 25} />
          <Title>
            Lorem <ESpanColor>ipsum dolor sit,</ESpanColor> amet consectetur
            adipisicing elit. Hic quod
          </Title>
          <Marginer direction="vertical" margin={isTablet ? 15 : 25} />
          <ButtonContainer>
            <Button size="10px 35px 10px" color="#000" background="#fff">
              Take a tour
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </HeroContainer>
      <IconContainer>
        <Icon icon={faFacebook} />
        <Icon icon={faTwitter} />
        <Icon icon={faInstagram} />
      </IconContainer>
    </>
  );
}

export default Hero;
