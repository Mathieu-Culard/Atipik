import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';

import './searchPage.scss';
import ResultList from 'src/components/ResultList';
import Map from 'src/containers/Map';
import Loader from 'src/components/Loader';

const elements = [
  {
    id: 1,
    title: 'Tendre son i-mac entre 2 arbres',
    description: 'Petit coin de forêt bucolique avec i-macs suspendus. Profitez d\' un peut de tranquilité, seul ou en famille.',
    pictures: [
      'https://picsum.photos/200',
      'https://picsum.photos/201',
    ],
    country: 'France',
    city: 'semoutiers-Montsaon',
    adress: '3 Rue du val quenille',
    type: 23,
  },
  {
    id: 2,
    title: 'Apple sort le nouvel i-gloo',
    description: 'Si vous n\'êtes pas manchots, cet i-gloo est fait pour vous. Vous allez peut-être peler mais vous aller triper.',
    pictures: [
      'https://picsum.photos/202',
      'https://picsum.photos/203',
    ],
    country: 'France',
    city: 'raon aux bois',
    adress: '6 rue de la vieille ville',
    type: 13,
  },
];

const SearchPage = ({ accomodations, mapCenter, fetchMarkerPositions, loading }) => {
  useEffect(() => {
    Geocode.setApiKey('AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts');
    // eslint-disable-next-line react/prop-types
    elements.map((accomodation) => {
      fetchMarkerPositions(`${accomodation.adress} ${accomodation.city} ${accomodation.country}`, 'markerPositions');
    });
    fetchMarkerPositions(mapCenter, 'center');
  }, []);
  return (
    <div className="search-page">
      <ResultList elements={elements} />
      {loading && <Loader />}
      {!loading && <Map />}
    </div>
  );
};

SearchPage.propTypes = {
  mapCenter: PropTypes.string.isRequired,
  fetchMarkerPositions: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchPage;
