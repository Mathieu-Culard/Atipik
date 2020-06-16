import { connect } from 'react-redux';
import ProfileForm from 'src/components/ProfileForm';

import {
  changeUserField,
  submitUserModification,
  deleteAccount,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  password: state.user.password,
  confirmPassword: state.user.confirmPassword,
  avatar: state.user.avatar,
  avatarUrl: state.user.avatarUrl,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, identifier) => dispatch(changeUserField(newValue, identifier)),
  submitUserModification: () => dispatch(submitUserModification()),
  deleteAccount: () => dispatch(deleteAccount()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);
