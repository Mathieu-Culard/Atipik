export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SET_LOGIN_PANEL = 'SET_LOGIN_PANEL';
export const SET_BREADCRUMBS = 'SET_BREADCRUMBS';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const setLoginPanel = (newValue) => ({
  type: SET_LOGIN_PANEL,
  newValue,
});

export const setBreadcrumbs = (breadcrumbs) => ({
  type: SET_BREADCRUMBS,
  breadcrumbs,
});