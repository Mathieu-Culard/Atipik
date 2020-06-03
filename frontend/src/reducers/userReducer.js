import { CHANGE_USER_FIELD, SAVE_USER_INFOS } from 'src/actions/user';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  accomodations: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER_INFOS:
      return {
        ...state,
        ...action.data,
      };

    default: return state;
  }
};

export default userReducer;
