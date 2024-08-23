import Logout from './Popups/Logout';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // 90% width on extra small screens
    sm: '70%', // 70% width on small screens
    md: '50%', // 50% width on medium screens and up
  },
  height: {
    xs: 'auto', // auto height on extra small screens
    sm: 'auto', // auto height on small screens
    md: '40%', // 40% height on medium screens and up
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
};

const LogoutModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Logout onClose={props.handleClose} />
      </Box>
    </Modal>
  );
};

export default LogoutModal;
