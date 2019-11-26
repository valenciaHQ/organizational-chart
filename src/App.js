import React from "react";
import styled from "styled-components";
import COLOR from "./constants/colors";

import EmployeesTable from "./components/EmployeesTable";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin: 0;
  height: 100vh;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 33px -9px rgba(0, 0, 0, 0.75);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  background-color: ${COLOR.BLUE_MARGERITE};
`;

const App = () => (
  <Page>
    <Header />
    <NavBar />
    <EmployeesTable />
  </Page>
);

export default App;
