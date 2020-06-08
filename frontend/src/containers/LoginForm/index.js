import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { changeConnectionField, logIn, clearConnectionForm } from 'src/actions/connection';
import { openModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  email: state.connection.email,
  password: state.connection.password,
  regexEmail: state.utils.regexEmail,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (identifier, newValue) => {
    dispatch(changeConnectionField(identifier, newValue));
  },
  logIn: () => dispatch(logIn()),
  openModal: (title, component) => dispatch(openModal(title, component)),
  clearConnectionForm: () => dispatch(clearConnectionForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
