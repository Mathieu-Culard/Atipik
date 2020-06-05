/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import Item from './Item';

const useStyles = makeStyles(() => ({
  box: {
    width: '80%',
    height: '650px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const ManageAccomodationPanel = ({
  content,
  isManageAccomodationPanelOpen,
  setManageAccomodationPanel,
  checkedValues,
  changeExtrasOrServices,
  identifier,
}) => {
  const classes = useStyles();


  return (
    <Modal
      open={isManageAccomodationPanelOpen}
      onClose={() => setManageAccomodationPanel(content, '')}
      className={classes.root}
    >
      <Box component="div" className={classes.box}>

        {content.map((el) => (
          <Item key={`panelItem${el.id}`} item={el} checkedValues={checkedValues} changeExtrasOrServices={changeExtrasOrServices} identifier={identifier} />
        ))}

      </Box>
    </Modal>
  );
};

ManageAccomodationPanel.propTypes = {
  content: PropTypes.array.isRequired,
};

export default ManageAccomodationPanel;
