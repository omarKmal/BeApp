import React from "react";
import Marginer from "../../containers/Marginer";
import Image from "../../images/app7-run.gif";
import {
  AboutConatainer,
  ImgSide,
  ContentSide,
  Title,
  Content,
  Circle,
} from "../../containers/Features";

function About() {
  return (
    <AboutConatainer>
      <ImgSide>
        <img src={Image} alt="run" />
      </ImgSide>
      <ContentSide>
        <Circle />
        <Marginer direction="vetical" margin={40} />
        <Title>Just run, walk or do your</Title>
        <Title>sport activities.</Title>
        <Content>
          Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Content>
      </ContentSide>
    </AboutConatainer>
  );
}

export default About;
