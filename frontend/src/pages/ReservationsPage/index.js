import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MyReservations from 'src/containers/MyReservations';
// import MyAccomodationsReservations from 'src/containers/MyAccomodationsReservations';

const InscriptionPage = ({ fetchReservations }) => {
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <>
      <MyReservations />
      {/* <MyAccomodationsReservations /> */}
    </>
  );
};

InscriptionPage.propTypes = {
  fetchReservations: PropTypes.func.isRequired,
};

export default InscriptionPage;
