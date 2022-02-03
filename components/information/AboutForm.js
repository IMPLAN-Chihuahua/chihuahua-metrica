import Title from '@components/commons/Title';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

export const AboutForm = () => {
  return (
<Box >
      <Container>
        <Box sx={theme => ({
            height:"500px",
            [theme.breakpoints.down('md')]:{
            height:"700px",
            }
        })}>
        <iframe src="https://form.123formbuilder.com/js-form-username-3887722.html?ref=https%3A%2F%2Fimplanchihuahua.org%2F&_referrer_=https%3A%2F%2Fimplanchihuahua.org%2FMision.html&_embedType_=embed.js&_iframeID_=1643832458034_267392804258335" 
        title='Formulario implan'
        width="100%" 
        height="100%" 
        frameBorder="0" 
        style={{border:0}} 
        aria-hidden="false"
        tabIndex="0">
        </iframe>
        <hr/>
            </Box>
      </Container>
    </Box>
















  );
};
