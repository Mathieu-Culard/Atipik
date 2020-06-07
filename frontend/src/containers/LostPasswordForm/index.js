import { connect } from 'react-redux';

import LostPasswordForm from 'src/components/LostPasswordForm';

import { changeContactFields, resetPassword, resetContactMessage } from 'src/actions/contact';

const mapStateToProps = (state) => ({
  email: state.contact.email,
  lostPasswordPanel: state.utils.lostPasswordPanel,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (newValue) => {
    dispatch(changeContactFields('email', newValue));
  },
  resetPassword: () => dispatch(resetPassword()),
  resetContactMessage: () => dispatch(resetContactMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LostPasswordForm);
