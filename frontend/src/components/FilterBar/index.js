import React from 'react';
import PropTypes from 'prop-types';

import CustomSlider from 'src/components/CustomSlider';
import Dropdown from 'src/components/Dropdown';
import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';
import CustomSwitch from 'src/components/CustomSwitch';
import './filterBar.scss';

const FilterBar = ({
  surfaceValue,
  nbPersonValue,
  nbNightsValue,
  priceScaleValue,
  accomodationTypesValue,
  changeSurface,
  changePriceScale,
  changeNbNights,
  changeNbPerson,
  changeAccomodationTypes,
  pipedWaterValue,
  electricityValue,
  animalsValue,
  smockersValue,
  apmrValue,
  changeFilterSwitch,
}) => (
    <section className="filter-bar">
      <div className="filter-bar__dropdowns">
        <div className="row">
          <div className="filter-bar__dropdown-item">
            <Dropdown
              value={nbPersonValue}
              changeValue={changeNbPerson}
              label="Nombre de personnes"
            />
          </div>
          <div className="filter-bar__dropdown-item">
            <Dropdown
              value={nbNightsValue}
              changeValue={changeNbNights}
              label="Nombre de nuitées"
            />
          </div>
        </div>
        <div className="filter-bar__dropdown-item">
          <AccomodationTypesDropdown
            accomodationTypesValue={accomodationTypesValue}
            changeAccomodationTypes={changeAccomodationTypes}
          />
        </div>
      </div>
      <div className="filter-bar__slider-item">
        <CustomSlider
          value={priceScaleValue}
          changeValue={changePriceScale}
          step={10}
          max={300}
          label="Prix"
        />
      </div>
      <div className="filter-bar__slider-item">
        <CustomSlider
          value={surfaceValue}
          changeValue={changeSurface}
          step={10}
          max={100}
          label="Surface"
        />
      </div>
      <div className="filter-bar__switch-item">
        <CustomSwitch
          value={pipedWaterValue}
          changeValue={changeFilterSwitch}
          label="Eau courante"
          identifier="pipedWater"
        />
      </div>
      <div className="filter-bar__switch-item">
        <CustomSwitch
          value={electricityValue}
          changeValue={changeFilterSwitch}
          label="Electricité"
          identifier="electricity"
        />
      </div>
      <div className="filter-bar__switch-item">
        <CustomSwitch
          value={animalsValue}
          changeValue={changeFilterSwitch}
          label="Animaux"
          identifier="animals"
        />
      </div>
      <div className="filter-bar__switch-item">
        <CustomSwitch
          value={smockersValue}
          changeValue={changeFilterSwitch}
          label="Fumeurs"
          identifier="smockers"
        />
      </div>
      <div className="filter-bar__switch-item">
        <CustomSwitch
          value={apmrValue}
          changeValue={changeFilterSwitch}
          label="APRM"
          identifier="apmr"
        />
      </div>
    </section>
  );

FilterBar.propTypes = {
  surfaceValue: PropTypes.number.isRequired,
  nbPersonValue: PropTypes.number.isRequired,
  nbNightsValue: PropTypes.number.isRequired,
  priceScaleValue: PropTypes.number.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  animalsValue: PropTypes.bool.isRequired,
  smockersValue: PropTypes.bool.isRequired,
  electricityValue: PropTypes.bool.isRequired,
  pipedWaterValue: PropTypes.bool.isRequired,
  apmrValue: PropTypes.bool.isRequired,
  changeFilterSwitch: PropTypes.func.isRequired,
  changeNbNights: PropTypes.func.isRequired,
  changeNbPerson: PropTypes.func.isRequired,
  changePriceScale: PropTypes.func.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
  changeSurface: PropTypes.func.isRequired,
};

export default FilterBar;
