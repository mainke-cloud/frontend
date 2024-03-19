import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import todoListReducer from './todoListReducer';
export default combineReducers({
  user: userReducer,
  tab: tabReducer,
  todolist: todoListReducer,
});
