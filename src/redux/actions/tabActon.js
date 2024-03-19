import React from 'react';
import fb from '../../assets/icon/home.png';
import google from '../../assets/icon/home.png';
import Folder from '@crema/components/Tabs/Folder';
import Keamanan from '@crema/components/Tabs/Keamanan';
import Bantuan from '@crema/components/Tabs/Bantuan';
import Profile from '@crema/components/Tabs/Profile';
import Todo from '@crema/components/Tabs/Todo/Todo';
import DetailTodo from '@crema/components/Tabs/Todo/DetailTodo';

export const addTab = (id, state, type) => {
  return (dispatch) => {
    // Cari tab dengan ID yang sama
    const isExistingTab = state.some((tab) => tab.id === type);

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
        id: type,
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
      console.log("elese bang")
      dispatch(activateTab(type, state));
    }
  };
};

export const childTab = (id, state, type, data) => {
  return (dispatch) => {
    const isExistingTab = state.find((tab) => tab.id === type);
    if (isExistingTab) {
      const updateTab = {
        ...isExistingTab,
        id:id,
        content:
           type === 'Todo' ? (
            <DetailTodo props={data} />
          ) : (
            ''
          ),
      }
      console.log(updateTab);
      dispatch({ type: 'UPDATE_TAB', payload: updateTab });
    } else {
    const exChildTab = state.find((tab) => tab.id === id);
    if(exChildTab){
      dispatch(activateTab(id, state));
    }else{
      const activeTab = state.find((tab) => tab.active);

      if (activeTab) {
        activeTab.active = false;
      }
      let tabs = {
        id: id,
        title: type,
        favicon: state.length % 2 ? fb : google,
        content:
           type === 'Todo' ? (
            <DetailTodo props={data} />
          ) : (
            ''
          ),
        active: true,
      };
      dispatch({ type: 'ADD_TAB', payload: tabs });
    }
    }
  }
}

export const activateTab = (tabId, state) => {
  return (dispatch) => {
    const updatedTabs = state.map((tab) => ({
      ...tab,
      active: tab.id.toString() === tabId.toString() ,
    }));
    dispatch({ type: 'ACTIVE_TAB', payload: updatedTabs });
  };
};

export const closeTab = (tabId, state) => {
  return (dispatch) => {
    if (tabId === 'dashboard') {
      return;
    }
    const tabs = state.filter((tab) => tab.id.toString() !== tabId.toString());
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
