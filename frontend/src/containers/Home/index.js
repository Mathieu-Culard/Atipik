import { connect } from 'react-redux';

import Home from 'src/pages/HomePage';
import {
  changeTextfield,
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  commitMaxPriceChange,
  search,
} from 'src/actions/search';
import { setBreadcrumbs } from 'src/actions/utils';


const mapStateToProps = (state) => ({
  cityValue: state.search.city,
  countryValue: state.search.country,
  nbPersonValue: state.search.capacity,
  nbNightsValue: state.search.nbNights,
  priceScaleValue: state.search.maxPrice,
  accomodationTypesValue: state.search.types,
});

const mapDispatchToProps = (dispatch) => ({
  commitMaxPriceChange: () => {
    dispatch(commitMaxPriceChange());
  },
  changeTextfield: (newValue, identifier) => {
    dispatch(changeTextfield(newValue, identifier));
  },
  changeNbPerson: (newValue) => {
    dispatch(changeCapacity(newValue));
  },
  changeNbNights: (newValue) => {
    dispatch(changeNbNights(newValue));
  },
  changePriceScale: (newValue) => {
    dispatch(changeMaxPrice(newValue));
  },
  changeAccomodationTypes: (newValue) => {
    dispatch(changeAccomodationTypes(newValue));
  },
  handleSearch: () => {
    dispatch(search());
  },
  setBreadcrumbs: (newValue) => dispatch(setBreadcrumbs(newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
