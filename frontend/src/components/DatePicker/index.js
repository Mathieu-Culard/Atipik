import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const DatePicker = ({
  changeDate, dateValue, label, identifier,
}) => {
  const handleDateChange = (date, formatedDate) => {
    // console.log(formatedDate);
    changeDate(identifier, date, formatedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className="date-picker"
        size="small"
        disableToolbar
        variant="inline"
        disablePast
        inputVariant="filled"
        format="dd/MM/yyyy"
        margin="normal"
        label={label}
        value={dateValue === '' ? null : dateValue}
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
  dateValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  label: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default DatePicker;
