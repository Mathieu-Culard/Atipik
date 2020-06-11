import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';
import CustomSlider from 'src/components/CustomSlider';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    height: '150px',
    gridColumn: '1 / span 2',
    boxShadow: '0 3px 3px #ccc',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '25% 15% 15% 15% 15% 15%',
    padding: '0 5rem',
  },
  gridElement: {
    margin: '.3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    listStyle: 'none',
    overflowX: 'auto',
    padding: 0,
    margin: '.3rem 1rem',
  },
  chip: {
    margin: '.1rem',
  },
  column: {
    margin: '0 .5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  commitMinSurfaceChange,
  commitMaxPriceChange,
}) => {
  const classes = useStyles();

  const onlyTypes = () => (allTypes.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.types], []));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.gridElement}>
        <AccomodationTypesDropdown />
      </div>
      <div className={classes.gridElement}>
        <TextField
          id="nb-night"
          label="Nuits"
          type="number"
          value={(nbNights === 0) ? '' : nbNights}
          onChange={(e) => changeNbNights(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className={classes.gridElement}>
        <CustomSlider
          defaultValue={0}
          valueLabelDisplay="on"
          step={10}
          max={200}
          value={maxPrice}
          changeValue={changeMaxPrice}
          commitChange={commitMaxPriceChange}
          label="Prix"
        />
      </div>
      <div className={classes.gridElement}>
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
      </div>
      <div className={classes.gridElement}>
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
      <div className={classes.gridElement}>
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
      </div>
      <div component="ul" className={`${classes.chips} ${classes.gridElement}`}>
        {types.map((id) => {
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
      </div>
      <div className={classes.gridElement}>
        <TextField
          id="nb-person"
          label="Personnes"
          type="number"
          value={(capacity === 0) ? '' : capacity}
          onChange={(e) => changeCapacity(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className={classes.gridElement}>
        <CustomSlider
          defaultValue={0}
          valueLabelDisplay="on"
          step={10}
          max={200}
          value={minSurface}
          changeValue={changeMinSurface}
          commitChange={commitMinSurfaceChange}
          label="Surface"
        />
      </div>
      <div className={classes.gridElement}>
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
      <div className={classes.gridElement}>
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
