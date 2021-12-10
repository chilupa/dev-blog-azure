import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@mui/material';

const Toast = ({ open, setOpen, message }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      data-testid="snackbar"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
    />
  );
};

Toast.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  severity: PropTypes.string,
  message: PropTypes.string,
};

export default Toast;
