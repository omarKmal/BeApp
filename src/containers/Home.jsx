import React, { useState, useEffect } from "react";
import { InnerPageWrapper } from "../containers/PageContainer";
import GlobalStyle from "../containers/Global";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Slide from "../components/Slide/Slide";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import SectonTwo from "../components/SectionTwo/SectonTwo";
import About from "../components/About/About";
import Marginer from "./Marginer";
import Mobile from "../components/Mobile/Mobile";
import MobileTwo from "../components/MobileTwo/MobileTwo";
import SectionThree from "../components/SectionThree/SectionThree";
import Activity from "../components/Activity/Activity";
import ActivityTwo from "../components/Activity/ActivityTwo";
import ActivityThree from "../components/Activity/ActivityThree";
import SectionFour from "../components/SectionFour/SectionFour";
import Questions from "../components/Questions/Questions";
import { Questions as QD } from "./Data";
import Testimonials from "../components/Testimonials/Testimonials";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";

function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lodaing, setLodaing] = useState(true);
  const [QuestionsData, setQuestionsData] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setQuestionsData(QD);
    setLodaing(false);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        let st = window.pageYOffset || window.scrollTop;
        if (st > lastScrollTop) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Slide
        isTablet={isTablet}
        isMobile={isMobile}
        handleOpen={handleOpen}
        isOpen={isOpen}
      />
      <Navbar
        isTablet={isTablet}
        isMobile={isMobile}
        isLaptop={isLaptop}
        isScroll={isScroll}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
      <InnerPageWrapper maxWidth="80%">
        <Hero isMobile={isMobile} isTablet={isTablet} />
      </InnerPageWrapper>
      <SectonTwo />
      <Marginer direction="vertical" margin={50} />
      <InnerPageWrapper maxWidth="80%">
        <About />
        <Marginer direction="vertical" margin={50} />
        <Mobile />
        <Marginer direction="vertical" margin={50} />
        <MobileTwo />
      </InnerPageWrapper>
      <Marginer direction="vertical" margin={50} />
      <SectionThree />
      <Marginer direction="vertical" margin={50} />
      <Activity />
      <ActivityTwo />
      <ActivityThree />
      <SectionFour />
      <Questions QuestionsData={QuestionsData} lodaing={lodaing} />
      <Marginer direction="vertical" margin={80} />
      <Testimonials />
      <Download isMobile={isMobile} />
      <Footer isLaptop={isLaptop} />
    </>
  );
}

export default Home;
