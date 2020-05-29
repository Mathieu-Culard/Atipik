export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SET_LOGIN_PANEL = 'SET_LOGIN_PANEL';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const setLoginPanel = (newValue) => ({
  type: SET_LOGIN_PANEL,
  newValue,
});
