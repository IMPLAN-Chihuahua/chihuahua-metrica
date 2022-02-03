import { Box, Typography } from '@mui/material';
import React from 'react';
import style from '../../styles/AboutTop.module.css';
const AboutTop = () => {
  return (
  <>

    <Box sx={{
        backgroundColor: '#263044',
        height: '50%',
        justifyContent:'center',
        textAlign:'center',
    }}>
        <Typography variant='h1' sx={{
          mt: "6%",
          mb: "6%",
          color: "white",
          
        }}>IMPLAN</Typography>
    
    </Box>
  </>);
};

export default AboutTop;
