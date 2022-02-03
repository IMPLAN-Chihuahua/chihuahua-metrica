import { Box } from '@mui/material';
import React from 'react';

const avisoPrivacidad = () => {
  return (
      <Box sx={{
          mb:'-3%'
      }}>
          <embed src= "/AvisodePrivacidadIntegralPublico2021.pdf" width= "100%" height= "900px" type="application/pdf"></embed>
      </Box>
  );
};

export default avisoPrivacidad;