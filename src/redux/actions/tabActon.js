import React from 'react';
import fb from '../../assets/icon/home.png';
import google from '../../assets/icon/home.png';
import Folder from '@crema/components/Tabs/Folder';
import Keamanan from '@crema/components/Tabs/Keamanan';
import Bantuan from '@crema/components/Tabs/Bantuan';
import Profile from '@crema/components/Tabs/Profile';
import Todo from '@crema/components/Tabs/Todo/Todo';
import DetailTodo from '@crema/components/Tabs/Todo/DetailTodo';
import Disposisi from '@crema/components/Tabs/Disposisi/Disposisi';

export const addTab = (id, state, type) => {
  return (dispatch) => {
    // Cari tab dengan ID yang sama
    const isExistingTab = state.some(
      (tab) => tab.id.toLowerCase() === type.toLowerCase(),
    );

    if (!isExistingTab) {
      // Tentukan tab yang akan dijadikan aktif
      const activeTab = state.find((tab) => tab.active);

      // Jika ada tab yang sedang aktif, nonaktifkan tab tersebut
      if (activeTab) {
        activeTab.active = false;
      }

      console.log(Folder);
      // Tambahkan tab baru dengan status aktif
      let tabs = {
        id:
          type === 'Folder'
            ? 'folder'
            : type === 'Keamanan'
            ? 'keamanan'
            : type === 'FAQ'
            ? 'faq'
            : type === 'Profile'
            ? 'profile'
            : type === 'Todo'
            ? 'todo'
            : type === 'Disposisi'
            ? 'disposisi'
            : '',
        title: type,
        favicon: state.length % 2 ? fb : google,
        content:
          type === 'Folder' ? (
            <Folder />
          ) : type === 'Keamanan' ? (
            <Keamanan />
          ) : type === 'FAQ' ? (
            <Bantuan />
          ) : type === 'Profile' ? (
            <Profile />
          ) : type === 'Disposisi' ? (
            <Disposisi />
          ) : type === 'Todo' ? (
            <Todo />
          ) : (
            ''
          ),
        active: true,
      };

      dispatch({ type: 'ADD_TAB', payload: tabs });
    } else {
      // Jika tab sudah ada, aktifkan tab tersebut
      console.log('elese bang');
      dispatch(activateTab(type.toLowerCase(), state));
    }
  };
};

export const childTab = (id, state, type, data) => {
  return (dispatch) => {
    console.log(state);
    const isExistingTab = state.find(
      (tab) => tab.id === 'todo' && type === "Todo" || tab.id === 'disposisi' && type === "Disposisi"  ,
    );
    if (isExistingTab) {
      const updateTab = {
        ...isExistingTab,
        id: ` ${isExistingTab.id}${id}`,
        content:
          type === 'Todo' ? (
            <DetailTodo props={data} />
          ) : type === 'Disposisi' ? (
            <div>oke</div>
          ) : (
            ''
          ),
      };
      console.log(data);
      console.log(updateTab);
      // if (type === 'Todo') {
      //   dispatch({ type: 'UPDATE_TAB_TODO', payload: updateTab });
      // } else if (type === 'Disposisi') {
        dispatch({ type: 'UPDATE_TAB', payload: updateTab });
      // }
    } else {
      const exChildTab = state.find((tab) => tab.id === id);
      if (exChildTab) {
        dispatch(activateTab(id, state));
      } else {
        const activeTab = state.find((tab) => tab.active);

        if (activeTab) {
          activeTab.active = false;
        }
        let tabs = {
          id: ` todo${id}`,
          title: type,
          favicon: state.length % 2 ? fb : google,
          content: type === 'Todo' ? <DetailTodo props={data} /> : '',
          active: true,
        };
        dispatch({ type: 'ADD_TAB', payload: tabs });
      }
    }
  };
};

export const activateTab = (tabId, state) => {
  return (dispatch) => {
    const updatedTabs = state.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    dispatch({ type: 'ACTIVE_TAB', payload: updatedTabs });
  };
};

export const closeTab = (tabId, state) => {
  return (dispatch) => {
    if (tabId === 'dashboard') {
      return;
    }

    const tabIndex = state.findIndex(
      (tab) => tab.id.toString() === tabId.toString(),
    );
    let newActiveTabIndex;

    if (tabIndex > 0) {
      newActiveTabIndex = tabIndex - 1;
    } else if (tabIndex === 0 && state.length > 1) {
      newActiveTabIndex = 1;
    } else {
      newActiveTabIndex = 'dashboard';
    }

    const tabs = state.filter((tab) => tab.id !== tabId);
    dispatch({ type: 'CLOSE_TAB', payload: tabs });

    // Aktifkan tab yang sesuai dengan indeks yang ditentukan
    const newActiveTabId =
      newActiveTabIndex !== 'dashboard'
        ? tabs[newActiveTabIndex].id
        : 'dashboard';
    dispatch(activateTab(newActiveTabId, tabs));
  };
};

export const closeAllTabs = () => {
  return (dispatch) => {
    const tabs = [];
    dispatch({ type: 'CLOSE_ALL_TABS', payload: tabs });
  };
};

export const reorderTab = (tabId, fromIndex, toIndex, state) => {
  console.log(state);
  return (dispatch) => {
    let movedTab = state[fromIndex];
    let remainingTabs = state.filter((_, index) => index !== fromIndex);
    remainingTabs.splice(toIndex, 0, movedTab);
    dispatch({ type: 'REORDER_TAB', payload: remainingTabs });
  };
};
