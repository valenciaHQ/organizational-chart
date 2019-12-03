import styled, { createGlobalStyle } from "styled-components";
import { ReactLogo } from "styled-icons/fa-brands/ReactLogo";
import { SearchAlt } from "styled-icons/boxicons-regular/SearchAlt";
import { Close } from "styled-icons/evil/Close";

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

export const Page = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  font-size: 1.5em;
  margin: 0;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  overflow: visible;
  height: auto;
`;

export const Logo = styled(ReactLogo)`
  padding: 10px;
  height: 50px;
  color: ${COLOR.WHITE};
`;

export const SearchIcon = styled(SearchAlt)`
  height: 20px;
  color: ${props => (props.color ? props.color : COLOR.WHITE)};
  :hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Close)`
  height: 10px;
  color: ${props => (props.color ? props.color : COLOR.WHITE)};
  :hover {
    cursor: pointer;
  }
`;
