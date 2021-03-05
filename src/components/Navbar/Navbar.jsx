import React from "react";
import styled from "styled-components";
import LogoBrand from "../../images/app7_logo.png";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const NavbarContainer = styled.div`
  background-color: #999999;
  height: 60px;
  width: ${({ isScroll }) => (isScroll ? "100%" : "100%")};
  padding: 0 10%;

  position: ${({ isScroll }) => (isScroll ? "fixed" : "unset")};
  top: ${({ isScroll }) => (isScroll ? "0px" : "-50px")};

  transition: all 0.7s ease-in-out;
  left: 0;
  right: 0;

  z-index: ${({ isScroll }) => (isScroll ? "888" : "0")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ isScroll }) =>
    isScroll ? " 0px 6px 9px -3px #838383" : "unset"};
`;
// const NavbarWrapper = styled.div`
//   display: flex;
//   max-width: 100%;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   transition: all 0.5s ease-in-out;
// `;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 23px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .active {
    color: #34ff2f;
  }
`;
const Number = styled.span`
  color: #000;
  font-size: 15px;
  font-weight: 700;
`;
const LinkStyle = styled(Link)`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #34ff2f;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 30px;
  cursor: pointer;
`;
const TopIconContainer = styled.div`
  bottom: ${({ isScroll }) => (isScroll ? "20px" : "-100px")};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  background-color: #2f2f2f;
  border-radius: 5px;
  color: #fff;
  width: 50px;
  height: 50px;
  transition: all 0.5s ease-in-out;
`;
const TopIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #34ff2f;
  }
`;

function Navbar({ isScroll, isTablet, handleOpen }) {
  return (
    <>
      <NavbarContainer isScroll={isScroll}>
        <Logo>
          <Link to="/">
            <img src={LogoBrand} alt="logo-brand" />
          </Link>
        </Logo>
        {isTablet && <Icon icon={faBars} onClick={handleOpen} />}
        {!isTablet && (
          <LinksContainer>
            <LinkStyle
              to="how-to-use"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={1000}
            >
              <Number>02 </Number>How it Works
            </LinkStyle>
            <LinkStyle
              to="features"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={1000}
            >
              <Number>03 </Number>Features
            </LinkStyle>
            <LinkStyle
              to="faq"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={1000}
            >
              <Number>04 </Number>FAQ
            </LinkStyle>
            <LinkStyle
              to="testimonials"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={1000}
            >
              <Number>05 </Number>Testimonials
            </LinkStyle>
            <LinkStyle
              to="get-app"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={1000}
            >
              <Number>06 </Number>Get App
            </LinkStyle>
          </LinksContainer>
        )}
        {!isTablet && (
          <Button color="#fff" size="10px 35px 10px" background="#000">
            Buy now
          </Button>
        )}
      </NavbarContainer>
      <TopIconContainer isScroll={isScroll}>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          duration={1000}
          to="home"
        >
          <TopIcon icon={faArrowUp} />
        </Link>
      </TopIconContainer>
    </>
  );
}

export default Navbar;
