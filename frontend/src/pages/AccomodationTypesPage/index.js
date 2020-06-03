import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AccomodationTypes from 'src/containers/AccomodationTypes';

const InscriptionPage = ({ setBreadcrumbs }) => {
  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
      {
        label: 'Nos hébergements',
        route: '/types',
      },
    ];
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <AccomodationTypes />
  );
};

InscriptionPage.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
};

export default InscriptionPage;
