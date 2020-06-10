import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MyReservations = ({ reservations }) => {
  const accomodations = {};
  useEffect(() => {
    reservations.forEach((reservation) => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/accomodation/${reservation.accomodation}`)
        .then((response) => accomodations[reservation.id] = response.data);
    });
  }, []);

  return (
    <>
      <h2>Mes Réservations</h2>
      {
        reservations.map((reservation) => (
          <p>{accomodations[reservation.accomodation].title}</p>
        ))
      }
    </>
  );
};

MyReservations.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      accomodation: PropTypes.number.isRequired,
      startAt: PropTypes.string.isRequired,
      endAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MyReservations;
