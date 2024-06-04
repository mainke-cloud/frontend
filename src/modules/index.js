import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateTab, closeTab, reorderTab } from '../redux/actions/tabAction';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import './tab.css';
import { useState, useEffect } from 'react';
import Dashboard from './dashboard';
import Keamanan from './keamanan';
import {
  listData1,
  listData2,
  listData3,
} from '../@crema/services/dummy/sidebar/listDataDisposisi';
import Bantuan from './bantuan';
import Profile from './profile';
import Folder from './folder';
import BelumPilih from './suratKeluar/BelumPilih';

const Page = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  // const [updatedItems, setUpdatedItems] = useState([]);
  // const data = { listData1, listData2, listData3 };

  // useEffect(() => {
  //   const savedTabs = localStorage.getItem('tabs');
  //   let items = [];
  //   if (savedTabs) {
  //     items = JSON.parse(savedTabs);
  //   } else {
  //     items = tabs;
  //   }
  //   const updatedItems = items.map((item) => {
  //     switch (item.id) {
  //       case 'dashboard':
  //         item.content = <Dashboard />;
  //         break;
  //       case 'keamanan':
  //         item.content = <Keamanan />;
  //         break;
  //       case 'faq':
  //         item.content = <Bantuan />;
  //         break;
  //       case 'profile':
  //         item.content = <Profile />;
  //         break;
  //       case 'folder':
  //         item.content = <Folder />;
  //         break;
  //       default:
  //         item.content = <BelumPilih />;
  //         break;
  //     }
  //     return item;
  //   });
  //   setUpdatedItems(updatedItems);
  // }, [tabs]);

  const handleTabClose = (tabId) => {
    dispatch(closeTab(tabId, tabs));
  };

  const handleTabReorder = (tabId, fromIndex, toIndex) => {
    dispatch(reorderTab(tabId, fromIndex, toIndex, tabs));
  };

  const handleTabActive = (tabId) => {
    // const updatedTabs = tabs.map((tab) => ({
    //   ...tab,
    //   active: tab.id === tabId,
    // }));
    // localStorage.setItem('tabs', JSON.stringify(tabs));
    // setUpdatedItems(tabs);
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
