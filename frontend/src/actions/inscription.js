export const CHANGE_INSCRIPTION_FIELD = 'CHANGE_INSCRIPTION_FIELD';
export const SUBMIT_INSCRIPTION = 'SUBMIT_INSCRIPTION';
export const CLEAR_INSCRIPTION_FORM = 'CLEAR_INSCRIPTION_FORM';

export const changeInscriptionField = (newValue, identifier) => ({
  type: CHANGE_INSCRIPTION_FIELD,
  newValue,
  identifier,
});

export const submitInscription = () => ({ type: SUBMIT_INSCRIPTION });

export const clearInscriptionForm = () => ({ type: CLEAR_INSCRIPTION_FORM });
