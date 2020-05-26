/* eslint-disable import/prefer-default-export */

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
 * @param {number} id id of the curretly checked item
 * @param {boolean} checked true if the user check the item, false if he uncheck it
 */
export const getCheckedAccomodationTypes = (checkedItems, id, checked) => {
  console.log(Object.values({ ...checkedItems, id }));
  if (checked) {
    return (Object.values({ ...checkedItems, id }));
  }
  return checkedItems.filter((item) => (
    item !== id
  ));
};
