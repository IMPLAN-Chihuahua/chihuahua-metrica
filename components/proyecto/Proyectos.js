import React from 'react';
import GridBase from '@components/proyecto/GridBase';
import Container from "@mui/material/Container";
import { Box } from '@mui/material';
import Title from '@components/commons/Title';


export const Proyectos = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'rgb(38, 48, 68,0.03)', width: '100%' }}>
        <Container sx={{pt: '5%', pb: '5%'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Title variant='h4' component='h2'>Proyectos</Title>
          </Box>
          <GridBase />
        </Container>
      </Box>
    </>
  );
};
