import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './searchPage.scss';
import ResultList from 'src/components/ResultList';
import Map from 'src/containers/Map';
import Loader from 'src/components/Loader';
import FilterPanel from 'src/containers/FilterPanel';

const SearchPage = ({
  accomodations,
  mapCenter,
  fetchMarkerPositions,
  loading,
  resetMarkerPositions,
  setBreadcrumbs,
  clearFilters,
}) => {
  // resets and remakes a markerPosition list each time our results list changes
  useEffect(() => {
    resetMarkerPositions();
    accomodations.map((accomodation) => {
      fetchMarkerPositions(`${accomodation.adress} ${accomodation.city} ${accomodation.country}`, 'markerPositions');
    });
  }, [accomodations]);

  // set the map center for the first rendering
  useEffect(() => {
    fetchMarkerPositions(mapCenter, 'center');
  }, []);

  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
      {
        label: 'Recherche',
        route: '#',
      },
    ];
    setBreadcrumbs(breadcrumbs);
    return clearFilters;
  }, []);

  return (
    <div className="search-page">
      <FilterPanel />
      <ResultList elements={accomodations} />
      {loading && <Loader />}
      {!loading && <Map />}
    </div>
  );
};

SearchPage.propTypes = {
  mapCenter: PropTypes.string.isRequired,
  fetchMarkerPositions: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  resetMarkerPositions: PropTypes.func.isRequired,
  accomodations: PropTypes.arrayOf(
    PropTypes.shape({
      capacity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      adress: PropTypes.string.isRequired,
      type: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  ).isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
};

export default SearchPage;
