import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import style from './IndicadorOwner.module.css'
import { blue } from '@mui/material/colors';

const IndicadorOwner = ({ responsible, indicadorDate, indicadorName }) => {
    const ownerName = `${responsible.nombres} ${responsible.apellidoPaterno}`
    
    return (
        <Grid container>
            <Box className={`${style.cardContainer}`}>
                <Box className={`${style.imageContainer}`}>
                    <Avatar alt={ownerName} src={responsible.urlImagen} sx={{ width: 80, height: 80 }} />
                </Box>
                <Box className={`${style.userInformation}`} >
                    <Typography fontSize={18}>{ownerName}</Typography>
                    <Link
                        color={blue[900]}
                        href={`mailto:${responsible.correo}?subject=[MÉTRICA] Comentarios acerca de ${indicadorName}`}>
                        {responsible.correo}
                    </Link>
                    <Typography variant='body2' className={`${style.cardData}`}>
                        {responsible.descripcion}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default IndicadorOwner