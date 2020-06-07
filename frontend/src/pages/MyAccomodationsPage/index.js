import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MyAccomodationCard from 'src/components/MyAccomodationsCard';
import './myAccomodationsPage.scss';

// ================fake data
// const accomodation = {
//   id: 1,
//   pictures: [
//     'Igloo.jpg',
//     'Igloo.jpeg',
//   ],
//   title: 'Tente tout confort',
//   capacity: 3,
//   type: 3,
//   price: 50,
//   city: 'Toulouse',
//   country: 'France',
//   surface: 20,
//   electricity: true,
//   pipedWater: true,
//   accessibility: false,
//   smokers: true,
//   animals: true,
//   facebookLink: '',
//   instagramLink: 'https://instagram.com',
//   services: [2, 0, 4],
//   extras: [0, 1, 2, 3, 4, 5],
//   user: {
//     id: 1,
//     avatar: 'Igloo.jpeg',
//     pseudo: 'Jean-Mich\'',
//   },
// };

// ================fake data
const MyAccomodationsPage = ({ fetchMyAccomodations, myAccomodationIds, myAccomodations, deleteMyAccomodation }) => {
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    myAccomodationIds.map((id) => {
      fetchMyAccomodations(id);
    });
  }, []);
  return (
    <main className="my-accomodations">

      {myAccomodations.map((acc) => (
        <MyAccomodationCard {...acc} key={acc.id} deleteMyAccomodation={deleteMyAccomodation} />
      ))}
      {/* <MyAccomodationCard {...accomodation} />
      <MyAccomodationCard {...accomodation} />
      <MyAccomodationCard {...accomodation} /> */}
      <Link className="my-accomodations__new-accomodation" to="/gerer-mes-hebergements/nouvel-hebergement">
        <button type="button">Ajouter un hébergement</button>
      </Link>
    </main>
  );
};

MyAccomodationsPage.propTypes = {
  fetchMyAccomodations: PropTypes.func.isRequired,
  myAccomodationIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  myAccomodations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  deleteMyAccomodation: PropTypes.func.isRequired,
};

export default MyAccomodationsPage;
