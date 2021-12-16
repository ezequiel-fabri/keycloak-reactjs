import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./tabs.css"

const TabHeader = styled(TabList)`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const TabItem = styled(Tab)`
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

export {
  TabHeader,
  TabItem,
  Tabs,
  TabPanel
}