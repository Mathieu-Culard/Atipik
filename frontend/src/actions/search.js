export const CHANGE_CITY_TEXTFIELD = 'CHANGE_CITY_TEXTFIELD';
export const CHANGE_COUNTRY_TEXTFIELD = 'CHANGE_COUNTRY_TEXTFIELD';
export const CHANGE_NB_PERSON = 'CHANGE_NB_PERSON';
export const CHANGE_NB_NIGHTS = 'CHANGE_NB_NIGHTS';
export const CHANGE_PRICE_SCALE = 'CHANGE_PRICE_SCALE';
export const CHANGE_ACCOMODATION_TYPES = 'CHANGE_ACCOMODATION_TYPES';
export const SELECT_ALL = 'SELECT_ALL';

export const selectAll = (thematicId) => ({
  type: SELECT_ALL,
  id: thematicId,
});

export const changeNbPerson = (newValue) => ({
  type: CHANGE_NB_PERSON,
  value: newValue,
});
export const changeNbNights = (newValue) => ({
  type: CHANGE_NB_NIGHTS,
  value: newValue,
});
export const changePriceScale = (newValue) => ({
  type: CHANGE_PRICE_SCALE,
  value: newValue,
});
export const changeAccomodationTypes = (newValue, checked) => ({
  type: CHANGE_ACCOMODATION_TYPES,
  value: newValue,
  checked,
});
export const changeCountryTextfield = (newValue) => ({
  type: CHANGE_COUNTRY_TEXTFIELD,
  value: newValue,
});

export const changeCityTextfield = (newValue) => ({
  type: CHANGE_CITY_TEXTFIELD,
  value: newValue,
});


