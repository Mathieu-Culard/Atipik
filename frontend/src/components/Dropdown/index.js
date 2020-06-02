import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  formControl: {
    minWidth: 220,
    width: '100%',
    zIndex: 0,
  },
});

const DropDown = ({ value, changeValue, label }) => {
  const classes = useStyles();

  const handleChangeValue = (evt) => {
    changeValue(evt.target.value);
  };
  // temporary
  const fillDropdowns = () => {
    const options = [];
    for (let i = 1; i <= 10; i += 1) {
      options.push(
        <MenuItem key={i} value={i}>{i}</MenuItem>,
      );
    }
    return options;
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        // labelId="demo-simple-select-outlined-label"
        // id="demo-simple-select-outlined"
        value={(value === 0) ? '' : value}
        onChange={handleChangeValue}
        label={label}
      >
        {fillDropdowns()}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  value: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};


export default DropDown;
