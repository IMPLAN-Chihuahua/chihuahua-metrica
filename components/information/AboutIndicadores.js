import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import style from './information.module.css'

const AboutIndicadores = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 18,
            pr: 20,
            pl: 20,
            mb: 7
        }}>
            <Box sx={{
                p: 3
            }}>
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
            <img
                src='https://chihuahua-metrica-bucket.s3.us-west-1.amazonaws.com/images/objetivos/MentalMap.png'
                height={400}
                alt='Indicadores'
            />

        </Box>
    )
}

export default AboutIndicadores