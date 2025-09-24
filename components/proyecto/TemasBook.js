import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Tema } from './GridTemas';
import IndicadorHover from './IndicadorHover';
import style from './Project.module.css'

const TemasBook = (props) => {
    const { temas } = props

    const [idTema, setidTema] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('')
    const [indicador, setIndicador] = useState({})

    // const temasWithIndicadores = temas.filter(tema => parseInt(tema.indicadoresCount) > 0)

    const fetchIndicadorFromSelectedTema = (idTema) => {
        fetch(`${process.env.INDICADORES_BASE_URL}/temas/${idTema}/randomIndicador`)
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
        fetchIndicadorFromSelectedTema(idTema)
    }, [idTema])

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
                    <TemasCard temas={temas} setidTemas={setidTema} setBackgroundColor={setBackgroundColor} />
                </Grid>
            </Grid>
        </Box>

    )
};

const TemasCard = ({ temas, setidTemas, setBackgroundColor }) => {
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
                temas?.map((tema, idx) => (
                    <Grid item xs={12} md={6} key={idx} sx={{
                        p: 1,
                    }}
                        onMouseEnter={() => {
                            setTimeout(() => {
                                setidTemas(tema.id)
                                setBackgroundColor(tema.color)
                            }, 500)
                        }}
                        onMouseLeave={() => {
                            clearTimeout()
                        }}
                    >
                        <Tema tema={tema} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default TemasBook