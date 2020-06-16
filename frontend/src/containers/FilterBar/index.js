import { connect } from 'react-redux';

import FilterBar from 'src/components/FilterBar';
import {
  changeTextfield,
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  search,
  changeMinSurface,
  changeFilterSwitch,
} from 'src/actions/search';


const mapStateToProps = (state) => ({
  cityValue: state.search.city,
  countryValue: state.search.country,
  nbPersonValue: state.search.capacity,
  nbNightsValue: state.search.nbNights,
  priceScaleValue: state.search.maxPrice,
  accomodationTypesValue: state.search.types,
  surfaceValue: state.search.minSurface,
  pipedWaterValue: state.search.pipedWater,
  electricityValue: state.search.electricity,
  animalsValue: state.search.animals,
  smockersValue: state.search.smockers,
  apmrValue: state.search.apmr,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterSwitch: (identifier) => {
    dispatch(changeFilterSwitch(identifier));
  },

  changeSurface: (newValue) => {
    dispatch(changeMinSurface(newValue));
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBar);
