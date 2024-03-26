import React from 'react';
import Dashboard from '@crema/components/Tabs/Dashboard/Dashboard';
import fb from '../../assets/icon/home.png';
const initialState = {
  tabs: [
    {
      id: 'dashboard',
      favicon: fb,
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
      console.log('masuk reducer todo');
      const updatedTabs = state.tabs.map((tab) => {
        if (tab.id === 'todo' && tab.title === action.payload.title || tab.id === 'disposisi' && tab.title === action.payload.title ) {
          return action.payload;
        } else {
          return tab;
        }
      });
      console.log(updatedTabs);
      return {
        ...state,
        tabs: updatedTabs,
      };
    }
    case 'UPDATE_TAB_DISPOSISI': {
      console.log('masuk reducer disposisi');
      const updatedTabs = state.tabs.map((tab) => {
        if (tab.id === 'disposisi' ) {
          return action.payload;
        } else {
          return tab;
        }
      });
      console.log(updatedTabs);
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
