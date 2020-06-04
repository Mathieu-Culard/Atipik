import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import InscriptionForm from 'src/containers/InscriptionForm';

const InscriptionPage = ({ setBreadcrumbs }) => {
  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
      {
        label: 'Inscription',
        route: '/inscription',
      },
    ];
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <InscriptionForm />
  );
};

InscriptionPage.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
};

export default InscriptionPage;
