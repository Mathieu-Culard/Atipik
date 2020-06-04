import { combineReducers } from 'redux';

import inscription from './inscriptionReducer';
import search from './searchReducer';
import utils from './utilsReducer';
import connection from './connectionReducer';
import map from './mapReducer';
import accomodation from './accomodationReducer';
import contact from './contactReducer';
import user from './userReducer';
import data from './dataReducer';

const rootReducer = combineReducers({
  inscription,
  search,
  utils,
  connection,
  map,
  accomodation,
  contact,
  user,
  data,
});

export default rootReducer;
