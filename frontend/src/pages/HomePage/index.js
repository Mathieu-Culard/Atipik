import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import './home.scss';


import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';
import Dropdown from 'src/components/Dropdown';
import CustomSlider from 'src/components/CustomSlider';

const useStyles = makeStyles({
  textField: {
    width: '100%',
  },
});

const Home = ({
  cityValue,
  countryValue,
  nbPersonValue,
  nbNightsValue,
  priceScaleValue,
  accomodationTypesValue,
  changeTextfield,
  changePriceScale,
  changeNbNights,
  changeNbPerson,
  changeAccomodationTypes,
  handleSearch,
  setBreadcrumbs,
}) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    changeTextfield(evt.target.value, evt.target.id);
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    const breadcrumbs = [
      {
        label: 'Accueil',
        route: '/',
      },
    ];
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <main className="home">
      <section className="search">
        <h2 className="search__title">Où veux-tu aller?</h2>
        <form className="search__formular" onSubmit={handleSubmit}>
          <div className="row">
            <div className="row__item">
              <TextField id="country" label="Pays" className={classes.textField} size="small" value={countryValue} onChange={handleChange} />
            </div>
            <div className="row__item">
              <TextField id="city" label="Ville" className={classes.textField} value={cityValue} onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="row__item">
              <Dropdown
                value={nbPersonValue}
                changeValue={changeNbPerson}
                label="Nombre de personnes"
              />
            </div>
            <div className="row__item">
              <Dropdown
                value={nbNightsValue}
                changeValue={changeNbNights}
                label="Nombre de nuitées"
              />
            </div>
          </div>
          <div className="row">
            <div className="row__item">
              <CustomSlider
                value={priceScaleValue}
                changeValue={changePriceScale}
                step={10}
                max={300}
                label="Prix"
              />
            </div>
            <div className="row__item">
              <AccomodationTypesDropdown
                accomodationTypesValue={accomodationTypesValue}
                changeAccomodationTypes={changeAccomodationTypes}
              />
            </div>
          </div>
          <div className="row">
            <Link to="/recherche">
              <button className="search__submit" type="submit" onClick={handleSearch}>Rechercher</button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};


Home.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  cityValue: PropTypes.string.isRequired,
  countryValue: PropTypes.string.isRequired,
  nbPersonValue: PropTypes.number.isRequired,
  nbNightsValue: PropTypes.number.isRequired,
  priceScaleValue: PropTypes.number.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  changeTextfield: PropTypes.func.isRequired,
  changeNbNights: PropTypes.func.isRequired,
  changeNbPerson: PropTypes.func.isRequired,
  changePriceScale: PropTypes.func.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
};

export default Home;
