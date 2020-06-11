import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logOut } from 'src/actions/connection';
import { openModal, toggleOpen, openSuccessSnackbar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  open: state.utils.open,
  isLogged: state.connection.isLogged,
  breadcrumbs: state.utils.breadcrumbs,
  userAccomodations: state.user.accomodations,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (title, component) => dispatch(openModal(title, component)),
  toggleOpen: () => dispatch(toggleOpen()),
  disconnect: () => dispatch(logOut()),
  openSuccessSnackbar: (message) => dispatch(openSuccessSnackbar(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
