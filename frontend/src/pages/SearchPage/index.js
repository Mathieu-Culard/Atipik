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
  clearFilters,
  typeList,
}) => {
  // resets and remakes a markerPosition list each time our results list changes
  useEffect(() => {
    resetMarkerPositions();
    accomodations.map((accomodation) => {
      fetchMarkerPositions(`${accomodation.adress} ${accomodation.city} ${accomodation.country}`, 'markerPositions', accomodation, typeList);
    });
  }, [accomodations]);

  // set the map center for the first rendering
  // clear all filters when leaving the page
  useEffect(() => {
    fetchMarkerPositions(mapCenter, 'center');
    return clearFilters;
  }, []);

  return (
    <section className="search-page">
      <FilterPanel />
      <ResultList elements={accomodations} />
      {loading && <Loader />}
      {!loading && <Map />}
    </section>
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
  clearFilters: PropTypes.func.isRequired,
};

export default SearchPage;
