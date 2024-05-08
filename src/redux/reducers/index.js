import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import sidebarReducer from './sidebarReducer';
import todoListReducer from './todoListReducer';
import suratReducer from './suratReducer';
import loginReducer from './loginReducer';
import headerReducer from './headerReducer';
import addressbookReducer from './addressbookReducer';
import classificationReducer from './classificationReducer';
export default combineReducers({
  user: userReducer,
  auth: loginReducer,
  tab: tabReducer,
  sidebar: sidebarReducer,
  todolist: todoListReducer,
  surat: suratReducer,
  header: headerReducer,
  addressbook: addressbookReducer,
  classification: classificationReducer,
});
