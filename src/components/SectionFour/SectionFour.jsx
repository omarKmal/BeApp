import React from "react";
import styled from "styled-components";
import BackImg from "../../images/app7-wave-bg.png";
import ImgFour from "../../images/app7-04.png";
import {
  SectionContainer,
  ImageNumber,
  SectionTitle,
} from "../../containers/Features";

const ESectionContainer = styled(SectionContainer)`
  background: url(${BackImg}) no-repeat;
  background-position: center;
  background-size: cover;
`;

function SectionFour() {
  return (
    <ESectionContainer name="faq">
      <ImageNumber>
        <img src={ImgFour} alt="num-four" />
      </ImageNumber>
      <SectionTitle>Frequently</SectionTitle>
      <SectionTitle>asked questions</SectionTitle>
    </ESectionContainer>
  );
}

export default SectionFour;
