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
  avatar: {},
  avatarUrl: '',
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
        avatar: {},
        avatarUrl: `${process.env.REACT_APP_BACKEND_URL}/assets/avatar/${action.data.avatar}`,
      };

    default: return state;
  }
};

export default userReducer;
