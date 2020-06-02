import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    height: '150px',
    gridColumn: '1 / span 2',
    boxShadow: '0 3px 3px #ccc',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  formControl: {
    minWidth: '100px',
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: '.2rem',
  },
  chip: {
    margin: '.1rem',
  },
  column: {
    margin: '0 .5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const FilterPanel = ({
  allTypes,
  types,
  capacity,
  nbNights,
  maxPrice,
  minSurface,
  pipedWater,
  electricity,
  animals,
  smokers,
  apmr,
  changeCapacity,
  changeNbNights,
  changeMaxPrice,
  changeAccomodationTypes,
  changeMinSurface,
  changeFilterSwitch,
}) => {
  const classes = useStyles();

  const onlyTypes = () => (allTypes.reduce((accumulator, currentValue) => [ ...accumulator, ...currentValue.types ], []));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.column}>
        <AccomodationTypesDropdown />
        <Paper component="ul" className={classes.chips}>
          { types.map((id) => {
            const currentType = onlyTypes().find((t) => t.id === id);
            return (
              <li key={`type-${id}`}>
                <Chip
                  label={currentType.name}
                  className={classes.chip}
                  onDelete={() => changeAccomodationTypes(id, false)}
                />
              </li>
            );
          })}
        </Paper>
      </div>
      <div className={classes.column}>
        <TextField
          id="nb-person"
          label="Personnes"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={capacity}
          onChange={(e) => changeCapacity(e.target.value)}
        />
        <TextField
          id="nb-night"
          label="Nuits"
          InputLabelProps={{ shrink: true }}
          type="number"
          value={nbNights}
          onChange={(e) => changeNbNights(e.target.value)}
        />
      </div>
      <div className={classes.column}>
        <Typography>Prix</Typography>
        <Slider
          defaultValue={0}
          valueLabelDisplay="on"
          step={10}
          min={0}
          max={200}
          value={maxPrice}
          onChange={(e, newValue) => changeMaxPrice(newValue)}
        />
        <Typography>Surface</Typography>
        <Slider
          defaultValue={0}
          valueLabelDisplay="on"
          step={10}
          min={0}
          max={200}
          value={minSurface}
          onChange={(e, newValue) => changeMinSurface(newValue)}
        />
      </div>
      <div className={classes.column}>
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={pipedWater}
              onChange={() => changeFilterSwitch('pipedWater')}
            />
          )}
          label="Eau courante"
        />
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={electricity}
              onChange={() => changeFilterSwitch('electricity')}
            />
          )}
          label="Electricité"
        />
      </div>
      <div className={classes.column}>
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={animals}
              onChange={() => changeFilterSwitch('animals')}
            />
          )}
          label="Animaux"
        />
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={smokers}
              onChange={() => changeFilterSwitch('smokers')}
            />
          )}
          label="Fumeurs"
        />
      </div>
      <div className={classes.column}>
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={apmr}
              onChange={() => changeFilterSwitch('apmr')}
            />
          )}
          label="Accès handicapés"
        />
      </div>
    </form>
  );
};

FilterPanel.propTypes = {
  allTypes: PropTypes.arrayOf(
    PropTypes.shape({
      types: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          icon: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  capacity: PropTypes.number.isRequired,
  nbNights: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  minSurface: PropTypes.number.isRequired,
  pipedWater: PropTypes.bool.isRequired,
  electricity: PropTypes.bool.isRequired,
  animals: PropTypes.bool.isRequired,
  smokers: PropTypes.bool.isRequired,
  apmr: PropTypes.bool.isRequired,
  changeCapacity: PropTypes.func.isRequired,
  changeNbNights: PropTypes.func.isRequired,
  changeMaxPrice: PropTypes.func.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
  changeMinSurface: PropTypes.func.isRequired,
  changeFilterSwitch: PropTypes.func.isRequired,
};

export default FilterPanel;
