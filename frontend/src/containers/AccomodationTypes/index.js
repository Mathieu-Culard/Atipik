import { connect } from 'react-redux';
import AccomodationTypes from 'src/components/AccomodationTypes';

const mapStateToProps = (state) => ({
  types: state.data.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationTypes);
