import React from 'react';
import Folder from 'modules/folder';
import Keamanan from 'modules/keamanan';
import Bantuan from 'modules/bantuan';
import Profile from 'modules/profile';
import Todo from 'modules/disposisi/todo/Todo';
import DetailTodo from 'modules/disposisi/todo/DetailTodo';
import NoDisposisi from 'modules/disposisi/respons/Default';
import Disposisi from 'modules/disposisi/respons/DetailSurat';
import inboxIcon from '../../assets/icon/inbox.svg';
import disposisiIcon from '../../assets/icon/disposisi.svg';
import folderIcon from '../../assets/icon/folder.svg';
import securityIcon from '../../assets/icon/shield.svg';
import helpIcon from '../../assets/icon/help-circle.svg';
import profileIcon from '../../assets/icon/user.svg';
import Add_Delegasi from 'modules/dashboard/Add_Delegasi';
import Add_Sekretaris from 'modules/dashboard/Add_Sekretaris';
import BuatSurat from 'modules/disposisi/respons/BuatDisposisi';
import BelumPilih from 'modules/suratKeluar/perluTindakLanjut/BelumPilih';
import PerluTindakLanjut from 'modules/suratKeluar/perluTindakLanjut/PerluTindakLanjut';
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
            : type === 'Perlu Tindak Lanjut'
            ? inboxIcon
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
            <NoDisposisi />
          ) : type === 'BuatDisposisi' ? (
            <BuatSurat />
          ) : type === 'Todo' ? (
            <Todo />
          ) : type === 'Add_Sekretaris' ? (
            <Add_Sekretaris />
          ) : type === 'Add_Delegasi' ? (
            <Add_Delegasi />
          ) : type === 'Perlu Tindak Lanjut' ? (
            <BelumPilih />
          ) : type === 'Lacak Proses' ? (
            <BelumPilih />
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
    const isExistingTab = state.find(
      (tab) =>
        (tab.id === 'todo' && type === 'Todo') ||
        (tab.id === 'disposisi' && type === 'Disposisi') ||
        (tab.id === 'perlu tindak lanjut' && type === 'Perlu Tindak Lanjut'),
    );
    if (isExistingTab) {
      const updateTab = {
        ...isExistingTab,
        id: `${isExistingTab.id}${id}`,
        content:
          type === 'Todo' ? (
            <DetailTodo props={data} />
          ) : type === 'Disposisi' ? (
            <Disposisi props={data} />
          ) : type === 'Perlu Tindak Lanjut' ? (
            <PerluTindakLanjut props={data} />
          ) : (
            ''
          ),
      };
      dispatch({ type: 'UPDATE_TAB_DISPOSISI', payload: updateTab });
    } else {
      const exChildTab = state.find(
        (tab) => tab.id === `${type.toLowerCase()}${id}`,
      );
      if (exChildTab) {
        dispatch(activateTab(`${type.toLowerCase()}${id}`, state));
      } else {
        const activeTab = state.find((tab) => tab.active);

        if (activeTab) {
          activeTab.active = false;
        }
        let tabs = {
          id: `${type.toLowerCase()}${id}`,
          title: type,
          favicon: inboxIcon,
          content:
            type === 'Todo' ? (
              <DetailTodo props={data} />
            ) : type === 'Disposisi' ? (
              <Disposisi props={data} />
            ) : type === 'Perlu Tindak Lanjut' ? (
              <PerluTindakLanjut props={data} />
            ) : (
              ''
            ),
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
  return (dispatch) => {
    let movedTab = state[fromIndex];
    let remainingTabs = state.filter((_, index) => index !== fromIndex);
    remainingTabs.splice(toIndex, 0, movedTab);
    dispatch({ type: 'REORDER_TAB', payload: remainingTabs });
  };
};
