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
    case 'UPDATE_TAB':{
      const updatedTabs = state.tabs.map(tab => {
        if (tab.id === action.payload.title) {
          return action.payload;
        } else {
          return tab;
        }
      });
      console.log(action.payload);
      return {
        ...state,
        tabs: updatedTabs,
      };
    }
    case 'CLOSE_TAB':
      return {
        ...state,
        tabs: action.payload,
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
