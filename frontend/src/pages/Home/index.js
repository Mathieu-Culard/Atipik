import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import './home.scss';


import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';

const CustomSlider = withStyles({
  root: {
    width: '100%',
    color: '#8dd7dfl',
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: '0.6rem 0',
    minWidth: 220,
    width: '100%',
    zIndex: 0,
  },
  textField: {
    // margin: '0.6rem 0',
    width: '100%',
  },
  slider: {
    width: '100%',
  },
}));

const Home = ({
  cityValue,
  countryValue,
  nbPersonValue,
  nbNightsValue,
  priceScaleValue,
  accomodationTypesValue,
  changeCityTextfield,
  changeCountryTextfield,
  changePriceScale,
  changeNbNights,
  changeNbPerson,
  changeAccomodationTypes,
  handleSearch,
}) => {
  const classes = useStyles();

  const handlePriceScaleChange = (evt, value) => {
    changePriceScale(value);
  };
  const handleNbNightsChange = (evt) => {
    changeNbNights(evt.target.value);
  };
  const handleNbPersonChange = (evt) => {
    changeNbPerson(evt.target.value);
  };
  const handleCityChange = (evt) => {
    changeCityTextfield(evt.target.value);
  };
  const handleCountryChange = (evt) => {
    changeCountryTextfield(evt.target.value);
  };

  // temporary
  const fillDropdowns = () => {
    const options = [];
    for (let i = 0; i <= 10; i += 1) {
      options.push(
        <MenuItem key={i} value={i}>{i}</MenuItem>,
      );
    }
    return options;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  };

  return (
    // <Header />
    <main className="home">
      <section className="search">
        <h2 className="search__title">Où veux-tu aller?</h2>
        <form className="search__formular" onSubmit={handleSubmit}>
          <div className="row">
            <div className="row__item">
              <TextField id="country-input" label="Pays" className={classes.textField} size="small" value={countryValue} onChange={handleCountryChange} />
            </div>
            <div className="row__item">
              <TextField id="city-input" label="Ville" className={classes.textField} value={cityValue} onChange={handleCityChange} />
            </div>
          </div>
          <div className="row">
            <div className="row__item">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Nombre de personnes</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={(nbPersonValue === 0) ? '' : nbPersonValue}
                  onChange={handleNbPersonChange}
                  label="Nombre de personnes"
                >
                  {fillDropdowns()}
                </Select>
              </FormControl>
            </div>
            <div className="row__item">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Nombre de nuitées</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={(nbNightsValue === 0) ? '' : nbNightsValue}
                  onChange={handleNbNightsChange}
                  label="Nombre de nuitées"
                >
                  {fillDropdowns()}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="row__item">
              <Grid container spacing={0} className={classes.slider}>
                <Grid item className="slider__label" xs={2} md={12}>
                  <p>Prix</p>
                </Grid>
                <Grid item xs container direction="column" alignItems="center" className="slider__component" md={12}>
                  <Grid container alignItems="center" className="slider__marks">
                    <Grid item xs={4} className="slider__mark">
                      <p>€</p>
                    </Grid>
                    <Grid item xs={4} className="slider__mark">
                      <p>€€</p>
                    </Grid>
                    <Grid item xs={4} className="slider__mark">
                      <p>€€€</p>
                    </Grid>
                  </Grid>
                  <Grid item className="slider__bar" md={12} container xs={11}>
                    <CustomSlider
                      value={priceScaleValue}
                      onChange={handlePriceScaleChange}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="off"
                      step={1}
                      min={0}
                      max={2}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className="row__item">

              <AccomodationTypesDropdown accomodationTypesValue={accomodationTypesValue} changeAccomodationTypes={changeAccomodationTypes} />
              {/* <FormControl variant="outlined" className={`${classes.formControl} ${classes.accomodationTypes}`}>
                <InputLabel id="demo-simple-select-outlined-label">Type d'hébergement</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  multiple
                  value={accomodationTypesValue}
                  onChange={handleAccomodationTypesChange}
                  label="Type d'hébergement"
                >
                  {data.map((elt) => (
                    <MenuItem key={elt.id} value={elt.id}>{elt.name}</MenuItem>
                  ))}
                </Select>
              </FormControl> */}
            </div>
          </div>
          <div className="row">
            <button className="search__submit" type="submit">Rechercher</button>
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
  changeCountryTextfield: PropTypes.func.isRequired,
  changeCityTextfield: PropTypes.func.isRequired,
  changeNbNights: PropTypes.func.isRequired,
  changeNbPerson: PropTypes.func.isRequired,
  changePriceScale: PropTypes.func.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
};

export default Home;
