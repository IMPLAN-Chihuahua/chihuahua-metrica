import PrimordialBox from '@components/objetivo/PrimordialBox';
import { Box, Typography } from '@mui/material';
import NextLink from "next/link";
import React from 'react'
import IndicadoresPDU2040 from './IndicadoresPDU2040';

const PDU2040 = () => {


    return (
        <section id='PDU2040-section'>
            <Box>

                <Typography variant='h3' fontWeight={600} sx={{ pb: 1 }}>
                    Sistema de Indicadores del PDU2040 Séptima Actualización
                </Typography>
                <Typography variant='body1' fontSize="1.3rem" sx={{ pb: 1 }}>
                    El Sistema de Indicadores del PDU2040 ofrece a la ciudadanía los datos de los objetivos evaluados en el PDU2040, con el objetivo de monitorear diferentes aspectos de la ciudad de Chihuahua. Los indicadores presentados en este sistema permiten analizar la Infraestructura de Desarrollo, los Entornos Urbanos Consolidados y la Calidad de Vida y Sostenibilidad Ambiental mediante diferentes medios de obtención de datos representados mediante una ficha técnica.

                </Typography>
                <Typography variant='body1' fontSize="1.2rem" sx={{ pb: 1 }}>
                    Es una herramiessssnta que permite dar seguimiento al avance y cumplimiento de los objetivos del PDU, identificando fortalezas y áreas de mejora, para enfocar esfuerzos donde más se requiera y facilitar la toma de decisiones informadas en la planificación urbana. Sus tres metas principales son: <b>monitorizar el progreso, identificar áreas de mejora y apoyar decisiones estratégicas basadas en información clave.</b>
                </Typography>

            </Box>

            {/* 
            <Typography variant='body1' fontWeight={600} sx={{ mb: 3 }}>
                ¿Te interesa conocer más al respecto? {' '}
                <Typography variant='body1' component='span' sx={{ color: 'blueviolet', fontWeight: 'bold' }}>
                    <NextLink href={`/chihuahua-en-datos`} passHref >
                        <a>¡Revisa esto!</a>
                    </NextLink>
                </Typography>
            </Typography> */}
            {/* <PrimordialBox /> */}
        </section>
    )
}

export default PDU2040
