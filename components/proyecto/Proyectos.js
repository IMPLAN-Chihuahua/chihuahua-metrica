import React from 'react';
import GridBase from '@components/proyecto/GridBase';
import Container from "@mui/material/Container";
import { Box } from '@mui/material';
import Title from '@components/commons/Title';


export const Proyectos = () => {
  return (
      <>
        <Box sx={{backgroundColor:'rgb(38, 48, 68,0.03)', width:'100%' }}>
      <Container >
      <Title variant='h4' content='Proyectos'></Title>
      <GridBase />
      <br/>
      </Container>
      </Box>
      </>
  );
};
