import { connect } from 'react-redux';

import LoginPanel from 'src/components/LoginPanel';

import { setLoginPanel } from 'src/actions/utils';
import { changeConnectionField, logIn } from 'src/actions/connection';

const mapStateToProps = (state) => ({
  loginPanel: state.utils.loginPanel,
  email: state.connection.email,
  password: state.connection.password,
});

const mapDispatchToProps = (dispatch) => ({
  setLoginPanel: (newValue) => dispatch(setLoginPanel(newValue)),
  changeField: (identifier, newValue) => {
    dispatch(changeConnectionField(identifier, newValue));
  },
  logIn: () => dispatch(logIn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPanel);
