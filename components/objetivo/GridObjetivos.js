import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import NextLink from 'next/link';
import CraneIcon from './CraneIcon';
import CityIcon from './CityIcon';
import LeavesIcon from './LeavesIcon'

const objetivosConfig = [
    {
        title: 'Infraestructura de Desarrollo',
        shortDescription: 'Incluye indicadores relacionados al crecimiento, planificación e infraestructura de la ciudad.',
        color: '#b3d9d0',
        icon: CraneIcon
    },
    {
        title: 'Entornos Urbanos Consolidados',
        shortDescription: 'Evalúa la eficiencia, accesibilidad  y sostenibilidad de los sistemas de transporte',
        color: '#6AC7B2',
        icon: CityIcon
    },
    {
        title: 'Calidad de Vida y Sostenibilidad',
        shortDescription: 'Mide aspectos como la calidad del aire, manejo de residuos y conservación de recursos naturales.',
        color: '#2D9290',
        icon: LeavesIcon
    }
]


import styles from './PDU2040.module.css'

const Objetivo = ({ objetivoObject }) => {
    const [isHover, setHover] = useState(false);

    const { indicadoresCount, id } = objetivoObject;

    const config = objetivosConfig[id - 1] || objetivosConfig[0];
    const IconComponent = config.icon;

    return (
        <Grid item xs={12} md={6} lg={4} className={styles.objetivoGridItem}>
            <Card sx={{
                boxShadow: isHover ? '0px 0px 20px 0px rgba(0,0,0,0.6)' : '0px 0px 10px 0px rgba(0,0,0,0.3)',
            }}
                className={styles.card}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <NextLink
                    href={`/chihuahua-en-datos/objetivos/${id}/indicadores`}
                    passHref>
                    <a>
                        <CardContent className={styles.cardContent}>
                            <Box sx={{ backgroundColor: config.color, height: '10px', width: '100%' }}></Box>
                            <Box sx={{ padding: 1 }}>
                                <Typography variant='h5' component='h5' fontWeight={500} className={styles.cardHeader}>{config.title}</Typography>
                                <Typography variant='body1' component='h3' className={styles.cardShortDescription} >{config.shortDescription}</Typography>
                                <Box className={styles.indicadorBox}>
                                    <Typography color={config.color} variant='h2' fontWeight={600} className={styles.indicadorCounter}>{indicadoresCount}</Typography>
                                    <Typography variant='body1' fontWeight={420} className={styles.indicadorQuantity}>Indicadores disponibles</Typography>
                                </Box>
                                <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                                    <IconComponent color={config.color} size={80} />
                                </Box>
                            </Box>
                        </CardContent>
                    </a>
                </NextLink>
            </Card>
        </Grid>
    )
}

const ObjetivosList = ({ objetivos }) => {
    return (
        <Grid container
            className={styles.objetivosList}
        >
            {objetivos.map((objetivo) => (
                parseInt(objetivo.indicadoresCount) > 0 && (
                    <Objetivo key={objetivo.id} objetivoObject={objetivo} />
                )
            ))}
        </Grid>
    )
}

export default ObjetivosList