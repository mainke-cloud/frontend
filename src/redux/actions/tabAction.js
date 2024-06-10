import inboxIcon from '../../assets/icon/inbox.svg';
import disposisiIcon from '../../assets/icon/disposisi.svg';
import folderIcon from '../../assets/icon/folder.svg';
import securityIcon from '../../assets/icon/shield.svg';
import helpIcon from '../../assets/icon/help-circle.svg';
import profileIcon from '../../assets/icon/user.svg';
import searchIcon from '../../assets/icon/search.svg';
import scanIcon from '../../assets/icon/scan.svg';
import iconSurat from '../../assets/icon/mail.svg';
import homeIcon from '../../assets/icon/home.svg';
import delegasiIcon from '../../assets/icon/DelegasiIcon.svg';
import sekretarisIcon from '../../assets/icon/SekretarisIcon.svg';
import inboxIconInActive from '../../assets/icon/iconInActive/inbox.svg';
import disposisiIconInActive from '../../assets/icon/iconInActive/disposisi.svg';
import folderIconInActive from '../../assets/icon/iconInActive/folder.svg';
import securityIconInActive from '../../assets/icon/iconInActive/shield.svg';
import helpIconInActive from '../../assets/icon/iconInActive/help-circle.svg';
import profileIconInActive from '../../assets/icon/iconInActive/user.svg';
import searchIconInActive from '../../assets/icon/iconInActive/search.svg';
import scanIconInActive from '../../assets/icon/iconInActive/scan.svg';
import iconSuratInActive from '../../assets/icon/iconInActive/mail.svg';
import homeIconInActive from '../../assets/icon/iconInActive/home.svg';
import delegasiIconInActive from '../../assets/icon/iconInActive/DelegasiIcon.svg';
import sekretarisIconInActive from '../../assets/icon/iconInActive/SekretarisIcon.svg';

const getIcon = (type, active) => {
  switch (type) {
    case 'Dashboard':
      return active ? homeIcon : homeIconInActive;
    case 'Folder':
    case 'Buka Folder':
      return active ? folderIcon : folderIconInActive;
    case 'Keamanan':
      return active ? securityIcon : securityIconInActive;
    case 'FAQ':
      return active ? helpIcon : helpIconInActive;
    case 'Profile':
      return active ? profileIcon : profileIconInActive;
    case 'Disposisi':
    case 'Todo':
      return active ? disposisiIcon : disposisiIconInActive;
    case 'Log Scan Surat':
    case 'Buat Scan Surat':
    case 'Draft Scan Surat':
    case 'Scan Surat Masuk':
      return active ? scanIcon : scanIconInActive;
    case 'Surat Masuk':
    case 'Buka Surat':
      return active ? inboxIcon : inboxIconInActive;
    case 'Perlu Tindak Lanjut':
    case 'Lacak Proses':
    case 'Draft':
    case 'Komposer':
    case 'Template':
    case 'Buat Surat':
    case 'Buat Template':
    case 'Forward':
    case 'Buat Surat Internal':
    case 'Buat Surat External':
    case 'Buat Surat Undangan':
    case 'Buat Surat Delegasi':
      return active ? iconSurat : iconSuratInActive;
    case 'Search':
      return active ? searchIcon : searchIconInActive;
    case 'Delegasi':
      return active ? delegasiIcon : delegasiIconInActive;
    case 'Sekretaris':
      return active ? sekretarisIcon : sekretarisIconInActive;
    default:
      return active ? iconSurat : iconSuratInActive;
  }
};

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
        favicon: getIcon(type, true),
        active: true,
      };
      let localStorageTabs = JSON.parse(localStorage.getItem('tabs'));
      if (!localStorageTabs) {
        localStorageTabs = [];
      }

      let isDuplicate = localStorageTabs.some((tab) => tab.id === tabs.id);
      if (!isDuplicate) {
        tabs.active = true;
        localStorageTabs.forEach((tab) => {
          tab.active = false;
        });
        localStorageTabs.push(tabs);
        localStorage.setItem('tabs', JSON.stringify(localStorageTabs));
      }

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
    dispatch({ type: 'CLOSE_EDIT' });
  };
};

export const childTab = (id, state, type, data) => {
  return (dispatch) => {
    const isExistingTab = state.find((tab) => {
      switch (type) {
        case 'Todo':
          return tab.id === 'todo';
        case 'Disposisi':
          return tab.id === 'disposisi';
        case 'Perlu Tindak Lanjut':
          return tab.id === 'perlu tindak lanjut';
        case 'Lacak Proses':
          return tab.id === 'lacak proses';
        case 'Draft':
          return tab.id === 'draft';
        case 'Komposer':
          return tab.id === 'komposer';
        case 'Template':
          return tab.id === 'template';
        case 'Surat Diminta':
          return tab.id === 'surat diminta';
        case 'Surat Terkirim':
          return tab.id === 'surat terkirim';
        case 'Surat Dibatalkan':
          return tab.id === 'surat dibatalkan';
        case 'Surat Masuk':
          return tab.id === 'surat masuk';
        case 'Folder':
          return tab.id === 'folder';
        case 'Buka Folder':
          return tab.id === 'buka folder';
        case 'Log Scan Surat':
          return tab.id === 'log scan surat';
        default:
          return false;
      }
    });
    if (isExistingTab) {
      console.log(type);
      const updateTab = {
        ...isExistingTab,
        id: `${isExistingTab.id}${id}`,
      };
      console.log('1');

      let localStorageTabs = JSON.parse(localStorage.getItem('tabs'));
      if (!localStorageTabs) {
        localStorageTabs = [];
      }

      let isDuplicate = localStorageTabs.some((tab) => tab.id === updateTab.id);
      if (!isDuplicate) {
        updateTab.active = true;
        localStorageTabs.forEach((tab) => {
          tab.active = false;
        });
        updateTab.ids = id;
        localStorageTabs.push(updateTab);
        localStorage.setItem('tabs', JSON.stringify(localStorageTabs));
      }
      dispatch({ type: 'UPDATE_TAB', payload: updateTab });
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
          favicon: getIcon(activeTab.title, true),
          active: true,
        };
        console.log('2');

        let localStorageTabs = JSON.parse(localStorage.getItem('tabs'));
        if (!localStorageTabs) {
          localStorageTabs = [];
        }

        let isDuplicate = localStorageTabs.some((tab) => tab.id === tabs.id);
        if (!isDuplicate) {
          tabs.active = true;
          localStorageTabs.forEach((tab) => {
            tab.active = false;
          });
          tabs.ids = id;
          localStorageTabs.push(tabs);
          localStorage.setItem('tabs', JSON.stringify(localStorageTabs));
        }
        dispatch({ type: 'ADD_TAB', payload: tabs });
      }
    }
    dispatch({ type: 'CLOSE_EDIT' });
  };
};

export const activateTab = (tabId, state) => {
  return (dispatch) => {
    const updatedTabs = state.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    localStorage.setItem('tabs', JSON.stringify(updatedTabs));
    dispatch({ type: 'ACTIVE_TAB', payload: updatedTabs });
    dispatch({ type: 'CLOSE_EDIT' });
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
    dispatch({ type: 'CLOSE_EDIT' });
  };
};

export const closeAllTabs = () => {
  return (dispatch) => {
    const tabs = [];
    dispatch({ type: 'CLOSE_ALL_TABS', payload: tabs });
    dispatch({ type: 'CLOSE_EDIT' });
  };
};

export const reorderTab = (tabId, fromIndex, toIndex, state) => {
  return (dispatch) => {
    let movedTab = state[fromIndex];
    let remainingTabs = state.filter((_, index) => index !== fromIndex);
    remainingTabs.splice(toIndex, 0, movedTab);
    dispatch({ type: 'REORDER_TAB', payload: remainingTabs });
    dispatch({ type: 'CLOSE_EDIT' });
  };
};

export const setTabs = (tabs) => {
  return (dispatch) => {
    dispatch({ type: 'SET_TABS', payload: tabs });
  };
};
