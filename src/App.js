import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import TabbedPanel from "./components/TabbedPannel";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

import { Page, Body } from "./styled";

export default () => {
  const loading = useSelector(
    state =>
      state.employees.loading ||
      Array.from(state.levels.data.values()).some(
        level => level.loadingManager || level.loadingEmployees
      )
  );

  const error = useSelector(
    state =>
      state.employees.error ||
      Array.from(state.levels.data.values()).some(level => level.error)
  );

  return (
    <Page>
      {loading && <Loading />}
      {error && <Alert message={"We are sorry, an error occurred"} />}
      <Header />
      <Body>
        <TabbedPanel />
      </Body>
    </Page>
  );
};
