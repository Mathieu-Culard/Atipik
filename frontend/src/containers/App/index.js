import { connect } from 'react-redux';

import { fetchServices, fetchExtras } from 'src/actions/accomodation';
import { fetchAccomodationTypes } from 'src/actions/data';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  //TODO
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccomodationTypes: () => {
    dispatch(fetchAccomodationTypes());
  },
  fetchServices: () => {
    dispatch(fetchServices());
  },
  fetchExtras: () => {
    dispatch(fetchExtras());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
