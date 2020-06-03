import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import connectionMiddleware from 'src/middlewares/connectionMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import inscriptionMiddleware from 'src/middlewares/inscriptionMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    connectionMiddleware,
    searchMiddleware,
    mapMiddleware,
    userMiddleware,
    inscriptionMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
