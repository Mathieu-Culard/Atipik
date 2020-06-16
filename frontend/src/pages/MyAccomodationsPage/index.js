import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MyAccomodationCard from 'src/components/MyAccomodationsCard';
import './myAccomodationsPage.scss';

import background from 'src/assets/backgrounds/myAccomodationsBackground.jpg';

const MyAccomodationsPage = ({
  fetchMyAccomodations,
  myAccomodationIds,
  myAccomodations,
  deleteMyAccomodation,
  typeList,
}) => (
  <main className="my-accomodations">
    <div className="my-accomodations__cards">
      <img src={background} alt="background" className="background" />
      {myAccomodations.map((acc) => (
        <MyAccomodationCard {...acc} key={acc.id} deleteMyAccomodation={deleteMyAccomodation} typeList={typeList} />
      ))}
      <Link className="my-accomodations__new-accomodation" to="/gerer-mes-hebergements/nouvel-hebergement">
        <button type="button">Ajouter un hébergement</button>
      </Link>
    </div>
  </main>
);

MyAccomodationsPage.propTypes = {
  // fetchMyAccomodations: PropTypes.func.isRequired,
  // myAccomodationIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  myAccomodations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  deleteMyAccomodation: PropTypes.func.isRequired,
};

export default MyAccomodationsPage;
