import {
  CHANGE_CONNECTION_FIELD,
  LOGIN_CHANGED,
  LOG_IN,
} from '../actions/connection';

const initialState = {
  username: '',
  password: '',
  email: '',
  firstname: '',
  lastname: '',
  isLogged: !!localStorage.getItem('jwt'),
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONNECTION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case LOG_IN:
      return {
        ...state,
        email: '',
        password: '',
      };

    case LOGIN_CHANGED:
      return {
        ...state,
        isLogged: !!localStorage.getItem('jwt'),
      };

    default: return state;
  }
};

export default userReducer;
