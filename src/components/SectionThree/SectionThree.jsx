import React from "react";
import ImgThree from "../../images/app7-03.png";
import BackImg from "../../images/app7-wave-bg.png";
import {
  SectionContainer,
  ImageNumber,
  SectionTitle,
} from "../../containers/Features";
import styled from "styled-components";
import Marginer from "../../containers/Marginer";

const ESectionContainer = styled(SectionContainer)`
  background: url(${BackImg}) no-repeat;
  background-position: center;
  background-size: cover;
`;

function SectionThree() {
  return (
    <ESectionContainer name="features">
      <ImageNumber>
        <img src={ImgThree} alt="num-two" />
      </ImageNumber>
      <Marginer direction="vertical" margin={30} />
      <SectionTitle>Tons of useful features</SectionTitle>
      <SectionTitle> you’ll love</SectionTitle>
    </ESectionContainer>
  );
}

export default SectionThree;
