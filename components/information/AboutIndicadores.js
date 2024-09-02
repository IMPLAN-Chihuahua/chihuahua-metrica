import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import style from './information.module.css'

const AboutIndicadores = () => {
    return (
        <Grid container className={style.container}>
            <Grid item
                xs={12}
                md={6}
            >
                <Box sx={{ p: 4 }}>
                    <Typography variant='h3' component='h1' fontWeight={600} className={style.subtitle}>Sobre el Sistema</Typography>
                    <Typography variant='body1' fontSize="1.3rem" mb={3} className={style.text}>
                        El Sistema de Indicadores del PDU2040 ofrece a la  ciudadanía
                        los datos de las dimensiones evaluadas en el PDU2040, con el
                        objetivo de monitorear diferentes aspectos de la ciudad de
                        Chihuahua.
                        Los indicadores presentados en este sistema permiten analizar
                        la Infraestructura de Desarrollo, los Entornos Urbanos Consolidados
                        y la Calidad de Vida y Sostenibilidad Ambiental mediante
                        diferentes medios de obtención de datos representados mediante
                        una ficha técnica.
                    </Typography>
                </Box>
            </Grid>
            <Grid item
                xs={12}
                md={6}
            >
                <img
                    src='https://www.implanchihuahua.org/indicadores/images/objetivos/MentalMap.png'
                    alt='Indicadores'
                    className={style.imgMentalMap}
                />
            </Grid>

        </Grid>
    )
}

export default AboutIndicadores