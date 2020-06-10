import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import userMiddleware from 'src/middlewares/userMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import mapMiddleware from 'src/middlewares/mapMiddleware';
import accomodationMiddleware from 'src/middlewares/accomodationMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';
import connectionMiddleware from 'src/middlewares/connectionMiddleware';
import inscriptionMiddleware from 'src/middlewares/inscriptionMiddleware';
import dataMiddleware from 'src/middlewares/dataMiddleware';
import manageAccomodationMiddleware from 'src/middlewares/manageAccomodationMiddleware';
import reservationMiddleware from 'src/middlewares/reservationMiddleware';
import reducer from 'src/reducers';

export const history = createBrowserHistory();

const enhancer = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    connectionMiddleware,
    searchMiddleware,
    mapMiddleware,
    accomodationMiddleware,
    contactMiddleware,
    userMiddleware,
    inscriptionMiddleware,
    dataMiddleware,
    manageAccomodationMiddleware,
    reservationMiddleware,
  ),
);

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history),
    preloadedState,
    enhancer,
  );
  return store;
}
