export const CHANGE_MY_ACCOMODATION_FIELDS = 'CHANGE_MY_ACCOMODATION_FIELDS';
export const CHANGE_MY_ACCOMODATION_SWITCHS = 'CHANGE_MY_ACCOMODATION_SWITCHS';

export const changeMyAccomodationSwitchs = (identifier) => ({
  type: CHANGE_MY_ACCOMODATION_SWITCHS,
  identifier,
});

export const changeMyAccomodationFields = (identifier, newValue) => ({
  type: CHANGE_MY_ACCOMODATION_FIELDS,
  identifier,
  newValue,
});
