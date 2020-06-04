import { combineReducers } from 'redux';

import search from './searchReducer';
import utils from './utilsReducer';
import user from './userReducer';
import map from './mapReducer';
import accomodation from './accomodationReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
  search,
  utils,
  user,
  map,
  accomodation,
  contact,
});

export default rootReducer;
