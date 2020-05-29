import { connect } from 'react-redux';

import LoginPanel from 'src/components/LoginPanel';

import { setLoginPanel } from 'src/actions/utils';
import { changeField, logIn } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loginPanel: state.utils.loginPanel,
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setLoginPanel: (newValue) => dispatch(setLoginPanel(newValue)),
  changeField: (identifier, newValue) => {
    dispatch(changeField(identifier, newValue));
  },
  logIn: () => dispatch(logIn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPanel);
