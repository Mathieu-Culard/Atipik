export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SUBMIT_USER_MODIFICATION = 'SUBMIT_USER_MODIFICATION';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';

export const changeUserField = (newValue, identifier) => ({
  type: CHANGE_USER_FIELD,
  newValue,
  identifier,
});

export const submitUserModification = () => ({ type: SUBMIT_USER_MODIFICATION });

export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  data,
});

export const deleteAccount = () => ({ type: DELETE_ACCOUNT });

export const fetchUserInfos = () => ({ type: FETCH_USER_INFOS });
