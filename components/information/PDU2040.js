import PrimordialBox from '@components/dimension/PrimordialBox';
import { Box, Typography } from '@mui/material';
import NextLink from "next/link";

import React from 'react'

const PDU2040 = () => {
    return (
        <section id='PDU2040-section'>
            <Typography variant='h4' fontWeight={600} sx={{ pb: 1 }}>
                Objetivo del Sistema de Indicadores del PDUCP
            </Typography>
            <Typography variant='body1' fontSize="1.3rem" sx={{ pb: 1 }}>
                Es una herramienta que permite realizar un seguimiento constante del avance y cumplimiento de los objetivos establecidos en el PDU, revelando las fortalezas y debilidades del desarrollo urbano. Esto permite enfocar esfuerzos donde más se requiera y tomar decisiones de acuerdo a información clave para planificación y toma de decisiones efectivas.
            </Typography>
            <Typography variant='body1' fontSize="1.2rem" sx={{ pb: 1 }}>
                Sus características se pueden resumir en tres metas: <b>Monitorizar el Progreso, Identificar Áreas de Mejora y la Toma de decisiones Informada</b>
            </Typography>

            <Typography variant='body1' fontWeight={600} sx={{ mb: 3 }}>
                ¿Te interesa conocer más al respecto? {' '}
                <Typography variant='body1' component='span' sx={{ color: 'blueviolet', fontWeight: 'bold' }}>
                    <NextLink href={`/chihuahua-en-datos`} passHref >
                        <a>¡Revisa esto!</a>
                    </NextLink>
                </Typography>
            </Typography>
            <PrimordialBox />
        </section>
    )
}

export default PDU2040