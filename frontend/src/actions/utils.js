export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SET_LOGIN_PANEL = 'SET_LOGIN_PANEL';
export const SET_CONTACT_OWNER_PANEL = 'SET_CONTACT_OWNER_PANEL';


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
