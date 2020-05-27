export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const OPEN_LOGIN_PANEL = 'OPEN_LOGIN_PANEL';
export const CLOSE_LOGIN_PANEL = 'CLOSE_LOGIN_PANEL';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const openLoginPanel = () => ({
  type: OPEN_LOGIN_PANEL,
});

export const closeLoginPanel = () => ({
  type: CLOSE_LOGIN_PANEL,
});
