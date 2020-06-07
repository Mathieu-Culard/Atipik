import { CHANGE_CONTACT_FIELDS, RESET_CONTACT_MESSAGE } from 'src/actions/contact';

const initialState = {
  email: '',
  object: '',
  message: '',
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELDS: {
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    }
    case RESET_CONTACT_MESSAGE:
      return {
        ...initialState,
      };
    default: return state;
  }
};

export default contactReducer;
