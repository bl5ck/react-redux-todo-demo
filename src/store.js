import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks/todo.duck';

const middlewares = [];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
