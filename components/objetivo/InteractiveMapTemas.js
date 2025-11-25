import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './InteractiveMap.module.css'

const InteractiveMapTemas = () => {
    return (
        <Grid className={style.temaBox} item md={2} lg={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant='h4' fontWeight={500} align='center'>Economia</Typography>
            <Typography variant='body'>
                Aquí voy a poner algo de explicación acerca de lo que a Economía se refiera pero pues me imagino
            </Typography>
            <br />

            <Button>Ver más</Button>
            <span className={style.bottomLeft}></span>
            <span className={style.bottomRight}></span>
        </Grid>
    )
}

export default InteractiveMapTemas