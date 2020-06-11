import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


import Marker from './Marker';
import './map.scss';

const Map = ({
  markerPositions, centerPosition, zoom,
}) => {
  const center = {
    lat: centerPosition.lat,
    lng: centerPosition.lng,
  };

  // const markers = getMarkersPositions(elements);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: localStorage.getItem('apiKey') }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {
          markerPositions.map((element) => (
            <Marker
              key={`${element.lat}-${element.lng}`}
              lat={element.lat}
              lng={element.lng}
              {...element}
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
  zoom: PropTypes.number.isRequired,
};

export default Map;
