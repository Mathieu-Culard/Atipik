import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import './customSlider.scss';

const MUISlider = withStyles({
  root: {
    width: '100%',
    color: '#8dd7dfl',
  },
  thumb: {
    border: '2px solid currentColor',
    backgroundColor: '#fff',
    background: '#fff',
    marginTop: -15,
    marginLeft: -15,
    height: 30,
    width: 30,
  },
  valueLabel: {
    zIndex: 0,
    left: 'calc(-50% + 10px)',
    top: 8,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
})(Slider);

const useStyles = makeStyles({
  slider: {
    width: '100%',
  },
});

const CustomSlider = ({
  value,
  changeValue,
  step,
  max,
  label,
}) => {
  const classes = useStyles();

  const handleChangeValue = (evt, newValue) => {
    changeValue(newValue);
  };

  return (
    <Grid container spacing={0} className={classes.slider}>
      <Grid item className="slider__label" xs={2} sm={12}>
        <p>{label}</p>
      </Grid>
      <Grid item xs container direction="column" alignItems="center" className="slider__component" sm={12}>
        <Grid item className="slider__bar" sm={12} container xs={11}>
          <MUISlider
            value={value}
            onChange={handleChangeValue}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={step}
            min={0}
            max={max}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

CustomSlider.propTypes = {
  value: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomSlider;
