import { CHANGE_INSCRIPTION_FIELD, CLEAR_INSCRIPTION_FORM } from 'src/actions/inscription';

const initialState = {
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const inscriptionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INSCRIPTION_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case CLEAR_INSCRIPTION_FORM:
      return {
        ...state,
        ...initialState,
      };

    default: return state;
  }
};

export default inscriptionReducer;
