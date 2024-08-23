import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import My_Account_Delete from "./My_Account/My_Account_Delete";

function My_Account_Delete_Modal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "90%", // 90% width on small screens
      sm: "70%", // 70% width on medium screens
      md: "45%", // 50% width on larger screens
    },
    height: {
      xs: "60%", // 80% height on small screens
      sm: "60%", // 70% height on medium screens
      md: "35%", // 70% height on larger screens
    },
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "18px",
    boxShadow: 24,
    p: {
      xs: 2, // 2 units padding on small screens
      sm: 3, // 3 units padding on medium screens
      md: 4, // 4 units padding on larger screens
    },
  };

  return (
    <Modal
        open={props.open2}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <My_Account_Delete onClose={props.handleClose} />
      </Box>
    </Modal>
  );
}

export default My_Account_Delete_Modal;
