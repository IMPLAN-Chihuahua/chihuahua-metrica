import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import NextLink from 'next/link';

const titles = ['Infraestructura de Desarrollo', 'Entornos Urbanos Consolidados', 'Calidad de Vida y Sostenibilidad']
const shortDescription = ['Incluye indicadores relacionados al crecimiento, planificación e infraestructura de la ciudad.', 'Evalúa la eficiencia, accesibilidad  y sostenibilidad de los sistemas de transporte', 'Mide aspectos como la calidad del aire, manejo de residuos y conservación de recursos naturales.']

import styles from './PDU2040.module.css'

const Objetivo = ({ objetivoObject }) => {
    const [isHover, setHover] = useState(false);

    const { indicadoresCount, ...objetivo } = objetivoObject;


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
                    href={`/chihuahua-en-datos/objetivos/${objetivo.id}/indicadores`}
                    passHref>
                    <a>
                        <CardContent className={styles.cardContent}>
                            <Typography variant='h5' component='h5' fontWeight={500} className={styles.cardHeader}>{titles[objetivo.id - 1]}</Typography>
                            <Typography variant='body1' component='h3' className={styles.cardShortDescription} >{shortDescription[objetivo.id - 1]}</Typography>

                            <Box className={styles.indicadorBox}>
                                <Typography variant='h2' fontWeight={600} className={styles.indicadorCounter}>{indicadoresCount}</Typography>
                                <Typography variant='body1' fontWeight={325} className={styles.indicadorQuantity}>Indicadores disponibles</Typography>
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