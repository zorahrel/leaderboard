import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const initialState = { items: [], isFetching: false };
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window['devToolsExtension'];

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store: Store<object> = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;