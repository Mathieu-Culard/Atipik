export const FETCH_ACCOMODATION_TYPES = 'FETCH_ACCOMODATION_TYPES';
export const SAVE_ACCOMODATION_TYPES = 'SAVE_ACCOMODATION_TYPES';

export const fetchAccomodationTypes = () => ({ type: FETCH_ACCOMODATION_TYPES });
export const saveAccomodationTypes = (accomodationTypes) => ({
  type: SAVE_ACCOMODATION_TYPES,
  accomodationTypes,
});
