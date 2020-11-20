import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import inscription from './inscriptionReducer';
import search from './searchReducer';
import utils from './utilsReducer';
import connection from './connectionReducer';
import map from './mapReducer';
import accomodation from './accomodationReducer';
import contact from './contactReducer';
import user from './userReducer';
import data from './dataReducer';
import manageAccomodation from './manageAccomodationReducer';
import reservations from './reservationsReducer';
import responsive from './responsiveReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  inscription,
  search,
  utils,
  connection,
  map,
  accomodation,
  contact,
  user,
  data,
  manageAccomodation,
  reservations,
  responsive,
});

export default rootReducer;
