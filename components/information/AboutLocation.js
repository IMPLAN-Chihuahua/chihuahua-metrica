import { Box, Grid, Typography, Link as MUILink } from '@mui/material';
import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Title from '@components/commons/Title';
import NextLink from 'next/link';
import { AboutForm } from './AboutForm';

export const AboutLocation = () => {
  return (
    <Box >
      <Title variant='h3' component='h1'>Contacto</Title>
      <Typography variant='body1' mb={3}>
        Si te interesa saber más acerca de Chihuahua Métrica ponte en contacto con nosotros
      </Typography>
      <Box mt={2}>
        <Grid container className='center-content'>
          <Grid container item xs={12} md={6} >
            <Grid container item xs={12} md={6} className='center-content' sx={{ mb: '5%' }}>
              <CenteredGrid>
                <FmdGoodIcon sx={{ fontSize: '72px', color: 'gray' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>P.º Victoria 14, Zona Centro, 31000 Chihuahua, Chih.</Typography>
              </CenteredGrid>

            </Grid>

            <Grid container item xs={12} md={6} className='center-content' sx={{ mb: '5%' }}>
              <CenteredGrid>
                <EventAvailableIcon sx={{ fontSize: '72px', color: 'gray' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '0%' }}>Lunes a viernes<br />de 9: 00 a 15: 00 horas</Typography>
              </CenteredGrid>
            </Grid>

            <Grid container item xs={12} md={6} className='center-content'>
              <CenteredGrid>
                <SmartphoneIcon sx={{ fontSize: '72px', color: 'gray' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>+52 614-200-4820</Typography>
              </CenteredGrid>
            </Grid>
            <Grid container item xs={12} md={6} className='center-content'>
              <CenteredGrid>
                <NextLink href='http://implanchihuahua.org/' passHref>
                  <TravelExploreIcon sx={{ fontSize: '72px', color: 'gray', cursor: 'pointer' }} />
                </NextLink>
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>
                  <NextLink href='http://implanchihuahua.org/' passHref>
                    <MUILink
                      target='_blank'
                      color='primary.blue'
                      rel='noopener noreferrer'>¡Visita la página del IMPLAN!</MUILink>
                  </NextLink>
                </Typography>
              </CenteredGrid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.788704054372!2d-106.07849158579681!3d28.636094190672523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea435267b907f1%3A0xb1f9a346a69807ad!2sIMPLAN!5e0!3m2!1ses!2smx!4v1643747666662!5m2!1ses!2smx"
              title='Ubicacion implan'
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0">
            </iframe>
          </Grid>
        </Grid>
        <AboutForm />
      </Box>
    </Box>
  );
};

const CenteredGrid = ({ children }) => {
  return (
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
      {children}
    </Grid>
  )
}
