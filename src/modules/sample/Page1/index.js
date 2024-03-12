// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Box } from '@mui/material';
// import { Tabs } from '@sinm/react-chrome-tabs';
// // import '@sinm/react-chrome-tabs/css/chrome-tabs.css';
// // import '@sinm/react-chrome-tabs/css/chrome-tabs-dark-theme.css';
// import '../Page2/cobain.css';
// import Button from '@mui/material/Button';
// import fb from '../../../assets/icon/home.png';
// import google from '../../../assets/icon/home.png';
// import AppDashboard from '@crema/components/AppDashboard';
// import { addTab } from '../../../redux/actions/userAction';

// let id = 1;

// const Page2 = () => {
//   const dispatch = useDispatch();
//   const tabs = useSelector((state) => state.tab.tabs);
//   useEffect(() => {
//     dispatch(addTab());
//     dispatch()
//   }, [dispatch]);
//   // const [tabs, setTabs] = useState([
//   //   {
//   //     id: 'dashboard',
//   //     favicon: fb,
//   //     title: 'Dashboard',
//   //     active: true,
//   //     content: <div>Dashboard content</div>,
//   //   },
//   // ]);

//   // const addTab = () => {
//   //   id++;
//   //   const newTabId = `tab${id}`;
//   //   setTabs([
//   //     ...tabs,
//   //     {
//   //       id: newTabId,
//   //       title: `New Tab ${id}`,
//   //       favicon: tabs.length % 2 ? fb : google,
//   //       content: <div>New Tab {id} content</div>,
//   //     },
//   //   ]);
//   // };

//   // const active = (id) => {
//   //   setTabs(tabs.map((tab) => ({ ...tab, active: id === tab.id })));
//   // };

//   // const close = (ids) => {
//   //   setTabs(tabs.filter((tab) => tab.id !== ids));
//   //   id--;
//   // };

//   // const reorder = (tabId, fromIndex, toIndex) => {
//   //   const beforeTab = tabs.find((tab) => tab.id === tabId);
//   //   console.log(beforeTab);
//   //   if (!beforeTab) {
//   //     return;
//   //   }
//   //   let newTabs = tabs.filter((tab) => tab.id !== tabId);
//   //   newTabs.splice(toIndex, 0, beforeTab);
//   //   setTabs(newTabs);
//   // };

//   // const closeAll = () => {
//   //   setTabs([]);
//   // };

//   return (
//     <>
//       <Box>
//         <Tabs
//           darkMode={false}
//           onTabClose={close}
//           onTabReorder={reorder}
//           onTabActive={active}
//           tabs={tabs}
//         ></Tabs>
//       </Box>
//       <Box sx={{ p: 2, gap: 2 }}>
//         <Box>
//           <Button onClick={addTab} variant='contained'>
//             Add Tab
//           </Button>
//           <AppDashboard onAddTab={addTab}/>
//           <Button onClick={closeAll} variant='contained'>
//             Close All
//           </Button>
//         </Box>
//         <Box>{tabs.find((tab) => tab.active)?.content}</Box>
//       </Box>
//     </>
//   );
// };

// export default Page2;

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
      <Box>
        <Tabs
          darkMode={false}
          onTabClose={handleTabClose}
          onTabReorder={handleTabReorder}
          onTabActive={handleTabActive}
          tabs={tabs}
        />
      </Box>
      <Box sx={{ p: 2, gap: 2 }}>
        {/* <Box>
          <Button onClick={handleAddTab} variant='contained'>
            Add Tab
          </Button>
          <AppDashboard onAddTab={handleAddTab} />
          <Button onClick={handleCloseAllTabs} variant='contained'>
            Close All
          </Button>
        </Box> */}
        <Box>{tabs.find((tab) => tab.active)?.content}</Box>
      </Box>
    </>
  );
};

export default Page1;
