import { Avatar, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from './AboutUs.module.css'
import MonitorIcon from '@mui/icons-material/Monitor';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactlessIcon from '@mui/icons-material/Contactless';
import TimelineIcon from '@mui/icons-material/Timeline';

const AboutUs = () => {
    return (
        <Grid container className={`${style.aboutBody}`}>
            <Grid item xs={12} md={3} className={`${style.aboutContent} ${style.aboutBackground}`}>
                <h1><b>¿Qué es?</b></h1>
                <h3>Chihuahua Métrica Es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio de Chihuahua para informar, monitorear y evaluar su transformación en el ámbito de la planeación   urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar para que cualquier usuario que tome decisiones.</h3>
            </Grid>

            <Grid item xs={12} md={2} className={`${style.aboutIconsContainer}`}>
                <Box className={`${style.iconBody}`}>
                    <Avatar className={`${style.aboutIconContainer}`}>
                        <FlagIcon className={`${style.aboutIcon}`} />
                    </Avatar>
                    <h2>Informa</h2>
                    <p>
                        Datos de alta prioridad y relevancia para la toma de decisiones en temas de desarrollo socioeconómico, urbano y ambiental del municipio de Chihuahua
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={2} className={`${style.aboutIconsContainer}`}>
                <Box className={`${style.iconBody}`}>
                    <Avatar className={`${style.aboutIconContainer}`}>
                        <VisibilityIcon className={`${style.aboutIcon}`} />
                    </Avatar>
                    <h2>Evalúa </h2>
                    <p>
                        Las políticas públicas referentes a al desarrollo y competitividad del municipio de Chihuahua.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={2} className={`${style.aboutIconsContainer}`}>
                <Box className={`${style.iconBody}`}>
                    <Avatar className={`${style.aboutIconContainer}`}>
                        <TimelineIcon className={`${style.aboutIcon}`} />
                    </Avatar>
                    <h2>Monitorea</h2>
                    <p>
                        Indicadores en temas de desarrollo socioeconómico, urbano y ambiental del municipio de Chihuahua.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={2} className={`${style.aboutIconsContainer}`}>
                <Box className={`${style.iconBody}`}>
                    <Avatar className={`${style.aboutIconContainer}`}>
                        <ContactlessIcon className={`${style.aboutIcon}`} />
                    </Avatar>
                    <h2>Ofrece </h2>
                    <p>
                        Herramientas didácticas para la consulta de la información contenida en la plataforma.
                    </p>
                </Box>
            </Grid>
        </Grid>


        // <Grid className={`${style.aboutBody}`}>
        //     <Box className={`${style.aboutWhatIs}`}>
        //         <h1><b>¿Qué es?</b></h1>
        //         <h3>Chihuahua Métrica Es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio de Chihuahua para informar, monitorear y evaluar su transformación en el ámbito de la planeación   urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar para que cualquier usuario que tome decisiones.</h3>
        //     </Box>
        //     <Box className={`${style.aboutAvatarContainer}`}>
        //         <Avatar alt='Chihuahua city' src="https://www.americanway.com/public/uploads/chihuahua%20header%20image.jpg" className={`${style.aboutAvatar}`} />
        //     </Box>
        //     <Box className={`${style.aboutContent}`}>
        //         <Avatar className={`${style.aboutIconContainer}`}>
        //             <FlagIcon className={`${style.aboutIcon}`} />
        //         </Avatar>
        //         <Avatar className={`${style.aboutIconContainer}`}>
        //             <VisibilityIcon className={`${style.aboutIcon}`} />
        //         </Avatar>
        //         <Avatar className={`${style.aboutIconContainer}`}>
        //             <ContactlessIcon className={`${style.aboutIcon}`} />
        //         </Avatar>
        //         <Avatar className={`${style.aboutIconContainer}`}>
        //             <MonitorIcon className={`${style.aboutIcon}`} />
        //         </Avatar>
        //     </Box>
        // </Grid>
    )
}

export default AboutUs