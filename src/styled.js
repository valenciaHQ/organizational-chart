import styled, { createGlobalStyle } from "styled-components";
import { ReactLogo } from "styled-icons/fa-brands/ReactLogo";
import { SearchAlt } from "styled-icons/boxicons-regular/SearchAlt";

import COLOR from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  body {
    font-family: 'Raleway', sans-serif;
    background-color: ${COLOR.LINK_WATER};
    margin:0; 
    padding:0;  
  }
`;

export const Logo = styled(ReactLogo)`
  padding: 10px;
  height: 50px;
  color: ${COLOR.WHITE};
`;

export const SearchIcon = styled(SearchAlt)`
  height: 20px;
  color: ${props => (props.color ? props.color : COLOR.WHITE)};
`;
