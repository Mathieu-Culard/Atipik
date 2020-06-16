export const CHANGE_CONTACT_FIELDS = 'CHANGE_CONTACT_FIELD';
export const SEND_MESSAGE_TO_ADMIN = 'SEND_MESSAGE_TO_ADMIN';
export const RESET_CONTACT_MESSAGE = 'RESET_CONTACT_MESSAGE';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const resetContactMessage = () => ({
  type: RESET_CONTACT_MESSAGE,
});

export const sendMessageToAdmin = () => ({
  type: SEND_MESSAGE_TO_ADMIN,
});

export const changeContactFields = (identifier, newValue) => ({
  type: CHANGE_CONTACT_FIELDS,
  identifier,
  newValue,
});

export const resetPassword = () => ({ type: RESET_PASSWORD });
