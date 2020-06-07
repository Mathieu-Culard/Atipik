export const CHANGE_CONNECTION_FIELD = 'CHANGE_CONNECTION_FIELD';
export const CLEAR_CONNECTION_FORM = 'CLEAR_CONNECTION_FORM';
export const LOG_IN = 'LOG_IN';
export const LOGIN_CHANGED = 'LOGIN_CHANGED';
export const LOG_OUT = 'LOG_OUT';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const changeConnectionField = (identifier, newValue) => ({
  type: CHANGE_CONNECTION_FIELD,
  newValue,
  identifier,
});

export const clearConnectionForm = () => ({ type: CLEAR_CONNECTION_FORM });

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const loginChanged = () => ({
  type: LOGIN_CHANGED,
});

export const removeToken = () => ({ type: REMOVE_TOKEN });
