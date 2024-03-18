import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
export default combineReducers({
  user: userReducer,
  tab: tabReducer,
});
