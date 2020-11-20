import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './searchPage.scss';
import ResultList from 'src/components/ResultList';
import Map from 'src/containers/Map';
import Loader from 'src/components/Loader';
import FilterPanel from 'src/containers/FilterPanel';
import { Map as MapIcon, Sliders as SlidersIcon, List as ListIcon } from 'react-feather';

const SearchPage = ({
  accomodations,
  mapCenter,
  fetchMarkerPositions,
  loading,
  resetMarkerPositions,
  clearFilters,
  typeList,
  displayList,
  displayMap,
  displayFilter,
  showMap,
  showFilter,
  showAll,
  showList,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    if (width < 760) {
      showList();
    }
    else {
      showAll();
    }
  }, []);

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
    // return clearFilters;
  }, []);

  return (
    <>

      <section className="search-page">
        <div className="select-panel">
          {!displayMap && (
            <button className="select-panel__btn" type="submit" onClick={showMap}>
              <MapIcon />
            </button>
          )}
          {!displayList && (
            <button className="select-panel__btn" type="submit" onClick={showList}>
              <ListIcon />
            </button>
          )}
          {!displayFilter && (
            <button className="select-panel__btn" type="submit" onClick={showFilter}>
              <SlidersIcon />
            </button>
          )}
        </div>
        <div className="background" />
        {displayFilter && <FilterPanel />}
        {displayList && <ResultList elements={accomodations} />}
        {displayMap && loading && <Loader />}
        {displayMap && !loading && <Map />}
      </section>
    </>
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
  showMap: PropTypes.func.isRequired,
  showFilter: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showList: PropTypes.func.isRequired,
  displayList: PropTypes.bool.isRequired,
  displayMap: PropTypes.bool.isRequired,
  displayFilter: PropTypes.bool.isRequired,
  typeList: PropTypes.array.isRequired,
};

export default SearchPage;
