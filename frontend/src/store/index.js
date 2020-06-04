import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import accomodationMiddleware from 'src/middlewares/accomodationMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';
import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    searchMiddleware,
    mapMiddleware,
    accomodationMiddleware,
    contactMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
