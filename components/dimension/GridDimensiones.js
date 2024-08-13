import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../../styles/dimension.module.css'
import Image from 'next/image';
import NextLink from 'next/link';

const titles = ['Infraestructura de Desarrollo', 'Entornos Urbanos Consolidados', 'Calidad de Vida y Sostenibilidad']
const shortDescription = ['Incluye indicadores relacionados al crecimiento, planificación e infraestructura de la ciudad.', 'Evalúa la eficiencia, accesibilidad  y sostenibilidad de los sistemas de transporte', 'Mide aspectos como la calidad del aire, manejo de residuos y conservación de recursos naturales.']
const Dimension = ({ dimension }) => {
    const [isHover, setHover] = useState(false);

    return (
        <Grid item xs={12} md={6} lg={4} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <NextLink
                href={`/chihuahua-en-datos/dimensiones/${dimension.id}/indicadores`}
                passHref>
                <a>
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        <Card
                            sx={{
                                width: 420,
                                height: 279,
                                borderRadius: '15px',
                                //hover effect
                                boxShadow: isHover ? '0px 0px 20px 0px rgba(0,0,0,0.6)' : '0px 0px 10px 0px rgba(0,0,0,0.3)',
                            }}
                        >
                            <CardContent>
                                <Typography variant='h5' component='h5' fontWeight={500} className={style.cardHeader}>{titles[dimension.id - 1]}</Typography>
                                <Typography variant='body1' component='h3' className={style.cardShortDescription} >{shortDescription[dimension.id - 1]}</Typography>
                                {/* <Typography>Indicadores: {dimension.indicadoresCount}</Typography> */}
                            </CardContent>
                        </Card>

                        <Box
                            className={style.indicadorBox}>
                            <Typography variant='h2' fontWeight={600} className={style.indicadorCounter}>{dimension.indicadoresCount}</Typography>
                            <Typography variant='body1' fontWeight={325} className={style.indicadorQuantity}>Indicadores disponibles</Typography>
                        </Box>
                    </div>
                </a>
            </NextLink>
        </Grid>
    )
}

const DimensionesList = ({ dimensiones }) => {
    return (
        <Grid container sx={{
            position: 'absolute',
            bottom: 0,
            transform: 'translateY(33%)',
        }}>
            {dimensiones.map((dimension) => (
                parseInt(dimension.indicadoresCount) > 0 && (
                    <Dimension key={dimension.id} dimension={dimension} />
                )
            ))}
        </Grid>
    )
}

export default DimensionesList