import React from "react";
import ImageTwo from "../../images/app7-02.png";
import BackImg from "../../images/app7-wave-bg.png";
import Marginer from "../../containers/Marginer";
import styled from "styled-components";
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

function SectonTwo() {
  return (
    <ESectionContainer name="how-to-use">
      <ImageNumber>
        <img src={ImageTwo} alt="02" />
      </ImageNumber>
      <Marginer direction="vertical" margin={30} />
      <SectionTitle>See how the app works.</SectionTitle>
      <SectionTitle>it's simple and fun.</SectionTitle>
    </ESectionContainer>
  );
}

export default SectonTwo;
