import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import sidebarReducer from './sidebarReducer';
export default combineReducers({
  user: userReducer,
  tab: tabReducer,
  sidebar: sidebarReducer,
});
