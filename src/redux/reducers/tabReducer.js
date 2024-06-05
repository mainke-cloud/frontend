import React from 'react';
import Dashboard from 'modules/dashboard';
import homeIcon from '../../assets/icon/home.svg';

const initialState = {
  tabs: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      active: true,
      favicon: homeIcon,
      content: <Dashboard />,
    },
  ],
  idCounter: 1,
  cek: 0,
};

const updateMultipleTabs = (tabs, ids, payload) => {
  return tabs.map((tab) =>
    ids.includes(tab.id) && tab.title === payload.title ? payload : tab,
  );
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
    case 'UPDATE_TAB':
      return {
        ...state,
        tabs: updateMultipleTabs(
          state.tabs,
          [
            'todo',
            'disposisi',
            'surat masuk',
            'perlu tindak lanjut',
            'draft',
            'lacak proses',
            'komposer',
            'template',
            'surat diminta',
            'surat terkirim',
            'surat dibatalkan',
            'log scan surat',
            'folder',
          ],
          action.payload,
        ),
      };
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
