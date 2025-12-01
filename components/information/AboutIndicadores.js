import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import style from './information.module.css'

const AboutIndicadores = () => {
    return (
        <Grid container className={style.container} sx={{ mt: 20 }}>
            <Grid item
                xs={12}
                md={6}
            >
                <Box sx={{ p: 4 }}>
                    <Typography variant='h3' component='h1' fontWeight={600} className={style.subtitle}>Sobre el Sistema</Typography>
                    <Typography variant='body1' fontSize="1.3rem" mb={3} className={style.text}>
                        Es una herramienta que permite realizar un seguimiento constante del avance y cumplimiento de los objetivos establecidos en el PDU, revelando las fortalezas y debilidades del desarrollo urbano. Esto permite enfocar esfuerzos donde más se requiera y tomar decisiones de acuerdo a información clave para planificación y toma de decisiones efectivas.
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