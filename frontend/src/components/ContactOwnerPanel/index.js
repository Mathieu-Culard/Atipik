/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import './contactOwnerPanel.scss';

const useStyles = makeStyles(() => ({
  box: {
    width: '80%',
    height: '650px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const ContactOwnerPanel = ({
  changeField,
  message,
  object,
  setContactOwnerPanel,
  sendMessage,
  userId,
  accomodationId,
  closeModal,
}) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    sendMessage(message, object, userId, accomodationId);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-owner-form">
      <label className="contact-owner-form__label" htmlFor="contact-owner-object">
        Objet
        <TextareaAutosize
          className="contact-owner-form__input"
          id="contact-owner-object"
          label="Objet"
          value={object}
          onChange={(e) => changeField('userMessageObject', e.target.value)}
          autoFocus
        />
      </label>

      <label className="contact-owner-form__label">
        Votre message
        <TextareaAutosize
          className="contact-owner-form__input"
          id="contact-owner-message"
          label="Message"
          value={message}
          rowsMin={10}
          onChange={(e) => changeField('userMessage', e.target.value)}
          resize="none"
        />
      </label>

      <Button type="submit" variant="text">Envoyer</Button>
    </form>
  );
};

ContactOwnerPanel.propTypes = {
  changeField: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  // setContactOwnerPanel: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  accomodationId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ContactOwnerPanel;
