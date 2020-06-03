import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProfileForm from 'src/containers/ProfileForm';


const ProfilePage = ({ setBreadcrumbs }) => {
  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
      {
        label: 'Mon profil',
        route: '/profil',
      },
    ];
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <ProfileForm />
  );
};

ProfilePage.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
};

export default ProfilePage;
