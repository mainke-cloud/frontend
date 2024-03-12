import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  activateTab,
  closeTab,
  reorderTab,
} from '../../../redux/actions/tabActon';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import '../Page2/cobain.css';

const Page2 = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

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
      <Box>
        <Tabs
          darkMode={false}
          onTabClose={handleTabClose}
          onTabReorder={handleTabReorder}
          onTabActive={handleTabActive}
          tabs={tabs}
        />
      </Box>
      <Box>
        <Box>{tabs.find((tab) => tab.active)?.content}</Box>
      </Box>
    </>
  );
};

export default Page2;
