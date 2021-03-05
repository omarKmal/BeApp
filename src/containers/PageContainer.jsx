import styled from "styled-components";
import React from "react";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PageContainer({ children }) {
  return <PageWrapper>{children}</PageWrapper>;
}

export const InnerPageWrapper = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
`;

export default PageContainer;
