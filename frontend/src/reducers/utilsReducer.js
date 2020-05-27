import { TOGGLE_OPEN, OPEN_LOGIN_PANEL, CLOSE_LOGIN_PANEL } from 'src/actions/utils';

const initialState = {
  open: true,
  loginPanel: false,
};

const utilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    case OPEN_LOGIN_PANEL:
      return {
        ...state,
        loginPanel: true,
      };

    case CLOSE_LOGIN_PANEL:
      return {
        ...state,
        loginPanel: false,
      };

    default: return state;
  }
};

export default utilsReducer;
