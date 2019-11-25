import React from "react";
import styled from "styled-components";

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
  background-color: black;
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  background-color: red;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 10%;
  background-color: black;
`;

const App = () => (
  <Page>
    <NavBar />
    <EmployeesTable />
    <Footer />
  </Page>
);

export default App;
