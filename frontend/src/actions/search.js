export const CHANGE_TEXTFIELD = 'CHANGE_TEXTFIELD';
export const CHANGE_CAPACITY = 'CHANGE_NB_PERSON';
export const CHANGE_NB_NIGHTS = 'CHANGE_NB_NIGHTS';
export const CHANGE_MAX_PRICE = 'CHANGE_MAX_PRICE';
export const CHANGE_ACCOMODATION_TYPES = 'CHANGE_ACCOMODATION_TYPES';
export const CHANGE_FILTER_SWITCH = 'CHANGE_FILTER_SWITCH';
export const CHANGE_MIN_SURFACE = 'CHANGE_MIN_SURFACE';
export const SELECT_ALL = 'SELECT_ALL';
export const SEARCH = 'SEARCH';
export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';


export const changeMinSurface = (newValue) => ({
  type: CHANGE_MIN_SURFACE,
  value: newValue,
});

export const changeFilterSwitch = (identifier) => ({
  type: CHANGE_FILTER_SWITCH,
  identifier,
});
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
export const changeTextfield = (newValue, identifier) => ({
  type: CHANGE_TEXTFIELD,
  value: newValue,
  identifier,
});

