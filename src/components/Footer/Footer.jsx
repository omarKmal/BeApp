import React from "react";
import styled from "styled-components";
import { GlobalHeader } from "../../containers/Features";
import Marginer from "../../containers/Marginer";
import { deviceSize } from "../../containers/responsive";

const MainColorContainer = styled.div`
  background-color: #2f2f2f;
  width: 100%;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    flex-direction: column;
  }
`;

const FooterSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Links = styled.span`
  color: #a1bfbf;
  text-align: left;
`;
const BottomFooter = styled.div`
  border-top: 1px solid #a1bfbf;
  width: 80%;
  margin: auto;
  padding: 20px 20px;
  display: flex;
  font-size: 14px;
  justify-content: flex-start;
  align-items: center;
`;
const Inc = styled.span`
  color: #34ff2f;
`;

function Footer({ isLaptop }) {
  return (
    <MainColorContainer>
      <Marginer direction="vertical" margin={80} />

      <MainContainer>
        <FooterSide>
          <GlobalHeader>Localization</GlobalHeader>
          <Marginer direction="vertica" margin={30} />
          <Links>Envato</Links>
          <Links>Level 13, 2 Elizabeth</Links>
          <Links>Victoria 3000</Links>
          <Links>Australia</Links>
        </FooterSide>

        <Marginer
          direction={isLaptop ? "vertical" : "horizontal"}
          margin={isLaptop ? "20px" : "60px"}
        />
        <FooterSide>
          <GlobalHeader>Useful links</GlobalHeader>
          <Marginer direction="vertica" margin={30} />
          <Links>Lorem ipsum</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>Dolor mit samet</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>Poren de vilen</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>Quanta es omnia</Links>
        </FooterSide>

        <Marginer
          direction={isLaptop ? "vertical" : "horizontal"}
          margin={isLaptop ? "20px" : "60px"}
        />
        <FooterSide>
          <Marginer direction="vertical" margin={isLaptop ? "20px" : "68px"} />{" "}
          <Links>Dolor mit samet .</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>Poren de vilen</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>Quanta es omnia .</Links>
          <Marginer direction="vertica" margin={10} />
        </FooterSide>
        <Marginer
          direction={isLaptop ? "vertical" : "horizontal"}
          margin={isLaptop ? "20px" : "60px"}
        />
        <FooterSide>
          <GlobalHeader>Contact with us</GlobalHeader>
          <Marginer direction="vertica" margin={30} />
          <Links>Nullam viverra consectetuer</Links>
          <Links>quisque cursus et, porttitor risus</Links>
          <Marginer direction="vertica" margin={10} />
          <Links>+61 (0) 3 8376 6284</Links>
          <Links>noreply@envato.com</Links>
        </FooterSide>
      </MainContainer>
      <Marginer direction="vertical" margin={isLaptop ? "20px" : "80px"} />
      <BottomFooter>
        <Links>
          &copy; 2020 BeApp7 - Created By <Inc>Omar Kamal</Inc>. All Right
          Reserved
        </Links>
      </BottomFooter>
    </MainColorContainer>
  );
}

export default Footer;
