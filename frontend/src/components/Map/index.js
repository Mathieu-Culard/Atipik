import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


import Marker from './Marker';
import './map.scss';

const Map = ({
  markerPositions, centerPosition,
}) => {
 
  const center = {
    lat: centerPosition.lat,
    lng: centerPosition.lng,
  };

  const zoom = 10;
  // const markers = getMarkersPositions(elements);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {
          markerPositions.map((element) => (
            <Marker
              lat={element.lat}
              lng={element.lng}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  markerPositions: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  centerPosition: PropTypes.object.isRequired,
};

export default Map;
