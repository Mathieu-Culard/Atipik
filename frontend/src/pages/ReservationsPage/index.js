import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MyReservations from 'src/containers/MyReservations';
// import MyAccomodationsReservations from 'src/containers/MyAccomodationsReservations';

const InscriptionPage = ({ setBreadcrumbs, fetchReservations }) => {
  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
      {
        label: 'Mes Réservations',
        route: '/reservations',
      },
    ];
    setBreadcrumbs(breadcrumbs);
    // fetchReservations();
  }, []);

  return (
    <>
      <MyReservations />
      {/* <MyAccomodationsReservations /> */}
    </>
  );
};

InscriptionPage.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
  fetchReservations: PropTypes.func.isRequired,
};

export default InscriptionPage;
