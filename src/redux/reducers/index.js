import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import sidebarReducer from './sidebarReducer';
import todoListReducer from './todoListReducer';
import loginReducer from './loginReducer';
export default combineReducers({
  user: userReducer,
  auth: loginReducer,
  tab: tabReducer,
  sidebar: sidebarReducer,
  todolist: todoListReducer,
});
