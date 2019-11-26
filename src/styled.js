import styled, { createGlobalStyle } from "styled-components";
import COLOR from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  body {
    font-family: 'Roboto', sans-serif;
    margin:0; 
    padding:0;  
  }
`;
