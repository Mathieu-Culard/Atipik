import { connect } from 'react-redux';

import App from 'src/components/App';

import { checkLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  //TODO
});

const mapDispatchToProps = (dispatch) => ({
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
