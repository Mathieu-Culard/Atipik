import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  setLostPasswordPanel,
  email,
  changeField,
  password,
  logIn,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginPanel(false);
    logIn();
  };

  const handleLostPassword = () => {
    setLoginPanel(false);
    setLostPasswordPanel(true);
  };

  return (
    <Modal
      open={loginPanel}
      onClose={() => setLoginPanel(false)}
      className={classes.root}
    >
      <Box component="div" className={classes.box}>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="text">Se connecter</Button>
        </form>
        <Button onClick={handleLostPassword}>Mot de passe oublié ?</Button>
      </Box>
    </Modal>
  );
};

LoginPanel.propTypes = {
  loginPanel: PropTypes.bool.isRequired,
  setLoginPanel: PropTypes.func.isRequired,
  setLostPasswordPanel: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default LoginPanel;
