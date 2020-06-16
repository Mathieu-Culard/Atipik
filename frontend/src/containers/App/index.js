import { connect } from 'react-redux';

import { fetchServices, fetchExtras } from 'src/actions/accomodation';
import { fetchAccomodationTypes } from 'src/actions/data';
import { fetchUserInfos } from 'src/actions/user';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  modal: state.utils.modal,
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
  fetchUserInfos: () => {
    dispatch(fetchUserInfos());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
