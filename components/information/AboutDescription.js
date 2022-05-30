import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import Title from '@components/commons/Title';

const AboutDescription = () => {
  return (
    <>
      <Title variant='h3' component='h1'>¿Qué es?</Title>
      <Box mt={3}>
        <Typography variant='body1' fontSize="1.3rem" mb={3}>
          Chihuahua Métrica es una plataforma digital innovadora impulsada por
          el Instituto de Planeación Integral del Municipio de Chihuahua para informar,
          monitorear y evaluar su transformación en el ámbito de la planeación urbana
          y territorial, a través de proyectos y herramientas fáciles de utilizar, entender
          e interpretar para que cualquier usuario que tome decisiones.
        </Typography>
      </Box>
    </>
  );
};

export default AboutDescription;
