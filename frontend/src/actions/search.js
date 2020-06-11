
// ========= control filters inputs related actions
export const CHANGE_TEXTFIELD = 'CHANGE_TEXTFIELD';
export const CHANGE_CAPACITY = 'CHANGE_NB_PERSON';
export const CHANGE_NB_NIGHTS = 'CHANGE_NB_NIGHTS';
export const CHANGE_MAX_PRICE = 'CHANGE_MAX_PRICE';
export const COMMIT_MAX_PRICE_CHANGE = 'COMMIT_MAX_PRICE_CHANGE';
export const CHANGE_ACCOMODATION_TYPES = 'CHANGE_ACCOMODATION_TYPES';
export const CHANGE_MULTIPLE_ACCOMODATION_TYPES = 'CHANGE_MULTIPLE_ACCOMODATION_TYPES';
export const CHANGE_FILTER_SWITCH = 'CHANGE_FILTER_SWITCH';
export const CHANGE_MIN_SURFACE = 'CHANGE_MIN_SURFACE';
export const COMMIT_MIN_SURFACE_CHANGE = 'COMMIT_MIN_SURFACE_CHANGE';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

// ========= page related actions
export const SELECT_ALL = 'SELECT_ALL';
export const UNSELECT_ALL = 'UNSELECT_ALL';

// =========  API related actions
export const SEARCH = 'SEARCH';
export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';


// ========= control
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

export const commitMaxPriceChange = () => ({
  type: COMMIT_MAX_PRICE_CHANGE,
});

export const changeAccomodationTypes = (newValue, checked, typeList) => ({
  type: CHANGE_ACCOMODATION_TYPES,
  value: newValue,
  checked,
  typeList,
});

export const changeMultipleAccomodationTypes = (ids, checked, thematicId) => ({
  type: CHANGE_MULTIPLE_ACCOMODATION_TYPES,
  value: ids,
  checked,
  thematicId,
});
export const changeTextfield = (newValue, identifier) => ({
  type: CHANGE_TEXTFIELD,
  value: newValue,
  identifier,
});

export const changeMinSurface = (newValue) => ({
  type: CHANGE_MIN_SURFACE,
  value: newValue,
});

export const commitMinSurfaceChange = () => ({
  type: COMMIT_MIN_SURFACE_CHANGE,
});

export const changeFilterSwitch = (identifier) => ({
  type: CHANGE_FILTER_SWITCH,
  identifier,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });

// ========= page

export const selectAll = (thematicId) => ({
  type: SELECT_ALL,
  id: thematicId,
});

export const unselectAll = (thematicId, types) => ({
  type: UNSELECT_ALL,
  id: thematicId,
  types,
});

// ========= API
export const saveSearchResult = (searchResult) => ({
  type: SAVE_SEARCH_RESULT,
  searchResult,
});

export const search = () => ({
  type: SEARCH,
});
