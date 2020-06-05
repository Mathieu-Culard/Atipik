import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import accomodationMiddleware from 'src/middlewares/accomodationMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';
import connectionMiddleware from 'src/middlewares/connectionMiddleware';
import inscriptionMiddleware from 'src/middlewares/inscriptionMiddleware';
import dataMiddleware from 'src/middlewares/dataMiddleware';
import manageAccomodationMiddleware from 'src/middlewares/manageAccomodationMiddleware';
import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    connectionMiddleware,
    searchMiddleware,
    mapMiddleware,
    accomodationMiddleware,
    contactMiddleware,
    userMiddleware,
    inscriptionMiddleware,
    dataMiddleware,
    manageAccomodationMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
