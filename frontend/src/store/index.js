import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import searchMiddleware from 'src/middlewares/searchMiddleware';

import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    searchMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
