import Login from "../Signin/Login";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // 90% width on extra-small screens (mobile)
    sm: '70%', // 70% width on small screens
    md: '50%', // 50% width on medium screens and above
  },
  height: {
    xs: '90%', // 90% height on extra-small screens
    sm: '80%', // 80% height on small screens
    md: '80%', // 70% height on medium screens and above
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '18px',
  boxShadow: 24,
  p: {
    xs: 2, // smaller padding on mobile
    md: 4, // default padding on larger screens
  },
  overflowY: 'scroll',
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

const LoginModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Login onClose={props.handleClose} setcurrentPage={props.setcurrentPage} />
      </Box>
    </Modal>
  );
}

export default LoginModal;
