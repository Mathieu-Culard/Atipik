import axios from 'axios';
import {
  FETCH_MY_ACCOMODATIONS,
  saveMyAccomodations,
  SUBMIT_ADD_ACCOMODATION_FORM,
  SUBMIT_EDIT_MY_ACCOMODATION_FORM,
  DELETE_MY_ACCOMODATION,
  removeMyAccomodation,
  fetchMyAccomodations,
  SET_EDIT_MY_ACCOMODATION_INFOS,
  SAVE_MY_ACCOMODATIONS,
  endLoading,
} from 'src/actions/manageAccomodation';

import Geocode from 'react-geocode';

import { checkAddAndEditData } from 'src/utils';

import { openSuccessSnackbar } from 'src/actions/utils';
import { push } from 'connected-react-router';


const manageAccomodationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_MY_ACCOMODATION:
      axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/delete/accomodation/${action.id}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then(() => {
          store.dispatch(removeMyAccomodation(action.id));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    case FETCH_MY_ACCOMODATIONS: {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/accomodation/${action.id}`,
      })
        .then((response) => {
          // for (let i = 0; i < response.data.pictures.length; i += 1) {
          //   store.dispatch(fetchMyAccomodationPictures(response.data.pictures[i]));
          // }
          console.log(response.data);
          store.dispatch(saveMyAccomodations(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    case SAVE_MY_ACCOMODATIONS: {
      next(action);
      const { accomodations } = store.getState().user;
      const { myAccomodations } = store.getState().manageAccomodation;
      if (accomodations.length === myAccomodations.length) {
        store.dispatch(endLoading());
      }
      break;
    }
    case SET_EDIT_MY_ACCOMODATION_INFOS: {
      next(action);
      const { picturesURL } = store.getState();
      console.log(picturesURL);
      break;
    }
    case SUBMIT_ADD_ACCOMODATION_FORM: {
      const {
        title,
        capacity,
        description,
        price,
        adress,
        city,
        country,
        surface,
        nbNights,
        electricity,
        pipedWater,
        accessibility,
        smokers,
        animals,
        facebook,
        instagram,
        type,
        services,
        extras,
        pictures,
        editPicturesURL,
      } = store.getState().manageAccomodation;
      const errorMessage = checkAddAndEditData(
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
      );
      if (errorMessage === '') {
        Geocode.setApiKey(localStorage.getItem('apiKey'));
        Geocode.fromAddress(`${adress}, ${city}, ${country}`)

          .then(() => {
            const formData = new FormData();
            for (let i = 0; i < pictures.length; i += 1) {
              formData.append('pictures[]', pictures[i]);
            }
            // formData.append('pictures', pictures);
            formData.append('title', title);
            formData.append('capacity', capacity);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('adress', adress);
            formData.append('city', city);
            formData.append('country', country);
            formData.append('surface', surface);
            formData.append('nbNight', nbNights);
            formData.append('electricity', electricity);
            formData.append('pipedWater', pipedWater);
            formData.append('accessibility', accessibility);
            formData.append('smokers', smokers);
            formData.append('animals', animals);
            formData.append('facebookLink', facebook);
            formData.append('instagramLink', instagram);
            formData.append('type', type);
            formData.append('services', services.map((service) => (service.id)));
            formData.append('extras', extras.map((extra) => (extra.id)));
            axios.post(
              `${process.env.REACT_APP_API_URL}/add/accomodation`,
              formData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            ).then((response) => {
              console.log(response);
              store.dispatch(fetchMyAccomodations(response.data));
              store.dispatch(push('/gerer-mes-hebergements'));
              store.dispatch(openSuccessSnackbar('Hébergement ajouté avec succès', 'success'));
            })
              .catch((error) => {
                console.warn(error);
              });
          })

          .catch(() => {
            store.dispatch(openSuccessSnackbar('Veuillez renseignez une adresse valide', 'warning'));
          });
      }
      else {
        store.dispatch(openSuccessSnackbar(errorMessage, 'warning'));
      }
      next(action);

      break;
    }
    case SUBMIT_EDIT_MY_ACCOMODATION_FORM: {
      const {
        title,
        capacity,
        description,
        price,
        adress,
        city,
        country,
        surface,
        nbNights,
        electricity,
        pipedWater,
        accessibility,
        smokers,
        animals,
        facebook,
        instagram,
        type,
        services,
        extras,
        pictures,
        editPicturesURL,
      } = store.getState().manageAccomodation;
      const errorMessage = checkAddAndEditData(
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
      );
      if (errorMessage === '') {
        Geocode.setApiKey(localStorage.getItem('apiKey'));
        Geocode.fromAddress(`${adress}, ${city}, ${country}`)

          .then(() => {
            const formData = new FormData();
            for (let i = 0; i < pictures.length; i += 1) {
              formData.append('pictures[]', pictures[i]);
            }
            formData.append('databasePic', editPicturesURL);
            formData.append('title', title);
            formData.append('capacity', capacity);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('adress', adress);
            formData.append('city', city);
            formData.append('country', country);
            formData.append('surface', surface);
            formData.append('nbNight', nbNights);
            formData.append('electricity', electricity);
            formData.append('pipedWater', pipedWater);
            formData.append('accessibility', accessibility);
            formData.append('smokers', smokers);
            formData.append('animals', animals);
            formData.append('facebookLink', facebook);
            formData.append('instagramLink', instagram);
            formData.append('type', type);
            formData.append('services', services.map((service) => (service.id)));
            formData.append('extras', extras.map((extra) => (extra.id)));
            axios.post(
              `${process.env.REACT_APP_API_URL}/edit/accomodation/${action.id}`,
              formData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            ).then((response) => {
              store.dispatch(removeMyAccomodation(response.data));
              store.dispatch(fetchMyAccomodations(response.data));
              store.dispatch(openSuccessSnackbar('Hébergement modifié avec succès', 'success'));
              store.dispatch(push('/gerer-mes-hebergements'));
            })
              .catch((error) => {
                console.warn(error);
              });
          })

          .catch(() => {
            store.dispatch(openSuccessSnackbar('Veuillez renseignez une adresse valide', 'warning'));
          });
      }
      else {
        store.dispatch(openSuccessSnackbar(errorMessage, 'warning'));
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default manageAccomodationMiddleware;
