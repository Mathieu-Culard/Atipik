/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';


const Type = ({ type, accomodationTypesValue, changeAccomodationTypes, accomodationTypes }) => {
  // contain 'checked' if the id of this item is present in the state's accomodationTypesValue field
  const checked = accomodationTypesValue.some((id) => (
    id === type.id
  ));

  const handleChange = () => {
    changeAccomodationTypes(type.id, !checked, accomodationTypes);
  };

  return (
    <div className="type">

      <input type="checkbox" id={`type-${type.id}`} className="check" checked={checked} onChange={handleChange} />
      <label htmlFor={`type-${type.id}`} className="type__input">
        <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${type.icon}`} alt="icon" className="type__icon" />
        <p className="type__name">{type.name}</p>
      </label>
    </div>
  );
};

Type.propTypes = {
  changeAccomodationTypes: PropTypes.func.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  type: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Type;
