import { Box, Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Tema } from './GridModulos';
import IndicadorHover from './IndicadorHover';
import style from './Project.module.css'

const TemasBook = (props) => {
    const { modulos } = props

    const [idModulo, setidModulo] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('')
    const [indicador, setIndicador] = useState({})

    const modulosWithIndicadores = modulos.filter(modulo => parseInt(modulo.indicadoresCount) > 0)

    const fetchIndicadorFromSelectedModulo = (idModulo) => {
        console.log(idModulo)
        fetch(`${process.env.INDICADORES_BASE_URL}/modulos/${idModulo}/randomIndicador`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res.error.text)
            })
            .then(indicadores => {
                setIndicador(indicadores.data)
            })
            .catch(() => {
            })

    }

    useEffect(() => {
        fetchIndicadorFromSelectedModulo(idModulo)
    }, [idModulo])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pr: 20,
                pl: 20,
            }}
        >
            <Typography
                variant='h3'
                component='h1'
                fontWeight={600}
                className={style.subtitle}
                textAlign={'center'}
            >
                Temas de interés
            </Typography>
            <Grid container
                sx={{
                    pr: 5,
                    pl: 5,
                    mt: 5,
                    mb: 5,
                }}
            >
                <Grid item xs={12} md={6}
                    sx={{
                        backgroundColor: backgroundColor ? backgroundColor : '#123d70',
                        transition: 'background-color 0.3s ease-in-out',
                        borderRadius: '20px 0px 0px 20px',
                    }}>
                    <IndicadorHover indicador={indicador} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <ModulosCard modulos={modulosWithIndicadores} setidModulo={setidModulo} setBackgroundColor={setBackgroundColor} />
                </Grid>
            </Grid>
        </Box>

    )
};

const ModulosCard = ({ modulos, setidModulo, setBackgroundColor }) => {
    return (
        <Grid container sx={{
            maxHeight: '800px',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'grey',
            scrollbarTrackColor: 'white',
            scrollBehavior: 'smooth',
        }}>
            {
                modulos?.map((modulo, idx) => (
                    <Grid item xs={12} md={6} key={idx} sx={{
                        p: 1,
                    }}
                        onMouseEnter={() => {
                            setTimeout(() => {
                                setidModulo(modulo.id)
                                setBackgroundColor(modulo.color)
                            }, 500)
                        }}
                        onMouseLeave={() => {
                            clearTimeout()
                        }}
                    >
                        <Tema modulo={modulo} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default TemasBook