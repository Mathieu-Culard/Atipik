export const CHANGE_CITY_TEXTFIELD = 'CHANGE_CITY_TEXTFIELD';
export const CHANGE_COUNTRY_TEXTFIELD = 'CHANGE_COUNTRY_TEXTFIELD';
export const CHANGE_CAPACITY = 'CHANGE_NB_PERSON';
export const CHANGE_NB_NIGHTS = 'CHANGE_NB_NIGHTS';
export const CHANGE_MAX_PRICE = 'CHANGE_MAX_PRICE';
export const CHANGE_ACCOMODATION_TYPES = 'CHANGE_ACCOMODATION_TYPES';
export const SELECT_ALL = 'SELECT_ALL';
export const SEARCH = 'SEARCH';
export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';

export const saveSearchResult = (searchResult) => ({
  type: SAVE_SEARCH_RESULT,
  searchResult,
});

export const search = () => ({
  type: SEARCH,
});

export const selectAll = (thematicId) => ({
  type: SELECT_ALL,
  id: thematicId,
});

export const changeCapacity = (newValue) => ({
  type: CHANGE_CAPACITY,
  value: newValue,
});
export const changeNbNights = (newValue) => ({
  type: CHANGE_NB_NIGHTS,
  value: newValue,
});
export const changeMaxPrice = (newValue) => ({
  type: CHANGE_MAX_PRICE,
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
