import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';

import searchMiddleware from 'src/middlewares/search';
import mapMiddleware from 'src/middlewares/map';

import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    searchMiddleware,
    mapMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
