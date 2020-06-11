import { REMOVE_MY_ACCOMODATION } from 'src/actions/manageAccomodation';
import { CHANGE_USER_FIELD, SAVE_USER_INFOS, CLEAR_USER_INFOS } from 'src/actions/user';

const initialState = {
  id: -1,
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  accomodations: [],
  avatar: {},
  avatarUrl: '',
  isAdmin: true,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_MY_ACCOMODATION:
      return {
        ...state,
        accomodations: state.accomodations.filter(
          (accomodationId) => (accomodationId !== action.id),
        ),
      };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER_INFOS:
      return {
        ...state,
        ...action.data,
        isAdmin: action.data.roles === 'ROLE_ADMIN',
        avatar: {},
        avatarUrl: `${process.env.REACT_APP_BACKEND_URL}/assets/avatar/${action.data.avatar}`,
      };

    case CLEAR_USER_INFOS:
      return {
        ...initialState,
      };

    default: return state;
  }
};

export default userReducer;
