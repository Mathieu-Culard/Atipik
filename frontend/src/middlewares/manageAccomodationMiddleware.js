import axios from 'axios';
import {
  FETCH_MY_ACCOMODATIONS,
  saveMyAccomodations,
  SUBMIT_ADD_ACCOMODATION_FORM,
  SUBMIT_EDIT_MY_ACCOMODATION_FORM,
} from 'src/actions/manageAccomodation';

const manageAccomodationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MY_ACCOMODATIONS: {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/accomodation/${action.id}`,
      })
        .then((response) => {
          store.dispatch(saveMyAccomodations(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
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
      } = store.getState().manageAccomodation;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/add/accomodation`,
        data: {
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
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
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
      } = store.getState().manageAccomodation;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/edit/accomodation/${action.id}`,
        data: {
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
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default manageAccomodationMiddleware;
