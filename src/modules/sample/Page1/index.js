import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTab,
  activateTab,
  closeTab,
  closeAllTabs,
  reorderTab,
} from '../../../redux/actions/tabActon';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import Button from '@mui/material/Button';
import AppDashboard from '@crema/components/AppDashboard';
import '../Page2/cobain.css';

const Page1 = () => {
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

  const handleAddTab = () => {
    dispatch(addTab(id, tabs));
  };

  const handleCloseAllTabs = () => {
    dispatch(closeAllTabs());
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
        <Box>{tabs.find((tab) => tab.active)?.content}</Box>
      </Box>
    </>
  );
};

export default Page1;
