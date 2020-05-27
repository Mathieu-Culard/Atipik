import { connect } from 'react-redux';

import Home from 'src/pages/Home';
import {
  changeTextfield,
  // changeCountryTextfield,
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  search,
} from 'src/actions/search';


const mapStateToProps = (state) => ({
  cityValue: state.search.city,
  countryValue: state.search.country,
  nbPersonValue: state.search.capacity,
  nbNightsValue: state.search.nbNights,
  priceScaleValue: state.search.maxPrice,
  accomodationTypesValue: state.search.types,
});

const mapDispatchToProps = (dispatch) => ({
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
