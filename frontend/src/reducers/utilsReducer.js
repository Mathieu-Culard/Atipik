
import { TOGGLE_OPEN, SET_LOGIN_PANEL, SET_BREADCRUMBS, SET_CONTACT_OWNER_PANEL } from 'src/actions/utils';


const initialState = {
  open: false,
  loginPanel: false,
  isContactOwnerPanelOpen: false,
  breadcrumbs: [{ label: 'Accueil', route: '/' }],
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
    case SET_CONTACT_OWNER_PANEL:
      return {
        ...state,
        isContactOwnerPanelOpen: action.newValue,
      };

    case SET_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: action.breadcrumbs,
      };

    default: return state;
  }
};

export default utilsReducer;
