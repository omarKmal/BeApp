import React from "react";
import styled from "styled-components";
import BackImg from "../../images/app7-quotes.png";
import ImgNum from "../../images/app7-05.png";
import PersonImg from "../../images/app7-woman.png";
import { GlobalHeader, GlobalParg } from "../../containers/Features";
import Marginer from "../../containers/Marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { deviceSize } from "../../containers/responsive";

const TestimonisalContainer = styled.div`
  background-color: #2f2f2f;
  width: 100%;
  padding: 100px 50px;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    padding: 40px 15px;
  }
`;
const TWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  background: url(${BackImg}) no-repeat;
  max-width: 80%;
  margin: auto;
  background-position: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    background-size: 100%;
  }
`;
const ImgContainer = styled.div`
  width: 150px;
  height: 90px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const EGlobalHeader = styled(GlobalHeader)`
  font-size: 3em;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 2em;
  }
`;
const EGlobalHWrapper = styled(GlobalHeader)`
  width: 85%;
  text-align: center;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 1em;
    width: 100%;
  }
`;
const PersonBox = styled.div`
  width: 130px;
  height: 130px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #34ff2f;
  margin-right: 5px;
  font-size: 12px;
`;

function Testimonials() {
  return (
    <TestimonisalContainer name="testimonials">
      <TWrapper>
        <ImgContainer>
          <img src={ImgNum} alt="num-five" />
        </ImgContainer>
        <Marginer margin={30} direction="vertical" />
        <EGlobalHeader>Testimonials</EGlobalHeader>
        <Marginer margin={30} direction="vertical" />
        <EGlobalHWrapper>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </EGlobalHWrapper>
        <Marginer margin={30} direction="vertical" />

        <PersonBox>
          <img src={PersonImg} alt="woman" />
        </PersonBox>
        <Marginer margin={30} direction="vertical" />
        <GlobalParg>Alice Perkensteel</GlobalParg>
        <Marginer margin={30} direction="vertical" />
        <IconContainer>
          <Icon icon={faStar} />
          <Icon icon={faStar} />
          <Icon icon={faStar} />
          <Icon icon={faStar} />
          <Icon icon={faStar} />
        </IconContainer>
      </TWrapper>
    </TestimonisalContainer>
  );
}

export default Testimonials;
