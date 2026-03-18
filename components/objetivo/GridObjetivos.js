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
                    backgroundColor: config.color, // Fondo del color de la configuración
                    color: '#ffffff', // Forzamos el texto base a blanco
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
                            {/* Barra superior ahora es blanca para contrastar */}
                            <Box sx={{ backgroundColor: '#ffffff', height: '10px', width: '100%', flexShrink: 0 }}></Box>

                            <Box sx={{
                                padding: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                {/* Textos explícitamente blancos por si acaso tus clases CSS los sobreescriben */}
                                <Typography variant='h5' component='h5' fontWeight={500} sx={{ color: '#ffffff' }}>
                                    {config.title}
                                </Typography>
                                <Typography variant='body1' component='h3' className={styles.cardShortDescription} sx={{ color: '#ffffff' }}>
                                    {config.shortDescription}
                                </Typography>

                                <Box sx={{
                                    position: 'relative',
                                    marginTop: 'auto'
                                }}>
                                    <Box className={styles.indicadorBox}>
                                        {/* Quitamos color={config.color} y lo pasamos a blanco */}
                                        <Typography sx={{ color: '#ffffff' }} variant='h2' fontWeight={600} className={styles.indicadorCounter}>
                                            {indicadoresCount}
                                        </Typography>
                                        <Typography sx={{ color: '#ffffff' }} variant='body1' fontWeight={420} className={styles.indicadorQuantity}>
                                            Indicadores disponibles
                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                                        {/* El icono también lo pasamos a blanco */}
                                        <IconComponent color="#ffffff" size={80} />
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
        <Box sx={{ width: '100%', mb: 4 }}>
            <Typography
                variant="h4"
                component="h2"
                fontWeight={600}
                sx={{
                    textAlign: 'center',
                    mb: 8,
                    color: '#1a202c',
                    fontFamily: '"Inter", sans-serif'
                }}
            >
                Objetivos Estratégicos del PDU 2040
            </Typography>

            <Grid container spacing={3} className={styles.objetivosList}> {/* Añadí un poco de spacing(3) por si lo necesitas */}
                {objetivos.map((objetivo) => (
                    parseInt(objetivo.indicadoresCount) > 0 && (
                        <Objetivo key={objetivo.id} objetivoObject={objetivo} />
                    )
                ))}
            </Grid>
        </Box>
    )
}

export default ObjetivosList