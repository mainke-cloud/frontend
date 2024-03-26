import React from 'react';
import google from '../../assets/icon/home.png';
import Folder from '@crema/components/Tabs/Folder';
import Keamanan from '@crema/components/Tabs/Keamanan';
import Bantuan from '@crema/components/Tabs/Bantuan';
import Profile from '@crema/components/Tabs/Profile';
import Todo from '@crema/components/Tabs/Todo/Todo';
import DetailTodo from '@crema/components/Tabs/Todo/DetailTodo';
import Disposisi from '@crema/components/Tabs/Disposisi/Disposisi';
import inboxIcon from '../../assets/icon/inbox.svg';
import disposisiIcon from '../../assets/icon/disposisi.svg';
import mailIcon from '../../assets/icon/mail.svg';
import folderIcon from '../../assets/icon/folder.svg';
import archiveIcon from '../../assets/icon/archive.svg';
import settingsIcon from '../../assets/icon/settings.svg';
import scanIcon from '../../assets/icon/scan.svg';
import securityIcon from '../../assets/icon/shield.svg';
import helpIcon from '../../assets/icon/help-circle.svg';
import profileIcon from '../../assets/icon/user.svg';
import logoutIcon from '../../assets/icon/log-out.svg';
export const addTab = (id, state, type) => {
  return (dispatch) => {
    const isExistingTab = state.some(
      (tab) =>
        tab.id.toLowerCase() === type.toLowerCase() || tab.title === type,
    );
    if (!isExistingTab) {
      const activeTab = state.find((tab) => tab.active);
      if (activeTab) {
        activeTab.active = false;
      }
      let tabs = {
        id: type.toLowerCase(),
        title: type,
        favicon:
          type === 'Folder'
            ? folderIcon
            : type === 'Keamanan'
            ? securityIcon
            : type === 'FAQ'
            ? helpIcon
            : type === 'Profile'
            ? profileIcon
            : type === 'Disposisi'
            ? disposisiIcon
            : type === 'Todo'
            ? disposisiIcon
            : '',
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
          ) : type === 'Add_Sekretaris' ?(
            <Add_Sekretaris />
          ) : type === 'Add_Delegasi' ? (
            <Add_Delegasi />
          ) : (
            ''
          ),
        active: true,
      };
      dispatch({ type: 'ADD_TAB', payload: tabs });
    } else {
      const isExistingTab = state.some(
        (tab) => tab.id.toLowerCase() === type.toLowerCase(),
      );
      if (isExistingTab) {
        dispatch(activateTab(type.toLowerCase(), state));
      } else {
        return;
      }
    }
  };
};

export const childTab = (id, state, type, data) => {
  return (dispatch) => {
    console.log(state);
    const isExistingTab = state.find(
      (tab) =>
        (tab.id === 'todo' && type === 'Todo') ||
        (tab.id === 'disposisi' && type === 'Disposisi'),
    );
    if (isExistingTab) {
      console.log('masuk if');
      const updateTab = {
        ...isExistingTab,
        id: `${isExistingTab.id}${id}`,
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
      if (type === 'Todo') {
        console.log('masuk if');
        dispatch({ type: 'UPDATE_TAB_TODO', payload: updateTab });
      } else if (type === 'Disposisi') {
        console.log('masuk else if');
        dispatch({ type: 'UPDATE_TAB_DISPOSISI', payload: updateTab });
      }
    } else {
      console.log(type.toLowerCase());
      const exChildTab = state.find(
        (tab) => tab.id === `${type.toLowerCase()}${id}`,
      );
      console.log(exChildTab);
      if (exChildTab) {
        console.log('masuk if');
        dispatch(activateTab(`${type.toLowerCase()}${id}`, state));
      } else {
        console.log('masuk else');
        const activeTab = state.find((tab) => tab.active);

        if (activeTab) {
          activeTab.active = false;
        }
        let tabs = {
          id: `${type.toLowerCase()}${id}`,
          title: type,
          favicon: inboxIcon,
          content:
            type === 'Todo' ? <DetailTodo props={data} /> : <div>{id}</div>,
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
