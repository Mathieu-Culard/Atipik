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
    <div className="item">
      <input type="checkbox" id={`service-${item.id}`} checked={checked} onChange={handleChange} className="check" />
      <label htmlFor={`service-${item.id}`} className="item__input">
        <div className="item__input__container">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${item.icon}`} alt="icon" className="item__icon" />
          <p className="type__name">{item.name}</p>
        </div>
      </label>
    </div>
  );
};

Item.propTypes = {
  checkedValues: PropTypes.array.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  changeExtrasOrServices: PropTypes.func.isRequired,
};

export default Item;
