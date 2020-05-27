export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOG_OUT = 'LOG_OUT';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (isLogged) => ({
  type: SAVE_USER,
  isLogged,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const logOut = () => ({
  type: LOG_OUT,
});
