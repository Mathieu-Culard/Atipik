import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { toggleOpen } from 'src/actions/UtilsActions';

const mapStateToProps = (state) => ({
  open: state.utils.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    dispatch(toggleOpen());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
