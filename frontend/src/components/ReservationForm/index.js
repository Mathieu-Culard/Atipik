/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'src/components/DatePicker';

const ReservationForm = (
  openModal,
  isLogged,
  sendReservation,
  changeDate,
  dateFromFormated,
  dateToFormated,
  dateFrom,
  dateTo,
  accomodationId,
) => {
  const handleReservationSubmit = (evt) => {
    evt.preventDefault();
    if (!isLogged) {
      openModal('Veuillez vous connecter avant de reserver', 'LoginForm');
    }
    else {
      sendReservation(dateToFormated, dateFromFormated, accomodationId);
    }
  };

  return (
    <form className="mobile-reservation" onSubmit={handleReservationSubmit}>
      <h2 className="mobile-reservation__title">Je souhaite partir</h2>
      <div className="mobile-reservation-form__form">
        <label className="mobile-reservation__form__input">
          <p>du</p>
          <DatePicker changeDate={changeDate} dateValue={dateFrom} label="Date d'arrivée" identifier="dateFrom" />
        </label>
        <label className="mobile-reservation__form__input">
          <p>au</p>
          <DatePicker changeDate={changeDate} dateValue={dateTo} label="Date de départ" identifier="dateTo" />
        </label>
      </div>
      <button type="submit" className="mobile-reservation__submit">
        Reservez
      </button>
    </form>
  );
};

export default ReservationForm;
