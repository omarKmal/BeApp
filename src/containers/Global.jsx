import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html , body {
    background-color : #999999;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
