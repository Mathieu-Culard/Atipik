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
 * @param {array} checkedItems
 * values that are already present in the state accomodationTypeValue field
 * @param {number} id
 * id of the curretly selected type
 * @param {boolean} checked
 * true if the user select the type that correspond to the id, false if he uncheck it
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
 * @param {array} checkedItems
 * values that are already present in the state accomodationTypeValue field
 * @param {number} thematicId
 * id of the thematic whose items will be added to the state
 */
export const selectAccomodationTypesByThematic = (accomodationTypes, checkedItems, thematicId) => {
  const thematic = accomodationTypes.find((item) => (
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

export const truncateDescription = (description) => (!!description && description.length > 100 ? `${description.slice(0, 100)}...` : description);

export const createDataForSearch = (state) => {
  const {
    minSurface,
    pipedWater,
    electricity,
    animals,
    smokers,
    apmr,
    city,
    country,
    types,
    nbNights,
    maxPrice,
    capacity,
  } = state;
  const data = {};
  if (minSurface !== 0) {
    data.min_surface = minSurface;
  }
  if (pipedWater) {
    data.piped_water = true;
  }
  if (electricity) {
    data.electricity = true;
  }
  if (animals) {
    data.animals = true;
  }
  if (smokers) {
    data.smokers = true;
  }
  if (apmr) {
    data.apmr = true;
  }
  if (city !== '') {
    data.city = city;
  }
  if (country !== '') {
    data.country = country;
  }
  if (types.length !== 0) {
    data.types = types;
  }
  if (nbNights !== 0) {
    data.nbNights = nbNights;
  }
  if (capacity !== 0) {
    data.capacity = capacity;
  }
  if (maxPrice !== 0) {
    data.max_price = maxPrice;
  }
  return data;
};