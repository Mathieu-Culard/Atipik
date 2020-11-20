import React from 'react';
import PropTypes from 'prop-types';
import { getAnchorPosition } from 'src/utils';
import './accomodationTypesDropdown.scss';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import Thematic from './Thematic';

const useStyles = makeStyles({
  formControl: {
    zIndex: 0,
    // minWidth: 150,
    width: '100%',
  },
  root: {
    width: '80vw',
    height: 'fit-content',
    padding: '2rem 1rem',
    borderRadius: '20px',
  },
  paper: {
    borderRadius: '20px',
  },
  label: {
    color: 'white !important',
    width: '80%',
  },
  outline: {
    borderColor: 'white !important',
    backgroundColor: 'white !important',
  },
});
const AccomodationTypesDropdown = ({
  accomodationTypes,
  accomodationTypesValue,
  changeAccomodationTypes,
  selectAll,
  unselectAll,
  selectedThematics,
}) => {
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
      <FormControl
        variant="outlined"
        className={classes.formControl}
        classes={{
          // root: classes.dropdown,
          // focused: classes.dropdown,
          // outlined: classes.dropdown,
          // notchedOutline: classes.outline,
        }}
      >
        <InputLabel
          id="demo-simple-select-outlined-label"
          classes={{
            root: classes.label,
            // focused: classes.dropdown,
            // formControl: classes.dropdown,
          }}
        >
          Type d'hébergement
        </InputLabel>
        <Select
          open={false}
          labelId="test"
          id="demo-simple-select-outlined"
          multiple
          onOpen={handleClick}
          label="Type d'hébergement----"
          classes={{
            // root: classes.dropdown,
            // focused: classes.dropdown,
          }}
        />
      </FormControl>
      {/* <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        onClose={handleClose}
        anchorPosition={getAnchorPosition()}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      > */}
      <Popover
        className={classes.paper}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        // anchorPosition={getAnchorPosition()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.paper,
        }}
      >
        <Box className={classes.root}>
          {/* <h2 className="dropdown-title">Types d'hébergements</h2> */}
          <div className="dropdown-content">
            {accomodationTypes.map((thematic) => {
              const isSelected = selectedThematics.some((SelectedId) => (SelectedId === thematic.id));
              return (
                <Thematic
                  accomodationTypes={accomodationTypes}
                  key={thematic.id}
                  thematic={thematic}
                  selectAll={selectAll}
                  isSelected={isSelected}
                  unselectAll={unselectAll}
                  changeAccomodationTypes={changeAccomodationTypes}
                  accomodationTypesValue={accomodationTypesValue}
                />
              );
            })}
          </div>
        </Box>
      </Popover>
    </div>
  );
};

AccomodationTypesDropdown.propTypes = {
  selectAll: PropTypes.func.isRequired,
  accomodationTypesValue: PropTypes.array.isRequired,
  changeAccomodationTypes: PropTypes.func.isRequired,
  accomodationTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  unselectAll: PropTypes.func.isRequired,
  selectedThematics: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AccomodationTypesDropdown;
