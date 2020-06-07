import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({
  email,
  changeField,
  password,
  logIn,
  openModal,
  clearConnectionForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn();
  };

  useEffect(() => (clearConnectionForm), []);

  return (
    <>
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
      <Button onClick={() => openModal('Récupération du mot de passe', 'LostPasswordForm')}>Mot de passe oublié ?</Button>
    </>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  clearConnectionForm: PropTypes.func.isRequired,
};

export default LoginForm;
