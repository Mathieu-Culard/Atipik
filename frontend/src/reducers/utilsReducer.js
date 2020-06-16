import {
  TOGGLE_OPEN,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SUCCESS_SNACKBAR,
  CLOSE_SUCCESS_SNACKBAR,
  SET_ERROR_MESSAGE,
  SET_CONTACT_OWNER_PANEL,
  SET_MANAGE_ACCOMODATION_PANEL,
} from 'src/actions/utils';

const initialState = {
  messageSeverity: '',
  open: false,
  modal: false,
  modalComponent: '',
  modalTitle: '',
  success: false,
  successMessage: '',
  errorMessage: '',
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
        errorMessage: '',
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };

    case OPEN_SUCCESS_SNACKBAR:
      return {
        ...state,
        success: true,
        successMessage: action.message,
        messageSeverity: action.messageSeverity,
      };

    case CLOSE_SUCCESS_SNACKBAR:
      return {
        ...state,
        success: false,
        successMessage: '',
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
