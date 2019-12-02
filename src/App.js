import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import TabbedPanel from "./components/TabbedPannel";

const Page = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  font-size: 1.5em;
  margin: 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  overflow: visible;
  height: auto;
`;

const App = () => (
  <Page>
    <Header />
    <Body>
      <TabbedPanel />
    </Body>
  </Page>
);

export default App;
