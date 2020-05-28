import React from 'react';
import GoogleMapReact from 'google-map-react';
import { getMarkersPositions } from 'src/utils';

import Marker from './Marker';
import './map.scss';

const Map = ({ elements }) => {

  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;
  // const markers = getMarkersPositions(elements);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* {
          elements.map((element) => (

       ))
        } */}
        <Marker
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
