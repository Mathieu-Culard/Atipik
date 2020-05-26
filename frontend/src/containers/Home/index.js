import { connect } from 'react-redux';

import Home from 'src/pages/Home';
import {
  changeCityTextfield,
  changeCountryTextfield,
  changeNbPerson,
  changeNbNights,
  changePriceScale,
  changeAccomodationTypes,
} from 'src/actions/search';


const mapStateToProps = (state) => ({
  cityValue: state.search.city,
  countryValue: state.search.country,
  nbPersonValue: state.search.nbPerson,
  nbNightsValue: state.search.nbNights,
  priceScaleValue: state.search.priceScale,
  accomodationTypesValue: state.search.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityTextfield: (newValue) => {
    console.log(`noooooon ${newValue}`);
    dispatch(changeCityTextfield(newValue));
  },
  changeCountryTextfield: (newValue) => {
    dispatch(changeCountryTextfield(newValue));
  },
  changeNbPerson: (newValue) => {
    dispatch(changeNbPerson(newValue));
  },
  changeNbNights: (newValue) => {
    dispatch(changeNbNights(newValue));
  },
  changePriceScale: (newValue) => {
    dispatch(changePriceScale(newValue));
  },
  changeAccomodationTypes: (newValue) => {
    dispatch(changeAccomodationTypes(newValue));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
