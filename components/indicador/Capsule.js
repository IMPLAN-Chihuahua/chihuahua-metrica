import { Avatar, Grid, Box, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import style from './Stats.module.css'
import Carousel from 'react-material-ui-carousel'
import theme from 'styles/theme'
import NextLink from 'next/link';

const Stat = ({ indicadores }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div className={style.stat}>
            {
                indicadores.map((indicador, index) => (
                    <NextLink
                        href={indicador.url}
                        passHref
                        key={index}
                    >
                        <a title='Visitar la ficha del indicador'>
                            <div className={`${style.circle}`}>
                                <Box className={`${style.circleStats}`} >
                                    <Avatar src={indicador.icon} className={style.indicadorImage} sx={{ height: 110, width: 110 }} />
                                    <Typography textAlign='center' className={`${style.textsillo}`}>{indicador.value}</Typography>
                                </Box>
                                <p className={style.indicador}>{indicador.name}</p>
                            </div>
                        </a>
                    </NextLink>
                ))
            }
        </div>
    );
}

const Capsule = () => {
    const indicadores = [{
        url: `/chihuahua-en-datos/indicadores/167`,
        icon: '/images/stats/rounded-images/temas_rounded/1_169.png',
        value: '$48,740.05 MXN',
        name: 'Inversión estimada per cápita de las vialidades'
    }, {
        url: '/chihuahua-en-datos/indicadores/11',
        icon: '/images/stats/rounded-images/temas_rounded/2_011.png',
        value: '0.365%',
        name: 'Coeficiente de Gini'
    }, {
        url: '/chihuahua-en-datos/indicadores/40',
        icon: '/images/stats/rounded-images/temas_rounded/3_092.png',
        value: 'Posición 10',
        name: 'Índice de Competitividad Urbana'
    }, {
        url: '/chihuahua-en-datos/indicadores/90',
        icon: '/images/stats/rounded-images/temas_rounded/4_025.png',
        value: '1.7%',
        name: 'Porcentaje de personas que declaran pertenecer a etnias originarias'
    }, {
        url: '/chihuahua-en-datos/indicadores/24',
        icon: '/images/stats/rounded-images/temas_rounded/5_002.png',
        value: '381.55 ha',
        name: 'Elementos del espacio público: caminabilidad y conectividad'
    },

    {
        url: '/chihuahua-en-datos/indicadores/2',
        icon: '/images/stats/rounded-images/temas_rounded/6_154.png',
        value: '215,940 árboles',
        name: 'Árboles en la ciudad de Chihuahua'
    }, {
        url: '/chihuahua-en-datos/indicadores/152',
        icon: '/images/stats/rounded-images/temas_rounded/7_066.png',
        value: 'Posición 11',
        name: 'Índice de Movilidad Urbana'
    }, {
        url: '/chihuahua-en-datos/indicadores/64',
        icon: '/images/stats/rounded-images/temas_rounded/8_149.png',
        value: '70.30%',
        name: 'Personas que cambiaron hábitos por seguridad'
    }, {
        url: '/chihuahua-en-datos/indicadores/15',
        icon: '/images/stats/rounded-images/temas_rounded/9_017.png',
        value: '27,348.03 ha',
        name: 'Superficie del área urbana'
    }, {
        url: '/chihuahua-en-datos/indicadores/17',
        icon: '/images/stats/rounded-images/temas_rounded/10_41.png',
        value: '33.85 Hab/ha',
        name: 'Densidad de población urbana'
    },

    {
        url: '/chihuahua-en-datos/indicadores/146',
        icon: '/images/stats/rounded-images/temas_rounded/11_154.png',
        value: '3,686,000 viajes',
        name: 'Reparto modal de transporte'
    }, {
        url: '/chihuahua-en-datos/indicadores/147',
        icon: '/images/stats/rounded-images/temas_rounded/12_015.png',
        value: '8,127.52 ha',
        name: 'Superficie total de vialidades'
    }, {
        url: '/chihuahua-en-datos/indicadores/39',
        icon: '/images/stats/rounded-images/temas_rounded/13_148.png',
        value: '133.44 Incidentes por cada 10 mil autos',
        name: 'Incidentes de tránsito'
    }, {
        url: '/chihuahua-en-datos/indicadores/169',
        icon: '/images/stats/rounded-images/temas_rounded/14_171.png',
        value: '1.07%',
        name: 'Tasa Media de Crecimiento Anual de la población'
    }, {
        url: '/chihuahua-en-datos/indicadores/170',
        icon: '/images/stats/rounded-images/temas_rounded/15_172.png',
        value: '98.73%',
        name: 'Grado de urbanización'
    },

    ];

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <>
            {
                isSmallScreen ?
                    <Carousel interval={7000} duration={600} navButtonsAlwaysVisible={true}>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(0, 2)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(2, 4)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(4, 6)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(6, 8)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(8, 10)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(10, 12)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(12, 14)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(14, 15)} />
                        </div>
                    </Carousel>
                    :
                    <Carousel
                        interval={7000}
                        duration={600}
                    >
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(0, 5)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(5, 10)} />
                        </div>
                        <div item xs={6} md={3}>
                            <Stat indicadores={indicadores.slice(10, 15)} />
                        </div>
                    </Carousel>
            }
        </>
    )
}

export default Capsule