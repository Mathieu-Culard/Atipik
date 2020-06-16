import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  fields: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: '50% 50%',
  },
}));

const LoginForm = ({
  email,
  changeField,
  password,
  logIn,
  openModal,
  clearConnectionForm,
  regexEmail,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn();
  };

  const isValid = () => {
    if (email === '' || !regexEmail.test(email)) return false;
    if (password === '') return false;
    return true;
  };

  useEffect(() => (clearConnectionForm), []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.fields}>
        <TextField
          id="login-panel-email"
          label="Email"
          value={email}
          onChange={(e) => changeField('email', e.target.value)}
          error={email !== '' && !regexEmail.test(email)}
          autoFocus
        />
        <TextField
          id="login-panel-password"
          label="Mot de passe"
          type="Password"
          value={password}
          onChange={(e) => changeField('password', e.target.value)}
        />
        <Button
          type="submit"
          variant="text"
          disabled={!isValid()}
        >
          Se connecter
        </Button>
        <Button onClick={() => openModal('Récupération du mot de passe', 'LostPasswordForm')}>Mot de passe oublié ?</Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  clearConnectionForm: PropTypes.func.isRequired,
  regexEmail: PropTypes.instanceOf(RegExp).isRequired,
};

export default LoginForm;
