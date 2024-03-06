import fb from '../../assets/icon/home.png';
import google from '../../assets/icon/home.png';

export const addTab = (id, state) => {
  return (dispatch) => {
    let tabs = {
      id: `tab${id + 1}`,
      title: `New Tab ${id + 1}`,
      favicon: state.length % 2 ? fb : google,
      content: `New Tab ${id + 1} content`,
    };
    dispatch({ type: 'ADD_TAB', payload: tabs });
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
    const tabs = state.filter((tab) => tab.id !== tabId);
    dispatch({ type: 'CLOSE_TAB', payload: tabs });
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
