import { connect } from 'react-redux';
import AccomodationTypesDropdown from 'src/components/AccomodationTypesDropdown';
import { changeAccomodationTypes, selectAll, unselectAll } from 'src/actions/search';

const mapStateToProps = (state) => ({
  accomodationTypesValue: state.search.types,
  accomodationTypes: state.data.accomodationTypes,
  selectedThematics: state.search.selectedThematics,
});

const mapDispatchToProps = (dispatch) => ({
  changeAccomodationTypes: (newValue, checked, typeList) => {
    dispatch(changeAccomodationTypes(newValue, checked, typeList));
  },
  selectAll: (thematicId) => {
    dispatch(selectAll(thematicId));
  },
  unselectAll: (thematicId, types) => {
    dispatch(unselectAll(thematicId, types));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationTypesDropdown);
