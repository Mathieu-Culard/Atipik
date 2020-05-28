/* eslint-disable import/prefer-default-export */
import Geocode from 'react-geocode';

export const getMarkersPositions = (accomodations) => {
  Geocode.setApiKey('AIzaSyDgvwB0FMtMpdC6bgjDKGE-hLGdTFxEhts');
  const markersPos = accomodations.map((accomodation) => {
    const adress = accomodation.addres;
    const test = Geocode.fromAddress({ adress }).then(
      (response) => {
        console.log(`oui ${response.results[0].geometry.location}`);
      },
      (error) => {
        console.log('mer');
        console.error(error);
      },
    );
    return test;
  });

  return markersPos;
};
