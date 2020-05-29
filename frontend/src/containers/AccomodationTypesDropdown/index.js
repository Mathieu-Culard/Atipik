import { connect } from 'react-redux';
import AccomodationTypesDropdown from 'src/components/AccomodationTypesDropdown';
import { changeAccomodationTypes, selectAll } from 'src/actions/search';

const mapStateToProps = (state) => ({
  accomodationTypesValue: state.search.types,
  accomodationTypes: state.search.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  changeAccomodationTypes: (newValue, checked) => {
    dispatch(changeAccomodationTypes(newValue, checked));
  },
  selectAll: (thematicId) => {
    dispatch(selectAll(thematicId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationTypesDropdown);
