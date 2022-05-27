import { createStore, combineReducers , applyMiddleware } from 'redux';
import Auth from './Reducers/auth'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

export { ConfigureStore as default };