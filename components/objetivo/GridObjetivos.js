import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import NextLink from 'next/link';
import CraneIcon from './CraneIcon';
import CityIcon from './CityIcon';
import LeavesIcon from './LeavesIcon'

const objetivosConfig = [
    {
        title: 'Infraestructura de Desarrollo',
        shortDescription: 'Colocar a las personas en el centro de la planeación y del aprovechamiento de los recursos de la ciudad.',
        color: '#4d6f85',
        icon: CraneIcon
    },
    {
        title: 'Entornos Urbanos Consolidados',
        shortDescription: 'Crear entornos urbanos pensados en las personas: accesibles, asequibles, cercanos, compactos, dinámicos, seguros y diversos.',
        color: '#192b43',
        icon: CityIcon
    },
    {
        title: 'Calidad de Vida y Sostenibilidad',
        shortDescription: 'Impulsar una ciudad sustentable, competitiva y generadora de oportunidades, en un entorno equitativo.',
        color: '#010203',
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
            <Card
                sx={{
                    boxShadow: isHover ? '0px 0px 20px 0px rgba(0,0,0,0.6)' : '0px 0px 10px 0px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
                className={styles.card}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <NextLink
                    href={`/chihuahua-en-datos/objetivos/${id}/indicadores`}
                    passHref
                >
                    <a style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        height: '100%'
                    }}>
                        <CardContent
                            className={styles.cardContent}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                                padding: '0 !important'
                            }}
                        >
                            <Box sx={{ backgroundColor: config.color, height: '10px', width: '100%', flexShrink: 0 }}></Box>

                            <Box sx={{
                                padding: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <Typography variant='h5' component='h5' fontWeight={500} className={styles.cardHeader}>
                                    {config.title}
                                </Typography>
                                <Typography variant='body1' component='h3' className={styles.cardShortDescription}>
                                    {config.shortDescription}
                                </Typography>

                                <Box sx={{
                                    position: 'relative',
                                    marginTop: 'auto'
                                }}>
                                    <Box className={styles.indicadorBox}>
                                        <Typography color={config.color} variant='h2' fontWeight={600} className={styles.indicadorCounter}>
                                            {indicadoresCount}
                                        </Typography>
                                        <Typography variant='body1' fontWeight={420} className={styles.indicadorQuantity} color={config.color}>
                                            Indicadores disponibles
                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                                        <IconComponent color={config.color} size={80} />
                                    </Box>
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