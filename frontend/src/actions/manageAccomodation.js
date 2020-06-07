export const CHANGE_MY_ACCOMODATION_FIELDS = 'CHANGE_MY_ACCOMODATION_FIELDS';
export const CHANGE_MY_ACCOMODATION_SWITCHS = 'CHANGE_MY_ACCOMODATION_SWITCHS';
export const CHANGE_EXTRAS_OR_SERVICES = 'CHANGE_EXTRAS_OR_SERVICES';
export const CHANGE_MY_ACCOMODATION_TYPE = 'CHANGE_MY_ACCOMODATION_TYPE';
export const FETCH_MY_ACCOMODATIONS = 'FETCH_MY_ACCOMODATIONS';
export const SAVE_MY_ACCOMODATIONS = 'SAVE_MY_ACCOMODATIONS';
export const SUBMIT_ADD_ACCOMODATION_FORM = 'SUBMIT_ADD_ACCOMODATION_FORM';
export const SET_EDIT_MY_ACCOMODATION_INFOS = 'SET_EDIT_MY_ACCOMODATION_INFOS';
export const RESET_MY_ACCOMODATION_INFOS = 'RESET_MY_ACCOMODATION_INFOS';
export const SUBMIT_EDIT_MY_ACCOMODATION_FORM = 'SUBMIT_EDIT_MY_ACCOMODATION_FORM';
export const DELETE_MY_ACCOMODATION = 'DELETE_MY_ACCOMODATION';
export const REMOVE_MY_ACCOMODATION = 'REMOVE_MY_ACCOMODATION';
export const CHANGE_MY_ACCOMODATION_PICTURES = 'CHANGE_MY_ACCOMODATION_PICTURES';

export const changeMyAccomodationPictures = (pictures) => ({
  type: CHANGE_MY_ACCOMODATION_PICTURES,
  pictures,
});

export const removeMyAccomodation = (id) => ({
  type: REMOVE_MY_ACCOMODATION,
  id,
});

export const deleteMyAccomodation = (id) => ({
  type: DELETE_MY_ACCOMODATION,
  id,
});

export const submitEditMyAccomodationForm = (id) => ({
  type: SUBMIT_EDIT_MY_ACCOMODATION_FORM,
  id,
});

export const resetMyAccomodationInfos = () => ({
  type: RESET_MY_ACCOMODATION_INFOS,
});

export const setEditMyAccomodationInfos = (id) => ({
  type: SET_EDIT_MY_ACCOMODATION_INFOS,
  id,
});

export const submitAddAccomodationForm = () => ({
  type: SUBMIT_ADD_ACCOMODATION_FORM,
});

export const saveMyAccomodations = (data) => ({
  type: SAVE_MY_ACCOMODATIONS,
  data,
});

export const fetchMyAccomodations = (id) => ({
  type: FETCH_MY_ACCOMODATIONS,
  id,
});

export const changeMyAccomodationType = (newValue) => ({
  type: CHANGE_MY_ACCOMODATION_TYPE,
  newValue,
});

export const changeExtrasOrServices = (identifier, item, checked) => ({
  type: CHANGE_EXTRAS_OR_SERVICES,
  identifier,
  item,
  checked,
});

export const changeMyAccomodationSwitchs = (identifier) => ({
  type: CHANGE_MY_ACCOMODATION_SWITCHS,
  identifier,
});

export const changeMyAccomodationFields = (identifier, newValue) => ({
  type: CHANGE_MY_ACCOMODATION_FIELDS,
  identifier,
  newValue,
});
