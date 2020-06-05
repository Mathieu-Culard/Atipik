/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  item, changeExtrasOrServices, checkedValues, identifier,
}) => {
  const checked = checkedValues.some((object) => (
    object.id === item.id
  ));

  const handleChange = () => {
    changeExtrasOrServices(identifier, item, !checked);
  };
  return (
    <>
      <input type="checkbox" id={`service-${item.id}`} checked={checked} onChange={handleChange} />
      <label htmlFor={`service-${item.id}`}>
        <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${item.icon}`} alt="icon" />
        <p>{item.name}</p>
      </label>
    </>
  );
};

Item.propTypes = {
  checkedValues: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  changeExtrasOrServices: PropTypes.func.isRequired,
};

export default Item;
