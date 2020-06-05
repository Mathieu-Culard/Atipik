import { connect } from 'react-redux';

import LostPasswordPanel from 'src/components/LostPasswordPanel';

import { setLostPasswordPanel } from 'src/actions/utils';
import { changeContactFields, resetPassword } from 'src/actions/contact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  lostPasswordPanel: state.utils.lostPasswordPanel,
});

const mapDispatchToProps = (dispatch) => ({
  setLostPasswordPanel: (newValue) => dispatch(setLostPasswordPanel(newValue)),
  changeEmail: (newValue) => {
    dispatch(changeContactFields('email', newValue));
  },
  resetPassword: () => dispatch(resetPassword()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LostPasswordPanel);
