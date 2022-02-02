import React from 'react';
import {Box, Container} from '@mui/material'
import Title from '@components/commons/Title';

const AboutDescription = () => {
  return (
    <Box >
    <Container sx={{mt:'3%',mb:'3%' }}>
      <Title variant='h4' content='What really happened with Aaron Swartz? '></Title>
      <Box sx={{mt:'3%'}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Box>
    </Container>
    </Box>
  );
};

export default AboutDescription;
