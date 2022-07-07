import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Title from '@components/commons/Title';

export const AboutLocation = () => {
    return (
        <Box >
            <Title variant='h3' component='h1' mt={5}>Contacto</Title>
            <Typography variant='body1' mb={3}>
                Si te interesa Chihuahua Métrica y te gustaría saber más, ponte en contacto con nosotros.
            </Typography>
            <Box mt={2}>
                <Grid container className='center-content'>
                    <Grid container item xs={12} md={6} >
                        <Grid container item xs={12} md={6} className='center-content'>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <FmdGoodIcon sx={{ fontSize: '72px', color: 'gray' }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <Typography variant='p' sx={{ mt: '3%' }}>P.º Victoria 14, Zona Centro, 31000 Chihuahua, Chih.</Typography>
                            </Grid>

                        </Grid>

                        <Grid container item xs={12} md={6} className='center-content'>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <EventAvailableIcon sx={{ fontSize: '72px', color: 'gray' }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <Typography variant='p' sx={{ mt: '3%' }}>De 9:00 a 15:00 horas de lunes a viernes</Typography>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} md={6} className='center-content'>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <SmartphoneIcon sx={{ fontSize: '72px', color: 'gray' }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <Typography variant='p' sx={{ mt: '3%' }}>+52 614-200-4820</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={6} className='center-content'>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <TravelExploreIcon sx={{ fontSize: '72px', color: 'gray' }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                                <Typography variant='p' sx={{ mt: '3%' }}><a href='http://implanchihuahua.org/'>implanchihuahua.org</a></Typography>
                            </Grid>
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
            </Box>
        </Box>
    );
};
