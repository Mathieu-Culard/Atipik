import React from 'react';
import PropTypes from 'prop-types';
import Type from './Type';

const Thematic = ({ thematic, accomodationTypesValue, changeAccomodationTypes, selectAll }) => {

  const handleClick = () => {
    selectAll(thematic.id);
  };

  return (
    <div className="thematic">
      <div className="thematic__head">
        <h2 className="thematic__name">{thematic.name}</h2>
        <button type="button" className="thematic__btn" onClick={handleClick}>Tout selectionner</button>
      </div>
      <div className="thematic__items">
        {thematic.types.map((type) => (
          <Type key={type.id} type={type} accomodationTypesValue={accomodationTypesValue} changeAccomodationTypes={changeAccomodationTypes} />
        ))}
      </div>
    </div>
  );
};

Thematic.propTypes = {
  selectAll: PropTypes.func.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
  thematic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Thematic;
