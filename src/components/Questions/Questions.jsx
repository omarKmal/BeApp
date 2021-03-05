import React, { useState } from "react";
import styled from "styled-components";
import { InnerPageWrapper } from "../../containers/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Marginer from "../../containers/Marginer";
import { GlobalParg } from "../../containers/Features";
import { deviceSize } from "../../containers/responsive";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 500px;
  max-width: 100%;
  @media screen and (max-width: ${deviceSize.laptop}px) {
    flex-wrap: nowrap;
    max-height: 100%;
  }
`;
const SideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  flex-direction: column;
  border-left: 1px solid rgba(0, 0, 0, 0.25);
  @media screen and (max-width: ${deviceSize.laptop}px) {
    width: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    border: 0;
  }
`;
const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 40px;
  color: #444;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 10px 10px;
  }
`;
const QuestionTitle = styled.h4`
  color: ${({ isRead, id, currentId }) =>
    isRead ? id === currentId - 1 && "#34ff2f" : "#444"};
  font-weight: 700;
  display: flex;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 11px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const EContent = styled(GlobalParg)`
  padding-left: 80px;
  width: 90%;
  display: unset;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 9px;
    width: 100%;
    padding-left: 10px;
  }
`;

function Questions({ QuestionsData, lodaing }) {
  const [isRead, setIsRead] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleIcon = (index) => {
    if (index === currentId - 1 || !isRead) {
      return isPlus ? faMinus : faPlus;
    } else {
      return faPlus;
    }
  };

  const handleRead = (e) => {
    setCurrentId(e.currentTarget.id);
    setIsRead(!isRead);
  };
  const handlePlus = (e) => {
    setIsPlus(!isPlus);
    handleIcon();
    handleRead(e);
  };
  return (
    <InnerPageWrapper maxWidth="90%">
      <SectionContainer>
        {lodaing ? (
          "Lodaing..."
        ) : (
          <>
            {QuestionsData.map((item, index) => (
              <SideContainer key={index}>
                <QuestionContainer>
                  <QuestionTitle
                    id={index}
                    currentId={currentId}
                    isRead={isRead}
                  >
                    {item.id}{" "}
                    <Marginer
                      direction="horizontal"
                      margin={deviceSize.laptop ? "10px" : "25px"}
                    />
                    {item.question}
                  </QuestionTitle>
                  <Icon
                    id={item.id}
                    icon={handleIcon(index)}
                    onClick={handlePlus}
                  />
                </QuestionContainer>
                {isRead && index === currentId - 1 ? (
                  <EContent isRead={isRead}>{item.answer}</EContent>
                ) : null}
              </SideContainer>
            ))}
          </>
        )}
      </SectionContainer>
    </InnerPageWrapper>
  );
}

export default Questions;
