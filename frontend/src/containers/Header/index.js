import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { toggleOpen, openLoginPanel } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  open: state.utils.open,
  loginPanel: state.utils.loginPanel,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => dispatch(toggleOpen()),
  openLoginPanel: () => dispatch(openLoginPanel()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
