export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SET_LOGIN_PANEL = 'SET_LOGIN_PANEL';
export const SET_CONTACT_OWNER_PANEL = 'SET_CONTACT_OWNER_PANEL';
export const SET_MANAGE_ACCOMODATION_PANEL = 'SET_MANAGE_ACCOMODATION_PANEL';
export const SET_BREADCRUMBS = 'SET_BREADCRUMBS';

export const setManageAccomodationPanel = (content, identifier) => ({
  type: SET_MANAGE_ACCOMODATION_PANEL,
  content,
  identifier,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const setLoginPanel = (newValue) => ({
  type: SET_LOGIN_PANEL,
  newValue,
});

export const setContactOwnerPanel = (newValue) => ({
  type: SET_CONTACT_OWNER_PANEL,
  newValue,
});

export const setBreadcrumbs = (breadcrumbs) => ({
  type: SET_BREADCRUMBS,
  breadcrumbs,
});
