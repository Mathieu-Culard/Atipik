import { CHANGE_INSCRIPTION_FIELD, SUBMIT_INSCRIPTION } from 'src/actions/inscription';

const initialState = {
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INSCRIPTION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SUBMIT_INSCRIPTION:
      return {
        ...state,
        ...initialState,
      };

    default: return state;
  }
};

export default mapReducer;
