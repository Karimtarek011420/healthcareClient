import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import Register from '../Signup/Register';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // For extra-small screens
    sm: '70%', // For small screens
    md: '50%', // For medium screens
    lg: '40%', // For large screens (default)
  },
  height: {
    xs: '100%', // Adjust height for smaller screens if needed
    sm: '100%',
    md: '100%',
    lg: '100%', // Default for large screens
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '16px',
  overflowY: 'scroll',
  p: 4,
  // Custom scrollbar styles
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '10px',
    border: '3px solid #f1f1f1',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555',
  },
};

const RegisterModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Register onClose={props.handleClose} setcurrentPage={props.setcurrentPage} />
      </Box>
    </Modal>
  );
}

export default RegisterModal;
