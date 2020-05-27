/* eslint-disable import/prefer-default-export */
import data from 'src/data/accomodationTypes';
// used to display accomodationTypeDropdown correctly
export const getAnchorPosition = () => {
  const top = window.screen.height / 3;
  const left = window.screen.width / 2;
  return {
    top,
    left,
  };
};

/**
 * @param {array} checkedItems values that are already present in the state accomodationTypeValue field
 * @param {number} id id of the curretly selected type
 * @param {boolean} checked true if the user select the type that correspond to the id, false if he uncheck it
 * 
 * add or remove the selected id of the accomodationTypesValue of the state.
 */
export const getCheckedAccomodationTypes = (checkedItems, id, checked) => {
  if (checked) {
    return (Object.values({ ...checkedItems, id }));
  }
  return checkedItems.filter((item) => (
    item !== id
  ));
};
/**
 * @param {array} checkedItems values that are already present in the state accomodationTypeValue field
 * @param {number} thematicId id of the thematic whose items will be added to the state
 */
export const selectAccomodationTypesByThematic = (checkedItems, thematicId) => {
  const thematic = data.find((item) => (
    item.id === thematicId
  ));

  const typesId = thematic.types.map((item) => (
    item.id
  ));

  const result = checkedItems.concat(typesId);
  const removeDuplicate = result.filter((v, i, a) => (
    a.indexOf(v) === i
  ));
  return removeDuplicate;
};
