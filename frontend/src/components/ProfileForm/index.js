import React from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  Button,
} from '@material-ui/core';
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
    margin: '2rem auto',
  },
  deleteButton: {
    color: 'red',
  },
}));

const ProfileForm = ({
  pseudo,
  firstname,
  lastname,
  password,
  confirmPassword,
  avatarUrl,
  changeField,
  submitUserModification,
  deleteAccount,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserModification();
  };

  const handleAvatarChange = (e) => {
    changeField(e.target.files[0], 'avatar');
    changeField(URL.createObjectURL(e.target.files[0], 'avatarUrl'), 'avatarUrl');
  };

  return (
    <>
      <form action="" noValidate className={classes.root} onSubmit={handleSubmit}>
        <img src={avatarUrl} alt="avatar" />
        <label htmlFor="upload-avatar">
          <input
            type="file"
            id="upload-avatar"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
          Upload
        </label>
        <div className={classes.fields}>
          <TextField label="Prénom" onChange={(e) => changeField(e.target.value, 'firstname')} value={firstname} />
          <TextField label="Nom" onChange={(e) => changeField(e.target.value, 'lastname')} value={lastname} />
          <TextField label="Pseudonyme" onChange={(e) => changeField(e.target.value, 'pseudo')} value={pseudo} />
          <TextField label="Changer de mot de passe" type="password" onChange={(e) => changeField(e.target.value, 'password')} value={password} />
          <TextField label="Confirmez le mot de passe" type="password" onChange={(e) => changeField(e.target.value, 'confirmPassword')} value={confirmPassword} />
        </div>
        <Button type="submit" className={classes.submitButton}>Modifier mes données</Button>
      </form>
      <Button
        onClick={deleteAccount}
        className={`${classes.deleteButton} ${classes.submitButton}`}
      >
        Delete my account
      </Button>
    </>
  );
};

ProfileForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitUserModification: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default ProfileForm;
