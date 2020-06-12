import { connect } from 'react-redux';
import FilterPanel from 'src/components/FilterPanel';

import {
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  changeMinSurface,
  changeFilterSwitch,
  commitMaxPriceChange,
  commitMinSurfaceChange,
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
  commitMaxPriceChange: () => dispatch(commitMaxPriceChange()),
  commitMinSurfaceChange: () => dispatch(commitMinSurfaceChange()),
  changeMaxPrice: (newValue) => dispatch(changeMaxPrice(newValue)),
  changeAccomodationTypes: (v, checked, typeList) => dispatch(changeAccomodationTypes(v, checked, typeList)),
  changeMinSurface: (newValue) => dispatch(changeMinSurface(newValue)),
  changeFilterSwitch: (identifier) => dispatch(changeFilterSwitch(identifier)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterPanel);
