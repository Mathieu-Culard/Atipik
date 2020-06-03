import { connect } from 'react-redux';
import FilterPanel from 'src/components/FilterPanel';

import {
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  changeMinSurface,
  changeFilterSwitch,
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  allTypes: state.data.accomodationTypes,
  types: state.search.types,
  capacity: state.search.capacity,
  nbNights: state.search.nbNights,
  maxPrice: state.search.maxPrice,
  minSurface: state.search.minSurface,
  pipedWater: state.search.pipedWater,
  electricity: state.search.electricity,
  animals: state.search.animals,
  smokers: state.search.smokers,
  apmr: state.search.apmr,
});

const mapDispatchToProps = (dispatch) => ({
  changeCapacity: (newValue) => dispatch(changeCapacity(newValue)),
  changeNbNights: (newValue) => dispatch(changeNbNights(newValue)),
  changeMaxPrice: (newValue) => dispatch(changeMaxPrice(newValue)),
  changeAccomodationTypes: (v, checked) => dispatch(changeAccomodationTypes(v, checked)),
  changeMinSurface: (newValue) => dispatch(changeMinSurface(newValue)),
  changeFilterSwitch: (identifier) => dispatch(changeFilterSwitch(identifier)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterPanel);
