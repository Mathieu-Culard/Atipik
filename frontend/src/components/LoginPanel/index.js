import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
  },
  box: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const LoginPanel = ({
  loginPanel,
  setLoginPanel,
  email,
  changeField,
  password,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={loginPanel}
      onClose={() => setLoginPanel(false)}
      className={classes.root}
    >
      <Box component="div" className={classes.box}>
        <form>
          <TextField
            id="login-panel-email"
            label="Email"
            value={email}
            onChange={(e) => changeField('email', e.target.value)}
          />
          <TextField
            id="login-panel-password"
            label="Password"
            type="Password"
            value={password}
            onChange={(e) => changeField('password', e.target.value)}
          />
        </form>
      </Box>
    </Modal>
  );
};

LoginPanel.propTypes = {
  loginPanel: PropTypes.bool.isRequired,
  setLoginPanel: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default LoginPanel;
