// ========= Map related actions
export const FETCH_MARKER_POSITIONS = 'FETCH_MARKER_POSITIONS';
export const SAVE_MARKER_POSITIONS = 'SAVE_MARKER_POSITIONS';
export const SAVE_CENTER_POSITION = 'SAVE_CENTER_POSITION';
export const RESET_MARKER_POSITIONS = 'RESET_MARKER_POSITIONS';
// ========= Map

export const resetMarkerPositions = () => ({
  type: RESET_MARKER_POSITIONS,
});

export const saveCenterPosition = (data, zoom) => ({
  type: SAVE_CENTER_POSITION,
  data,
  zoom,
});

export const fetchMarkerPositions = (adress, identifier, accomodation, typeList) => ({
  type: FETCH_MARKER_POSITIONS,
  adress,
  identifier,
  accomodation,
  typeList,
});

export const saveMarkerPositions = (data, accomodation, typeList) => ({
  type: SAVE_MARKER_POSITIONS,
  data,
  accomodation,
  typeList,
});
