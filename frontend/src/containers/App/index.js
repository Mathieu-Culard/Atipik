import { connect } from 'react-redux';
import { fetchAccomodationTypes } from 'src/actions/search';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  //TODO
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccomodationTypes: () => {
    dispatch(fetchAccomodationTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
