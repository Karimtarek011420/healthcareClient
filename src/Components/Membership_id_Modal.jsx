import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Member_id from './Popups/Member_id';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // 90% width on extra-small screens
    sm: '75%', // 75% width on small screens
    md: '60%', // 60% width on medium screens
    lg: '50%', // 50% width on large screens
  },
  height: {
    xs: 'auto', // Auto height on extra-small screens to fit content
    sm: 'auto', // Auto height on small screens
    md: 'auto', // Auto height on medium screens
    lg: '50%', // 50% height on large screens
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '25px',
  boxShadow: 24,
  p: {
    xs: 2, // Smaller padding on extra-small screens
    sm: 3, // Medium padding on small screens
    md: 4, // Larger padding on medium and above screens
  },
};

const Membership_id_Modal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Member_id onClose={props.handleClose} />
      </Box>
    </Modal>
  );
}

export default Membership_id_Modal;
