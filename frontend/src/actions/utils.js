export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_SUCCESS_SNACKBAR = 'OPEN_SUCCESS_SNACKBAR';
export const CLOSE_SUCCESS_SNACKBAR = 'CLOSE_SUCCESS_SNACKBAR';
export const SET_CONTACT_OWNER_PANEL = 'SET_CONTACT_OWNER_PANEL';
export const SET_MANAGE_ACCOMODATION_PANEL = 'SET_MANAGE_ACCOMODATION_PANEL';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const setManageAccomodationPanel = (content, identifier) => ({
  type: SET_MANAGE_ACCOMODATION_PANEL,
  content,
  identifier,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const openModal = (title, component) => ({
  type: OPEN_MODAL,
  component,
  title,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openSuccessSnackbar = (message) => ({
  type: OPEN_SUCCESS_SNACKBAR,
  message,
});

export const closeSuccessSnackbar = () => ({
  type: CLOSE_SUCCESS_SNACKBAR,
});

export const setContactOwnerPanel = (newValue) => ({
  type: SET_CONTACT_OWNER_PANEL,
  newValue,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});