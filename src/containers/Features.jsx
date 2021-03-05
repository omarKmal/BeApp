import styled from "styled-components";
import { deviceSize } from "./responsive";

const AboutConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 500px; */
  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
  }
`;
const ImgSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    height: 320px;
    width: 320px;
  }
  @media screen and (max-width: ${deviceSize.tablet}px) {
    order: 1;
    width: auto;
    height: auto;
  }
`;
const ContentSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 300px;
  }
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: auto;
    height: auto;
    margin-bottom: 40px;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  color: #fff;
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    font-size: 25px;
  }
  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 20px;
  }
`;
const Content = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 1.8;
  width: 100%;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    font-size: 14px;
  }
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #34ff2f;
`;
const SpanColor = styled.span`
  color: #000;
  font-size: 17px;
  line-height: 1.8;
  width: 60%;
  text-align: right;
`;
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  object-fit: cover;
  padding-right: 15px;
  padding-left: 15px;
`;
const ImageNumber = styled.div`
  width: 140px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 46px;
  font-weight: 700;
  line-height: 52px;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 35px;
    text-align: center;
    line-height: 35px;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;
const GlobalHeader = styled.h3`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 18px;
  }
`;
const GlobalParg = styled.p`
  color: #fff;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 12px;
  }
`;

export {
  GlobalHeader,
  GlobalParg,
  SectionContainer,
  ImageNumber,
  SectionTitle,
  AboutConatainer,
  ImgSide,
  ContentSide,
  Title,
  Content,
  Circle,
  SpanColor,
};
