// ========= Map related actions
export const FETCH_MARKER_POSITIONS = 'FETCH_MARKER_POSITIONS';
export const SAVE_MARKER_POSITIONS = 'SAVE_MARKER_POSITIONS';

// ========= Map
export const fetchMarkerPositions = (adress, identifier) => ({
  type: FETCH_MARKER_POSITIONS,
  adress,
  identifier,
});

export const saveMarkerPositions = (data, identifier) => ({
  type: SAVE_MARKER_POSITIONS,
  data,
  identifier,
});
