import {
  TOGGLE_OPEN,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_BREADCRUMBS,
  SET_CONTACT_OWNER_PANEL,
  SET_MANAGE_ACCOMODATION_PANEL,
} from 'src/actions/utils';

const initialState = {
  open: false,
  menu: false,
  modal: false,
  modalComponent: '',
  modalTitle: '',
  loginPanel: false,
  lostPasswordPanel: false,
  isContactOwnerPanelOpen: false,
  breadcrumbs: [{ label: 'Accueil', route: '/' }],
  isManageAccomodationPanelOpen: false,
  regexEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const utilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        modalComponent: action.component,
        modalTitle: action.title,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        modalComponent: '',
        modalTitle: '',
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

    case SET_MANAGE_ACCOMODATION_PANEL:
      return {
        ...state,
        isManageAccomodationPanelOpen: !state.isManageAccomodationPanelOpen,
      };
    default: return state;
  }
};

export default utilsReducer;
