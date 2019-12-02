import React, { useState } from "react";

import EmployeesTable from "../EmployeesTable";
import SearchPanel from "../SearchPanel";
import { Wrapper, Tabbed, Tab, Content } from "./styled";

const tabs = [
  {
    label: "Dashboard",
    component: <EmployeesTable />
  },
  {
    label: "Database",
    component: <SearchPanel />
  }
];

export default () => {
  const [activeTab, setActiveTab] = useState(1);
  const showTab = i => setActiveTab(i);

  return (
    <Wrapper>
      <Tabbed>
        {tabs.map((tab, i) => (
          <Tab key={i} active={activeTab === i} onClick={() => showTab(i)}>
            {tab.label}
          </Tab>
        ))}
      </Tabbed>
      <Content>{tabs[activeTab].component}</Content>
    </Wrapper>
  );
};
