import * as React from "react";
import { Default as DataTable } from "./DataTable";

import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  },
});

export const Default = (props: Partial<TabListProps>) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState("tab1");

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
      {selectedTab === "tab1" && <DataTable/>}
      {selectedTab === "tab2" && <DataTable/>}
      {selectedTab === "tab3" && <DataTable/>}
      {selectedTab === "tab4" && <DataTable/>}
    </div>
  );
};