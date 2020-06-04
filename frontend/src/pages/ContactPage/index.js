/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';

import './contactPage.scss';

const useStyles = makeStyles({
  textField: {
    width: '100%',
  },
});

const ContactPage = ({
  emailValue,
  objectValue,
  messageValue,
  changeFields,
  sendMessage,
}) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    changeFields(evt.target.id, evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  return (
    <main className="contact-page">
      <h1 className="contact-page__title">Contact</h1>
      <form className="contact-page__form" onSubmit={handleSubmit}>
        <TextField id="email" label="Email" className={classes.textField} value={emailValue} onChange={handleChange} />
        <TextField id="object" label="Objet" className={classes.textField} value={objectValue} onChange={handleChange} />
        <label className="contact-owner-form__label">
          Votre message
          <TextareaAutosize
            className={classes.textField}
            id="message"
            label="Message"
            value={messageValue}
            rowsMin={20}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="contact-page__form__submit">Envoyer</button>
      </form>
    </main>
  );
};

ContactPage.propTypes = {
  emailValue: PropTypes.string.isRequired,
  objectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  changeFields: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
export default ContactPage;
