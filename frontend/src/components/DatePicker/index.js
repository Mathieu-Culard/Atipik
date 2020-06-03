import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = ({
  changeDate, dateValue, label, identifier,
}) => {
  const handleDateChange = (date, formatedDate) => {
    console.log(formatedDate);
    changeDate(identifier, date, formatedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={label}
        value={dateValue}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  changeDate: PropTypes.func.isRequired,
  dateValue: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default DatePicker;
