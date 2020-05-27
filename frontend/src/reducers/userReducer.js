import { CHANGE_FIELD, SAVE_USER } from '../actions/user';

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
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
      };

    default: return state;
  }
};

export default userReducer;
