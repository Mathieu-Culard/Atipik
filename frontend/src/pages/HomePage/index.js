import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import './home.scss';

import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';
import CustomSlider from 'src/components/CustomSlider';
import AccomodationTypes from 'src/containers/AccomodationTypes';

import background from 'src/assets/backgrounds/homeBackground2.png';

const style = (theme) => (
  {
    textField: {
      width: '100%',
      color: 'white',
    },
    cssLabel: {
      color: 'white',
    },
    cssInput: {
      color: 'white',
      borderColor: 'white',
    },
    cssFocused: {
      '&$cssLabel': {
        color: '#fe922d !important',
      },
      color: 'white !important',
      '&$cssFocused': {
        '&::after': {
          borderBottomColor: '#fe922d !important',
        },
      },
    },
    underline: {
      '&::before': {
        borderWidth: '1px',
        borderBottomColor: 'white !important',
      },
    },
  }
);

const useStyles = makeStyles(style);

const Home = ({
  cityValue,
  countryValue,
  nbPersonValue,
  nbNightsValue,
  priceScaleValue,
  accomodationTypesValue,
  changeTextfield,
  changePriceScale,
  // changeNbNights,
  // changeNbPerson,
  changeAccomodationTypes,
  handleSearch,
  commitMaxPriceChange,
}) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    changeTextfield(evt.target.value, evt.target.id);
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    handleSearch();
  };

  return (
    <main className="home">
      <img src={background} alt="background" className="background" />
      <section className="search">
        <h2 className="search__title">Où veux-tu aller?</h2>
        <form className="search__formular" onSubmit={handleSubmit}>
          <div className="row">
            <div className="row__item">
              <TextField
                id="country"
                variant="standard"
                // disableUnderline={false}
                label="Pays"
                className={classes.textField}
                size="small"
                value={countryValue}
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssInput,
                    focused: classes.cssFocused,
                    underline: classes.underline,
                  },
                }}
              />
            </div>
            <div className="row__item">
              <TextField
                id="city"
                label="Ville"
                className={classes.textField}
                value={cityValue}
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssInput,
                    focused: classes.cssFocused,
                    underline: classes.underline,
                  },
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="row__item">
              {/* <Dropdown
                value={nbPersonValue}
                changeValue={changeNbPerson}
                label="Nombre de personnes"
              /> */}
              <TextField
                // variant="outlined"
                id="capacity"
                label="Capacité"
                type="number"
                className={classes.textField}
                // className={classes.textField}
                value={(nbPersonValue === 0) ? '' : nbPersonValue}
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssInput,
                    focused: classes.cssFocused,
                    underline: classes.underline,
                  },
                }}
              />
            </div>
            <div className="row__item">
              {/* <Dropdown
                value={nbNightsValue}
                changeValue={changeNbNights}
                label="Nombre de nuitées"
              /> */}
              <TextField
                // variant="outlined"
                id="nbNights"
                label="Nombre de nuitées"
                type="number"
                className={classes.textField}
                // className={classes.textField}
                value={(nbNightsValue === 0) ? '' : nbNightsValue}
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssInput,
                    focused: classes.cssFocused,
                    underline: classes.underline,
                  },
                }}

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
                commitChange={commitMaxPriceChange}
              />
            </div>
            <div className="row__item">
              <AccomodationTypesDropdown
                accomodationTypesValue={accomodationTypesValue}
                changeAccomodationTypes={changeAccomodationTypes}
              />
            </div>
          </div>
          {/* <div className="row"> */}
          <Link to="/recherche">
            <button className="search__submit" type="submit" onClick={handleSearch}>Rechercher</button>
          </Link>
          {/* </div> */}
        </form>
      </section>
      <section className="accomodation-types">
        <AccomodationTypes />
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
  // changeNbNights: PropTypes.func.isRequired,
  // changeNbPerson: PropTypes.func.isRequired,
  changePriceScale: PropTypes.func.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
};

export default Home;
