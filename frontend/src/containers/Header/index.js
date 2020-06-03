import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { toggleOpen, setLoginPanel } from 'src/actions/utils';
import { logOut } from 'src/actions/connection';

const mapStateToProps = (state) => ({
  open: state.utils.open,
  loginPanel: state.utils.loginPanel,
  isLogged: state.connection.isLogged,
  breadcrumbs: state.utils.breadcrumbs,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => dispatch(toggleOpen()),
  setLoginPanel: (newValue) => dispatch(setLoginPanel(newValue)),
  disconnect: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
