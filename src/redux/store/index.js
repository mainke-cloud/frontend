import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { thunk } from 'redux-thunk';

const browserHistory = createBrowserHistory();
const routeMiddleware = routerMiddleware(browserHistory);

const middlewares = [thunk, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers(browserHistory),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
export { browserHistory };
