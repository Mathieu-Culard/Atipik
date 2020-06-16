import React from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  Button,
  Avatar,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { makeStyles } from '@material-ui/core/styles';
import './profileForm.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '60%',
    margin: 'auto',
    borderRadius: '20px',
    border: '1px solid #ccc',
    padding: '5rem',
    backgroundColor: 'rgba(255, 255, 255, .85)',
  },
  avatarContainer: {
    width: '15vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '1rem',
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  avatar: {
    width: '15vw',
    height: '15vw',
    position: 'relative',
  },
  avatarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  avatarIcon: {
    color: 'white',
    fontSize: 60,
  },
  fields: {
    display: 'grid',
    gridGap: '3rem',
    gridTemplateColumns: '1fr 1fr',
  },
  submitButton: {
    display: 'block',
    margin: '4rem auto 0 auto',
  },
  deleteButton: {
    color: '#aaa',
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
    <section>
      <form action="" noValidate className={classes.root} onSubmit={handleSubmit}>
        <label htmlFor="upload-avatar" className={`${classes.avatarContainer} profileForm__avatarContainer`}>
          <Avatar src={avatarUrl} alt="avatar" className={classes.avatar} />
          <div className={`${classes.avatarOverlay} profileForm__avatarOverlay`}>
            <PublishIcon className={classes.avatarIcon} />
          </div>
          <input
            type="file"
            id="upload-avatar"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
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
        Supprimer mon compte
      </Button>
    </section>
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
