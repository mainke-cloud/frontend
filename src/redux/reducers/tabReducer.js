import React from 'react';
import Dashboard from 'modules/dashboard';
import homeIcon from '../../assets/icon/home.svg';
const initialState = {
  tabs: [
    {
      id: 'dashboard',
      favicon: homeIcon,
      title: 'Dashboard',
      active: true,
      content: <Dashboard />,
    },
  ],
  idCounter: 1,
  cek: 0,
};
const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
        idCounter: state.idCounter + 1,
      };
    case 'ACTIVE_TAB':
      return {
        ...state,
        tabs: action.payload,
      };
    case 'UPDATE_TAB_TODO': {
      const updatedTabs = state.tabs.map((tab) => {
        if (
          (tab.id === 'todo' && tab.title === action.payload.title) ||
          (tab.id === 'disposisi' && tab.title === action.payload.title)
        ) {
          return action.payload;
        } else {
          return tab;
        }
      });
      return {
        ...state,
        tabs: updatedTabs,
      };
    }
    case 'UPDATE_TAB_DISPOSISI': {
      const updatedTabs = state.tabs.map((tab) => {
        if (tab.id === 'disposisi') {
          return action.payload;
        } else {
          return tab;
        }
      });
      return {
        ...state,
        tabs: updatedTabs,
      };
    }
    case 'UPDATE_TAB_PERLUTINDAKLANJUT': {
      const updatedTabs = state.tabs.map((tab) => {
        if (tab.id === 'perlu tindak lanjut') {
          return action.payload;
        } else {
          return tab;
        }
      });
      return {
        ...state,
        tabs: updatedTabs,
      };
    }

    case 'CLOSE_TAB':
      return {
        ...state,
        tabs: action.payload,
        idCounter: state.idCounter - 1,
      };
    case 'REORDER_TAB':
      return {
        ...state,
        tabs: action.payload,
      };
    case 'CLOSE_ALL_TABS':
      return {
        ...state,
        tabs: action.payload,
      };
    default:
      return state;
  }
};

export default tabReducer;
