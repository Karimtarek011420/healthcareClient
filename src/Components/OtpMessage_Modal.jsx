import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import OtpMessage from "../Signup/OtpMessage";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' }, // Responsive width
  height: { xs: 'auto', sm: '50%', md: '40%', lg: '30%' }, // Responsive height
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '25px',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
};

const OtpMessage_Modal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <OtpMessage onClose={props.handleClose} message={props.msg}/>
      </Box>
    </Modal>
  );
};

export default OtpMessage_Modal;
