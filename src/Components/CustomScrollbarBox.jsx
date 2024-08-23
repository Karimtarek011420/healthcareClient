import React from 'react';
import { Box } from '@mui/material';
import "./CustomScrollbarBox.css"

const CustomScrollbarBox = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        overflow: 'auto',
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
      }}
    >
      {/* Your scrollable content goes here */}
    </Box>
  );
};

export default CustomScrollbarBox;
