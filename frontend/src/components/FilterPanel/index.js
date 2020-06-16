import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import AccomodationTypesDropdown from 'src/containers/AccomodationTypesDropdown';
import CustomSlider from 'src/components/CustomSlider';

import './filterPanel.scss';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, .85)',
    margin: 'auto',
    borderRadius: '20px',
    height: '175px',
    gridColumn: '1 / span 2',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 2fr',
    gridGap: '10rem',
    padding: '0 5rem',
    width: '100%',
  },
  gridElement: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '175px',
    padding: '1.5rem 0',
  },
  switchElements: {
    justifyContent: 'flex-start',
  },
  switch: {
    margin: '.1rem 0',
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
    <form className={`${classes.root} filterPanel`} noValidate autoComplete="off">
      <div className={classes.gridElement}>
        <div className="types">
          <AccomodationTypesDropdown />
        </div>
        <div component="ul" className={classes.chips}>
          {types.map((id) => {
            const currentType = onlyTypes().find((t) => t.id === id);
            return (
              <li key={`type-${id}`}>
                <Chip
                  label={currentType.name}
                  className={classes.chip}
                  onDelete={() => changeAccomodationTypes(id, false, allTypes)}
                />
              </li>
            );
          })}
        </div>
      </div>
      <div className={classes.gridElement}>
        <TextField
          id="nb-night"
          label="Nuits"
          type="number"
          value={(nbNights === 0) ? '' : nbNights}
          onChange={(e) => changeNbNights(e.target.value)}
        />
        <TextField
          id="nb-person"
          label="Personnes"
          type="number"
          value={(capacity === 0) ? '' : capacity}
          onChange={(e) => changeCapacity(e.target.value)}
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
      <div className={`${classes.gridElement} ${classes.switchElements}`}>
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={pipedWater}
              onChange={() => changeFilterSwitch('pipedWater')}
              className={classes.switch}
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
              className={classes.switch}
            />
          )}
          label="Electricité"
        />
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={apmr}
              onChange={() => changeFilterSwitch('apmr')}
              className={classes.switch}
            />
          )}
          label="Accès handicapés"
        />
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={smokers}
              onChange={() => changeFilterSwitch('smokers')}
              className={classes.switch}
            />
          )}
          label="Fumeurs"
        />
        <FormControlLabel
          control={(
            <Switch
              color="primary"
              checked={animals}
              onChange={() => changeFilterSwitch('animals')}
              className={classes.switch}
            />
          )}
          label="Animaux"
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
