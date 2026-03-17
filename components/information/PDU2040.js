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
                    El sistema <b>“Chihuahua Métrica”</b> tiene el objetivo de <b>monitorear el avance del Plan de Desarrollo Urbano</b> del centro de población de Chihuahua 2040 (PDU2040), séptima actualización, y está enfocado en medir datos de la escala geográfica de la ciudad de Chihuahua, aunque cuenta con algunos indicadores a escala municipal. Su propósito es ofrecer datos útiles y accesibles sobre el entorno urbano, para la identificación de fortalezas y áreas de mejora en <b>apoyo a la toma de decisiones</b>, y enfocar los esfuerzos donde más se requiera, así como fomentar la <b>transparencia y participación ciudadana</b>.
                </Typography>
                <Typography variant='body1' fontSize="1.3rem" sx={{ pb: 1 }}>
                    Actualmente el sistema cuenta con <b>más de 80 indicadores</b> que se clasifican en <b>3 objetivos o ejes rectores</b>: Infraestructura de desarrollo, Entornos urbanos consolidados, Calidad de vida y sostenibilidad. A su vez se clasifican en <b>7 temáticas</b>: población, estructura urbana, equipamiento y espacio público, accesibilidad y movilidad, economía, servicios públicos e infraestructura y conservación medioambiental.
                </Typography>

            </Box>

        </section>
    )
}

export default PDU2040
