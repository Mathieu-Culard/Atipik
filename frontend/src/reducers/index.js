import { combineReducers } from 'redux';

import inscription from './inscriptionReducer';
import search from './searchReducer';
import utils from './utilsReducer';
import user from './userReducer';
import map from './mapReducer';

const rootReducer = combineReducers({
  inscription,
  search,
  utils,
  user,
  map,
});

export default rootReducer;
