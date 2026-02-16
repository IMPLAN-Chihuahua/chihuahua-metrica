import { Box, Container } from '@mui/material';
import React from 'react';

export const AboutForm = () => {
  return (
    <Box sx={{ py: 5 }}> {/* Te agregué un poco de padding vertical para que respire */}
      <Container maxWidth="lg">
        <Box sx={(theme) => ({
          height: "700px",
          width: "100%",
          // marginTop: '-66px', <-- ELIMINADO: Este era el que rompía el diseño
          [theme.breakpoints.down('md')]: {
            height: "700px",
          }
        })}>
          <iframe
            allowTransparency="true"
            width="100%"
            height="100%" /* <-- AGREGADO: Para que llene el alto del Box de MUI */
            id="contactform123"
            name="contactform123"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            src="https://form.123formbuilder.com/my-contact-form-6933560.html?customVars123=yes&hasEmbedFormStyle=1"
          />
        </Box>
      </Container>
    </Box>
  );
};