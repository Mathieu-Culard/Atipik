import {
  CHANGE_CONNECTION_FIELD,
  CLEAR_CONNECTION_FORM,
  LOGIN_CHANGED,
  LOG_IN,
  LOG_OUT,
} from '../actions/connection';

const initialState = {
  username: '',
  password: '',
  email: '',
  firstname: '',
  lastname: '',
  isLogged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONNECTION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case CLEAR_CONNECTION_FORM:
      return {
        ...initialState,
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

    case LOG_OUT:
      return {
        ...initialState,
      };

    default: return state;
  }
};

export default userReducer;
