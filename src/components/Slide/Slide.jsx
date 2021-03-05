import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { Link } from "react-scroll";

const SlideContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #969696;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? "0" : "-50%")};
  top: 0;
  transition: right 0.5s ease-in-out;
  z-index: 998;
`;
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 40px;
  top: 25px;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
`;
const SlideContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 50%;
  position: relative;
  width: 100%;
  height: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

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
  /* margin-left: 2em; */
  margin-top: 2em;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #34ff2f;
  }
`;

function Slide({ isOpen, handleOpen }) {
  return (
    <SlideContainer isOpen={isOpen}>
      <Icon icon={faTimes} onClick={handleOpen} />
      <SlideContent>
        <Button background="#000" size="10px 35px 10px">
          Buy Now
        </Button>
        <LinkContainer>
          <LinkStyle
            onClick={handleOpen}
            to="how-to-use"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
          >
            <Number>01</Number> How it Works
          </LinkStyle>
          <LinkStyle
            onClick={handleOpen}
            to="features"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
          >
            <Number>02</Number> Features
          </LinkStyle>
          <LinkStyle
            onClick={handleOpen}
            to="faq"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
          >
            <Number>03</Number> FAQ
          </LinkStyle>
          <LinkStyle
            onClick={handleOpen}
            to="testimonials"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
          >
            <Number>04</Number> Testimonials
          </LinkStyle>
          <LinkStyle
            onClick={handleOpen}
            to="get-app"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
          >
            <Number>05</Number> Get App
          </LinkStyle>
        </LinkContainer>
      </SlideContent>
    </SlideContainer>
  );
}

export default Slide;
