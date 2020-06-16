
// used to display accomodationTypeDropdown correctly
export const getAnchorPosition = () => {
  const top = window.screen.height / 1;
  const left = window.screen.width / 2;
  const bottom = 0;
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
  let result = checkedItems.filter((item) => (
    item !== id
  ));
  if (checked) {
    result = (Object.values({ ...checkedItems, id }));
  }
  const removeDuplicate = result.filter((v, i, a) => (
    a.indexOf(v) === i
  ));
  return removeDuplicate;
};

export const getCheckedItemsForServicesAndExtras = (checkedItems, item, checked) => {
  if (checked) {
    return (Object.values({ ...checkedItems, item }));
  }
  return checkedItems.filter((el) => (
    el.id !== item.id
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
/**
 *
 * @param {Array} servicesList array of object that represent all possible services
 * @param {Array} accomodationServices array of number which are the ids of the services of the current accomodation
 *
 * return an array of object that represent all the services of the current accomodation
 */
export const getServices = (servicesList, accomodationServices) => {
  const services = [];
  if (accomodationServices) {
    for (let i = 0; i < servicesList.length; i += 1) {
      for (let j = 0; j < accomodationServices.length; j += 1) {
        if (servicesList[i].id === accomodationServices[j]) {
          services.push(servicesList[i]);
        }
      }
    }
  }
  return services;
};

export const getExtras = (extrasList, accomodationExtras) => {
  const extras = [];
  if (accomodationExtras) {
    for (let i = 0; i < extrasList.length; i += 1) {
      for (let j = 0; j < accomodationExtras.length; j += 1) {
        if (extrasList[i].id === accomodationExtras[j]) {
          extras.push(extrasList[i]);
        }
      }
    }
  }
  return extras;
};

export const getCurrentAccomodation = (myAccomodations, id) => {
  const currentAccomodation = myAccomodations.filter((accomodation) => (
    accomodation.id === parseInt(id, 10)
  ));
  return currentAccomodation[0];
};

export const getMyAccomodationPicturesURL = (statePicturesURL, picturesToAdd) => {
  const result = [...statePicturesURL];
  for (let i = 0; i < picturesToAdd.length; i += 1) {
    const elem = {
      name: picturesToAdd[i].name,
      file: URL.createObjectURL(picturesToAdd[i]),
    };
    result.push(elem);
  }
  // console.log(result);
  return result;
};

export const getTypeById = (typeList, typeId) => {
  for (let i = 0; i < typeList.length; i += 1) {
    for (let j = 0; j < typeList[i].types.length; j += 1) {
      if (typeList[i].types[j].id === typeId) {
        return typeList[i].types[j];
      }
    }
  }
};

export const unselectAccomodationTypesByThematic = (id, selectedTypes, typeList) => {
  const thematicToUnselect = typeList.find((thematic) => thematic.id === id);
  const newSelectedTypes = [...selectedTypes];
  for (let i = 0; i < thematicToUnselect.types.length; i += 1) {
    const index = newSelectedTypes.indexOf(thematicToUnselect.types[i].id);
    if (index !== -1) {
      newSelectedTypes.splice(index, 1);
    }
  }
  return newSelectedTypes;
};

export const checkThematicSelected = (typeList, selectedTypes) => {
  const selectedThematics = [];
  let isSelected;
  for (let i = 0; i < typeList.length; i += 1) { // iterate over thematics
    for (let j = 0; j < typeList[i].types.length; j += 1) { // iterate over types
      isSelected = selectedTypes.includes(typeList[i].types[j].id);
      // if current type isn't in selectedtypes array, that means that all of the types of current thematic aren't selected
      // so we break the iteration over current thematic types to keep isSelected to false so we do not add current thematic
      // in selectedThematics
      if (!isSelected) {
        break;
      }
    }
    // on the other hand if the iteration hasn't been breaked that means that isSelected has stayed to true during the iteration
    // which means that all of the types of the current thematics are selected so we add the id of the current thematic to selectedThematics
    if (isSelected) {
      selectedThematics.push(typeList[i].id);
    }
  }
  return selectedThematics;
};

export const checkAddAndEditData = (
  title,
  capacity,
  nbNights,
  surface,
  price,
  type,
  city,
  country,
  adress,
  description,
  pictures,
  editPicturesURL,
) => {
  let errorMessage = '';
  if (title.trim() === '') {
    errorMessage = 'Veuillez indiquer un titre pour votre hébergement';
  }
  else if (capacity <= 0) {
    errorMessage = 'Veuillez renseigner la capacité de votre hébergement';
  }
  else if (nbNights <= 0) {
    errorMessage = 'Veuillez indiquer la durée minimale d\'un sejour dans votre hébergement';
  }
  else if (surface <= 0) {
    errorMessage = 'Veuillez renseigner la surface de votre hébergement';
  }
  else if (price <= 0) {
    errorMessage = 'Veuillez indiquer le prix de votre hébergement';
  }
  else if (type.length === 0) {
    errorMessage = 'Veuillez indiquer le type de votre hébergement';
  }
  else if (city.trim() === '') {
    errorMessage = 'Veuillez indiquer la ville dans laquelle se trouve votre hébergement';
  }
  else if (country.trim() === '') {
    errorMessage = 'Veuillez indiquer le pays dans lequel se trouve votre hébergement';
  }
  else if (adress.trim() === '') {
    errorMessage = 'Veuillez renseigner l\'adresse de votre hébergement';
  }
  else if (description.trim() === '') {
    errorMessage = 'Veuillez décrire votre logement';
  }
  else if (pictures.length === 0 && editPicturesURL.length === 0) {
    errorMessage = 'Veuillez ajouter des photos de votre hébergement';
  }
  return errorMessage;
};
