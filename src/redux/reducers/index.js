import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import sidebarReducer from './sidebarReducer';
import todoListReducer from './todoListReducer';
import suratReducer from './suratReducer';
export default combineReducers({
  user: userReducer,
  tab: tabReducer,
  sidebar: sidebarReducer,
  todolist: todoListReducer,
  surat: suratReducer,
});
