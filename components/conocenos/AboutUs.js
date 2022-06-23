import { Avatar, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactlessIcon from '@mui/icons-material/Contactless';
import TimelineIcon from '@mui/icons-material/Timeline';
import Image from "next/image";

import style from './AboutUs.module.css'
import Title from '@components/commons/Title';

const AboutUs = () => {
    return (
        <Box className={`${style.container}`}>
            <Box>
                <Image
                    loader={() => '/images/Banner/conocenos.png'}
                    src={'/images/Banner/conocenos.png'}
                    alt="Fotografía de la empresa"
                    width='100vw'
                    height='23vh'
                    layout="responsive"
                    objectFit='cover'
                    objectPosition='center 50%'
                />
            </Box>
            <br />
            <Container className={style.aboutUs}>
                <Title variant='h2' component='h1'>¿Qué es?</Title>
                <Typography variant='body1'>Chihuahua Métrica Es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio de Chihuahua para informar, monitorear y evaluar su transformación en el ámbito de la planeación   urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar para que cualquier usuario que tome decisiones.</Typography>
            </Container>

            <Grid container className={`${style.aboutBody}`}>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={`${style.infoColumn}`}>
                    <Box className={`${style.infoContainer}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <FlagIcon className={`${style.aboutIcon}`} />
                        </Avatar>
                        <Box className={`${style.information}`}>
                            <h2>Informa</h2>
                            <p>
                                Datos de alta prioridad y relevancia para la toma de decisiones en temas de desarrollo socioeconómico, urbano y ambiental del municipio de Chihuahua
                            </p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={`${style.infoColumn}`}>
                    <Box className={`${style.infoContainer}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <VisibilityIcon className={`${style.aboutIcon}`} />
                        </Avatar>
                        <h2>Evalúa </h2>
                        <p>
                            Las políticas públicas referentes a al desarrollo y competitividad del municipio de Chihuahua.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={`${style.infoColumn}`}>
                    <Box className={`${style.infoContainer}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <TimelineIcon className={`${style.aboutIcon}`} />
                        </Avatar>
                        <h2>Monitorea</h2>
                        <p>
                            Indicadores en temas de desarrollo socioeconómico, urbano y ambiental del municipio de Chihuahua.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={`${style.infoColumn}`}>
                    <Box className={`${style.infoContainer}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <ContactlessIcon className={`${style.aboutIcon}`} />
                        </Avatar>
                        <h2>Ofrece </h2>
                        <p>
                            Herramientas didácticas para la consulta de la información contenida en la plataforma.
                        </p>
                    </Box>
                </Grid>

                {/* <Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={`${style.aboutIconsContainer}`}>
                    <Box className={`${style.iconBody}`}>
 
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={`${style.aboutIconsContainer}`}>
                    <Box className={`${style.iconBody}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <VisibilityIcon className={`${style.aboutIcon}`} />
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={`${style.aboutIconsContainer}`}>
                    <Box className={`${style.iconBody}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <TimelineIcon className={`${style.aboutIcon}`} />
                        </Avatar>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={`${style.aboutIconsContainer}`}>
                    <Box className={`${style.iconBody}`}>
                        <Avatar className={`${style.aboutIconContainer}`}>
                            <ContactlessIcon className={`${style.aboutIcon}`} />
                        </Avatar>

                    </Box>
                </Grid> */}
            </Grid>
        </Box>


    )
}

export default AboutUs