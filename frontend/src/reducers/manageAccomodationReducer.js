import {
  CHANGE_MY_ACCOMODATION_FIELDS,
  CHANGE_MY_ACCOMODATION_SWITCHS,
  CHANGE_EXTRAS_OR_SERVICES,
  CHANGE_MY_ACCOMODATION_TYPE,
  SAVE_MY_ACCOMODATIONS,
  SET_EDIT_MY_ACCOMODATION_INFOS,
  RESET_MY_ACCOMODATION_INFOS,
  REMOVE_MY_ACCOMODATION,
  CHANGE_MY_ACCOMODATION_PICTURES,
  DELETE_MY_ACCOMODATION_PICTURE,
  DELETE_MY_ACCOMODATION_PICTURE_EDIT,
} from 'src/actions/manageAccomodation';
import { SAVE_SERVICES, SAVE_EXTRAS } from 'src/actions/accomodation';
import { SET_MANAGE_ACCOMODATION_PANEL } from 'src/actions/utils';
import {
  getCheckedItemsForServicesAndExtras,
  getCurrentAccomodation,
  getServices,
  getMyAccomodationPicturesURL,
} from 'src/utils';

const initialState = {
  title: '',
  capacity: 0,
  nbNights: 0,
  surface: 0,
  price: 0,
  type: -1,
  city: '',
  country: '',
  adress: '',
  facebook: '',
  instagram: '',
  description: '',
  pipedWater: false,
  electricity: false,
  accessibility: false,
  smokers: false,
  animals: false,
  allServices: [],
  allExtras: [],
  services: [],
  extras: [],
  panelIdentifier: '',
  panelContent: [],
  panelCheckedItems: [],
  pictures: [],
  picturesURL: [],
  myAccomodations: [],
  editPicturesURL: [],
  isLoading: true,
};

const manageAccomodationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MY_ACCOMODATION_PICTURES: {
      return {
        ...state,
        pictures: [...state.pictures, ...action.pictures],
        picturesURL: getMyAccomodationPicturesURL(state.picturesURL, action.pictures),
      };
    }
    case REMOVE_MY_ACCOMODATION:
      return {
        ...state,
        myAccomodations: state.myAccomodations.filter(
          (accomodation) => (accomodation.id !== action.id),
        ),
      };
    case SAVE_SERVICES:
      return {
        ...state,
        allServices: action.services,
      };
    case SAVE_EXTRAS:
      return {
        ...state,
        allExtras: action.extras,
      };
    case CHANGE_MY_ACCOMODATION_FIELDS:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case CHANGE_MY_ACCOMODATION_SWITCHS:
      return {
        ...state,
        [action.identifier]: !state[action.identifier],
      };
    case SET_MANAGE_ACCOMODATION_PANEL:
      return {
        ...state,
        panelContent: action.content,
        panelCheckedItems: state[action.identifier],
        panelIdentifier: action.identifier,
      };
    case CHANGE_EXTRAS_OR_SERVICES:
      return {
        ...state,
        [action.identifier]: getCheckedItemsForServicesAndExtras(state[action.identifier], action.item, action.checked),
        panelCheckedItems: getCheckedItemsForServicesAndExtras(state[action.identifier], action.item, action.checked),
      };
    case CHANGE_MY_ACCOMODATION_TYPE:
      return {
        ...state,
        type: action.newValue,
      };
    case DELETE_MY_ACCOMODATION_PICTURE:
      return {
        ...state,
        pictures: state.pictures.filter((picture) => (picture.name !== action.picture.name)),
        picturesURL: state.picturesURL.filter((picture) => (picture.name !== action.picture.name)),
      };

    case SAVE_MY_ACCOMODATIONS:
      return {
        ...state,
        myAccomodations: [...state.myAccomodations, { ...action.data }],
        isLoading: false,
      };
    case DELETE_MY_ACCOMODATION_PICTURE_EDIT:
      return {
        ...state,
        editPicturesURL: state.editPicturesURL.filter((picture) => (picture !== action.picture)),
      };
    case SET_EDIT_MY_ACCOMODATION_INFOS: {
      const currentAccomodation = getCurrentAccomodation(state.myAccomodations, action.id);
      const {
        title,
        type,
        capacity,
        nbNight,
        surface,
        price,
        city,
        country,
        adress,
        facebookLink,
        instagramLink,
        pipedWater,
        electricity,
        accessibility,
        smokers,
        animals,
        description,
        services,
        extras,
        pictures,
      } = currentAccomodation;
      return {
        ...state,
        editPicturesURL: pictures,
        title,
        type,
        capacity,
        nbNights: nbNight,
        surface,
        price,
        city,
        country,
        adress,
        facebook: facebookLink === null ? '' : facebookLink,
        instagram: instagramLink === null ? '' : instagramLink,
        pipedWater,
        electricity,
        accessibility,
        smokers,
        animals,
        description,
        services: getServices(state.allServices, services),
        extras: getServices(state.allExtras, extras),
      };
    }
    case RESET_MY_ACCOMODATION_INFOS:
      return {
        ...state,
        title: '',
        type: -1,
        capacity: 0,
        nbNights: 0,
        surface: 0,
        price: 0,
        city: '',
        country: '',
        adress: '',
        facebook: '',
        instagram: '',
        pipedWater: false,
        electricity: false,
        accessibility: false,
        smokers: false,
        animals: false,
        description: '',
        services: [],
        extras: [],
        pictures: [],
        picturesURL: [],
        editPicturesURL: [],
      };
    default: return state;
  }
};

export default manageAccomodationReducer;
