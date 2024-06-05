import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateTab, closeTab, reorderTab } from '../redux/actions/tabAction';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import './tab.css';

const Page = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);

  React.useEffect(() => {
    const tabsFromLocalStorage = localStorage.getItem('tabs');
    if (tabsFromLocalStorage) {
      const parsedTabs = JSON.parse(tabsFromLocalStorage);
      console.log(parsedTabs);
    } else {
      localStorage.setItem('tabs', JSON.stringify([]));
    }
  }, []);

  const handleTabClose = (tabId) => {
    dispatch(closeTab(tabId, tabs));
  };

  const handleTabReorder = (tabId, fromIndex, toIndex) => {
    dispatch(reorderTab(tabId, fromIndex, toIndex, tabs));
  };

  const handleTabActive = (tabId) => {
    dispatch(activateTab(tabId, tabs));
  };
  return (
    <>
      <Box sx={{ pl: 2 }}>
        <Tabs
          darkMode={false}
          onTabClose={handleTabClose}
          onTabReorder={handleTabReorder}
          onTabActive={handleTabActive}
          tabs={tabs}
        />
        <Box sx={{ paddingTop: '42px' }}>
          {tabs.find((tab) => tab.active)?.content}
        </Box>
      </Box>
    </>
  );
};

export default Page;
