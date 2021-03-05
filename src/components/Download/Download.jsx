import React from "react";
import styled from "styled-components";
import { GlobalHeader } from "../../containers/Features";
import Marginer from "../../containers/Marginer";
import ImgNum from "../../images/app7-06.png";
import BackImg from "../../images/app7-bottom-bg-2.png";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import BrandName from "../../images/app7_logo-footer.png";
import { Link } from "react-router-dom";
import { deviceSize } from "../../containers/responsive";

const MainColorContainer = styled.div`
  background-color: #2f2f2f;
`;

const DownloadContainer = styled.div`
  width: 100%;
  background: url(${BackImg}) no-repeat;
  background-position: bottom;
  object-fit: cover;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    background-size: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 100px 50px 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    padding: 40px 15px;
  }
`;
const ImgContainer = styled.div`
  width: 140px;
  height: 90px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const EGlobalHeader = styled(GlobalHeader)`
  font-size: 3em;
  width: 60%;
  line-height: 1.2;
  text-align: center;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 1.5em;
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: #000;
`;
const AboutApp = styled.div`
  color: #a1bfbf;
  width: 60%;
  text-align: center;
  line-height: 1.8;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 100%;
  }
`;
const BrandContainer = styled.div`
  width: 225px;
  height: 50px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const SochialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SochialButton = styled(Link)`
  background-color: #787878;
  text-decoration: none;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SochialIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 22px;
`;

function Download({ isMobile }) {
  return (
    <MainColorContainer name="get-app">
      <DownloadContainer>
        <Wrapper>
          <ImgContainer>
            <img src={ImgNum} alt="num-six" />
          </ImgContainer>
          <Marginer direction="vertical" margin={40} />
          <EGlobalHeader>
            Download, install and start your training today With BeApp
          </EGlobalHeader>
          <Marginer direction="vertical" margin={60} />
          <ButtonContainer>
            <Button background="#34ff2f" size="10px 40px 10px" color="#000">
              <Icon icon={faApple} /> App Store
            </Button>
            <Marginer
              direction={isMobile ? "vertical" : "horizontal"}
              margin={20}
            />
            <Button background="#34ff2f" size="10px 40px 10px" color="#000">
              <Icon icon={faGooglePlay} /> Google Play
            </Button>
          </ButtonContainer>
          <Marginer direction="vertical" margin={60} />

          <AboutApp>
            Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla.
          </AboutApp>
          <Marginer direction="vertical" margin={150} />
          <BrandContainer>
            <img src={BrandName} alt="brand-footer" />
          </BrandContainer>
          <Marginer direction="vertical" margin={60} />
          <AboutApp>
            Nullam viverra consectetuer quisque cursus et, porttitor risus.
            <br></br> +61 (0) 3 8376 6284 noreply@envato.com
          </AboutApp>
          <Marginer direction="vertical" margin={60} />
          <SochialContainer>
            <SochialButton to="/">
              <SochialIcon icon={faFacebook} />
            </SochialButton>
            <Marginer direction="horizontal" margin={20} />
            <SochialButton to="/">
              <SochialIcon icon={faTwitter} />
            </SochialButton>
            <Marginer direction="horizontal" margin={20} />
            <SochialButton to="/">
              <SochialIcon icon={faYoutube} />
            </SochialButton>
          </SochialContainer>
        </Wrapper>
      </DownloadContainer>
    </MainColorContainer>
  );
}

export default Download;
