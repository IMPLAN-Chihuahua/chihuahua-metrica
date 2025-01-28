import { Box, Grid, Typography, Link as MUILink } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CallIcon from '@mui/icons-material/Call';
import NextLink from 'next/link';
import { AboutForm } from './AboutForm';

export const AboutLocation = () => {
  return (
    <Box>
      <Typography variant='h4' mb={2}>Contacto</Typography>
      <Typography variant='body1' mb={3}>
        Si te interesa saber más acerca de Chihuahua Métrica ponte en contacto con nosotros.
      </Typography>
      <Box mt={2}>
        <Grid container py={2}>
          <Grid container item xs={12} md={6} >
            <Grid container item xs={12} md={6} sx={{ mb: '5%' }}>
              <CenteredGrid>
                <FmdGoodIcon sx={{ fontSize: '72px', color: '#32526d' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>P.º Victoria 14, Zona Centro, 31000 Chihuahua, Chih.</Typography>
              </CenteredGrid>
            </Grid>

            <Grid container item xs={12} md={6} sx={{ mb: '5%' }}>
              <CenteredGrid>
                <EventAvailableIcon sx={{ fontSize: '72px', color: '#32526d' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '0%' }}>Lunes a viernes<br />de 8:30 a 15:30 horas.</Typography>
              </CenteredGrid>
            </Grid>

            <Grid container item xs={12} md={6}>
              <CenteredGrid>
                <CallIcon sx={{ fontSize: '72px', color: '#32526d' }} />
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>+52 614-200-4820</Typography>
              </CenteredGrid>
            </Grid>
            <Grid container item xs={12} md={6}>
              <CenteredGrid>
                <NextLink href='http://implanchihuahua.org/' passHref>
                  <TravelExploreIcon sx={{ fontSize: '72px', color: '#32526d', cursor: 'pointer' }} />
                </NextLink>
              </CenteredGrid>
              <CenteredGrid>
                <Typography variant='p' sx={{ mt: '3%' }}>
                  <NextLink href='http://implanchihuahua.org/' passHref>
                    <MUILink
                      target='_blank'
                      color='primary.blue'
                      rel='noopener noreferrer'>Página del IMPLAN</MUILink>
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
