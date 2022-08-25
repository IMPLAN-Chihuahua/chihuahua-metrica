import { Avatar, Grid, Box } from '@mui/material'
import React, { useState } from 'react'
import style from './Stats.module.css'
import Carousel from 'react-material-ui-carousel'

const Stat = ({ indicadores }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Grid item xs={12} md={3} className={style.stat}>
            {
                indicadores.map((indicador, index) => (
                    console.log(indicador.value),
                    <div className={`${style.circle}`} key={index}>
                        <Box className={`${style.circleStats}`} >
                            <Avatar src={indicador.icon} className={style.indicadorImage} sx={{ height: 110, width: 110 }} />
                            <p className={`${style.circleStatsDescription}`}>{indicador.value}</p>
                        </Box>
                        <p className={style.indicador}>{indicador.name}</p>
                    </div>
                ))
            }
        </Grid>
    );
}


const Capsule = () => {
    const indicadores = [{
        icon: '/images/stats/rounded-images/temas_rounded/1_169.png',
        value: '$48,740.05 MXN',
        name: 'Inversión estimada per cápita de las vialidades'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/2_011.png',
        value: '0.365%',
        name: 'Coeficiente de Gini'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/3_092.png',
        value: 'Posición 10',
        name: 'Índice de Competitividad Urbana'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/4_025.png',
        value: '1.7%',
        name: 'Porcentaje de personas que declaran pertenecer a etnias originarias'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/5_002.png',
        value: '381.55 ha',
        name: 'Elementos del espacio público: caminabilidad y conectividad'
    },

    {
        icon: '/images/stats/rounded-images/temas_rounded/6_154.png',
        value: '215,940 árboles',
        name: 'Árboles en la ciudad de Chihuahua'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/7_066.png',
        value: 'Posición 11',
        name: 'Índice de Movilidad Urbana'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/8_149.png',
        value: '70.30%',
        name: 'Personas que cambiaron hábitos por seguridad'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/9_017.png',
        value: '27,348.03 ha',
        name: 'Superficie del área urbana'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/10_41.png',
        value: '33.85 Hab/ha',
        name: 'Densidad de población urbana'
    },

    {
        icon: '/images/stats/rounded-images/temas_rounded/11_154.png',
        value: '3,686,000 viajes',
        name: 'Reparto modal de transporte'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/12_015.png',
        value: '8,127.52 ha',
        name: 'Superficie total de vialidades'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/13_148.png',
        value: '133.44 Incidentes por cada 10 mil autos',
        name: 'Incidentes de tránsito'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/14_171.png',
        value: '1.07%',
        name: 'Tasa Media de Crecimiento Anual de la población'
    }, {
        icon: '/images/stats/rounded-images/temas_rounded/15_172.png',
        value: '98.73%',
        name: 'Grado de urbanización'
    },

    ];

    return (
        <>
            {
                <Carousel
                    interval={7000}
                    duration={600}
                >
                    <Grid item xs={12} md={3}>
                        <Stat indicadores={indicadores.slice(0, 5)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stat indicadores={indicadores.slice(5, 10)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stat indicadores={indicadores.slice(10, 15)} />
                    </Grid>
                </Carousel>
            }
        </>
    )
}

export default Capsule