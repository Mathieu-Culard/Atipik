import { connect } from 'react-redux';
import { fetchAccomodationTypes } from 'src/actions/search';
import { fetchServices, fetchExtras } from 'src/actions/accomodation';
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
