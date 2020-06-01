import { TOGGLE_OPEN, SET_LOGIN_PANEL } from 'src/actions/utils';

const initialState = {
  open: false,
  loginPanel: false,
};

const utilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    case SET_LOGIN_PANEL:
      return {
        ...state,
        loginPanel: action.newValue,
      };

    default: return state;
  }
};

export default utilsReducer;
