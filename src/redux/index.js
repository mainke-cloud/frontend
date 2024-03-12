import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk'; // Perbaiki impor thunk

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
