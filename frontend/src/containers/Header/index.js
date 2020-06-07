import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logOut } from 'src/actions/connection';
import { openModal, toggleOpen } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  open: state.utils.open,
  isLogged: state.connection.isLogged,
  breadcrumbs: state.utils.breadcrumbs,
  userAccomodations: state.user.accomodations,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (title, component) => dispatch(openModal(title, component)),
  toggleOpen: () => dispatch(toggleOpen()),
  disconnect: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
