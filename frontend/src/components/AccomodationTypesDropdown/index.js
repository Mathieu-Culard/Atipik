import React from 'react';
import PropTypes from 'prop-types';
import Thematic from './Thematic';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import data from 'src/data/accomodationTypes';

import { getAnchorPosition } from 'src/utils';
import './accomodationTypesDropdown.scss';

const useStyles = makeStyles({
  formControl: {
    margin: '0.6rem 0',
    minWidth: 220,
    width: '100%',
  },
  root: {
    width: '80vw',
    height: 'fit-content',
    padding: '2rem 1rem',
    // padding: '100px',
  },
});

const AccomodationTypesDropdown = ({ accomodationTypesValue, changeAccomodationTypes, selectAll }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="accomodation-types-dropdown">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Type d'hébergement</InputLabel>
        <Select
          open={false}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          multiple
          onOpen={handleClick}
          label="Type d'hébergement"
        />
      </FormControl>
      <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        onClose={handleClose}
        anchorPosition={getAnchorPosition()}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box className={classes.root}>
          <h2 className="dropdown-title">Types d'hébergements</h2>
          {data.map((thematic) => (
            <Thematic key={thematic.id} thematic={thematic} selectAll={selectAll} changeAccomodationTypes={changeAccomodationTypes} accomodationTypesValue={accomodationTypesValue} />
          ))}
        </Box>
      </Popover>
    </div>
  );
};

AccomodationTypesDropdown.propTypes = {
  selectAll: PropTypes.func.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
};

export default AccomodationTypesDropdown;
