import { combineReducers } from 'redux';
import utils from './utilsReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  utils,
  user,
});

export default rootReducer;
