
import React from 'react';
import PropTypes from 'prop-types';
import Type from './Type';

const Thematic = ({
  accomodationTypes,
  thematic,
  accomodationTypesValue,
  changeAccomodationTypes,
  selectAll,
  unselectAll,
  isSelected,
}) => {
  const handleClick = () => {
    if (!isSelected) {
      selectAll(thematic.id);
    }
    else {
      unselectAll(thematic.id, accomodationTypes);
    }
  };
  const btnClass=isSelected ? 'thematic__btn--active' : 'thematic__btn'
  return (
    <div className="thematic">
      <div className="thematic__head">
        <h2 className="thematic__name">{thematic.name}</h2>
        {/* {isSelected && <button type="button" className="thematic__btn--active" onClick={handleClick}>Tout désélectionner</button>}
        {!isSelected && <button type="button" className="thematic__btn" onClick={handleClick}>Tout sélectionner</button>} */}
        <button type="button" className={btnClass} onClick={handleClick}>Tout sélectionner</button>
      </div>
      <div className="thematic__items">
        {thematic.types.map((type) => (
          <Type
            key={type.id}
            type={type}
            accomodationTypesValue={accomodationTypesValue}
            changeAccomodationTypes={changeAccomodationTypes}
            accomodationTypes={accomodationTypes}
          />
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
  unselectAll: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  accomodationTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Thematic;
