import React from 'react';
import fb from '../../assets/icon/home.png';
import google from '../../assets/icon/home.png';
import Folder from '@crema/components/Tabs/Folder';
import Keamanan from '@crema/components/Tabs/Keamanan';
import Bantuan from '@crema/components/Tabs/Bantuan';
import Profile from '@crema/components/Tabs/Profile';

export const addTab = (id, state, type) => {
  return (dispatch) => {
    // Cari tab dengan ID yang sama
    const isExistingTab = state.some((tab) => tab.id === id);

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
        id: `tab${id + 1}`,
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
          ) : (
            ''
          ),
        active: true,
      };

      dispatch({ type: 'ADD_TAB', payload: tabs });
    } else {
      // Jika tab sudah ada, aktifkan tab tersebut
      dispatch(activateTab(id, state));
    }
  };
};

export const activateTab = (tabId, state) => {
  return (dispatch) => {
    const updatedTabs = state.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    console.log(updatedTabs);
    dispatch({ type: 'ACTIVE_TAB', payload: updatedTabs });
  };
};

export const closeTab = (tabId, state) => {
  return (dispatch) => {
    if (tabId === 'dashboard') {
      return;
    }
    const tabs = state.filter((tab) => tab.id !== tabId);
    dispatch({ type: 'CLOSE_TAB', payload: tabs });
    dispatch(activateTab('dashboard', tabs));
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
