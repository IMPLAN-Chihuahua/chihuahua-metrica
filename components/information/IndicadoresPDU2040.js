import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DimensionesList from '@components/dimension/GridDimensiones'
import style from './information.module.css'
import TemasBook from '@components/proyecto/TemasBook'

const IndicadoresPDU2040 = ({ dimensiones }) => {
    return (
        <Box>
            <Grid container className={style.bigBox}>
                <Grid item xs={12} md={6} className={style.bigBoxElementLeft}>
                    <Typography variant='h3' component='h1'
                        className={style.title}>Sistema de Indicadores del PDU2040 Séptima Actualización</Typography>
                </Grid>

                <Grid item xs={12} md={6} className={style.bigBoxElementRight}>
                    <img src='https://chihuahua-metrica-bucket.s3.us-west-1.amazonaws.com/images/objetivos/mapa.png' alt='Indicadores del PDU2040' />
                </Grid>
            </Grid >
            <Box className={style.ghostBox}>
                <DimensionesList dimensiones={dimensiones} />
            </Box>
        </Box>

    )
}

export default IndicadoresPDU2040