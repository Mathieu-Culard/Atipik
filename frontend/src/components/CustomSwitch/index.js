import React from 'react';
import PropTypes from 'prop-types';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const CustomSwitch = ({
  changeValue, value, label, identifier,
}) => {
  const handleChangeValue = () => {
    changeValue(identifier);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={value}
          control={<Switch color="primary" checked={value} onChange={handleChangeValue} />}
          label={label}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
};

CustomSwitch.propTypes = {
  changeValue: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default CustomSwitch;
