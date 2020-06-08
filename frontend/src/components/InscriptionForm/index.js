import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '2rem',
  },
  fields: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  },
  submitButton: {
    display: 'block',
    margin: '2rem  auto',
  },
}));

const InscriptionForm = ({
  firstname,
  lastname,
  pseudo,
  email,
  password,
  confirmPassword,
  changeField,
  submitInscription,
  clearInscriptionForm,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitInscription();
  };

  useEffect(() => (clearInscriptionForm), []);

  return (
    <form action="" noValidate className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField label="Prénom" onChange={(e) => changeField(e.target.value, 'firstname')} value={firstname} />
        <TextField label="Nom" onChange={(e) => changeField(e.target.value, 'lastname')} value={lastname} />
        <TextField label="Pseudonyme" onChange={(e) => changeField(e.target.value, 'pseudo')} value={pseudo} />
        <TextField label="Email" type="email" onChange={(e) => changeField(e.target.value, 'email')} value={email} />
        <TextField label="Mot de passe" type="password" onChange={(e) => changeField(e.target.value, 'password')} value={password} />
        <TextField label="Confirmez le mot de passe" type="password" onChange={(e) => changeField(e.target.value, 'confirmPassword')} value={confirmPassword} />
      </div>
      <Button type="submit" className={classes.submitButton}>Valider l'inscription</Button>
    </form>
  );
};

InscriptionForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitInscription: PropTypes.func.isRequired,
  clearInscriptionForm: PropTypes.func.isRequired,
};

export default InscriptionForm;
