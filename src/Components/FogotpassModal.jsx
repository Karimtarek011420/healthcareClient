import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import Forgot_password from '../Signin/Forgot_pass';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // 90% width for extra small screens
    sm: '80%', // 80% width for small screens
    md: '60%', // 60% width for medium screens
    lg: '50%', // 50% width for large screens and above
  },
  height: {
    xs: '50%', // 60% height for extra small screens
    sm: '60%', // 70% height for small screens and above
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '18px',
  boxShadow: 24,
  p: 4,
};

const ForgotpassModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Forgot_password onClose={props.handleClose} setcurrentPage={props.setcurrentPage} />
      </Box>
    </Modal>
  );
};

export default ForgotpassModal;
