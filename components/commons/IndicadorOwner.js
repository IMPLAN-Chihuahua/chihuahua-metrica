import { Avatar, AvatarGroup, Box, Button, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import style from './IndicadorOwner.module.css'
import MailIcon from '@mui/icons-material/Mail';
import Title from './Title'
import { toLocaleDateString } from 'helpers/FormatDates';

const IndicadorOwner = ({ responsible, indicadorDate, indicadorName }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(indicadorDate).toUTCString();

    return (
        <>
            <Title variant='h4' component='h2'>Responsable</Title>
            <Grid container className={`${style.indicadorOwner}`}>

                <Grid item sm={12} md={8} lg={6} xl={6} className={`${style.cardBody}`}>
                    <Box className={`${style.cardContainer}`}>
                        <Box className={`${style.imageContainer}`}>
                            <Avatar alt='Bobby P.' src={responsible.urlImagen} sx={{ width: 100, height: 100 }}>
                            </Avatar>
                        </Box>
                        <Box className={`${style.userInformation}`} >
                            <Typography variant='caption' component='h4' className={`${style.cardData}`}>
                                Fecha de actualización de la plataforma: {toLocaleDateString(date)}
                            </Typography>
                            <Typography variant='subtitle' component='h3' className={`${style.cardData}`}>
                                {responsible.nombres} {responsible.apellidoPaterno}
                            </Typography>
                            <Typography variant='subtitle' component='h5' className={`${style.cardData}`}>
                                {responsible.descripcion}
                            </Typography>
                            <br />
                        </Box>
                        <Box className={`${style.contact}`}>
                            <a href={`mailto:${responsible.correo}?subject=[MÉTRICA] Comentarios acerca de ${indicadorName}`} className={`${style.link}`}>
                                <Avatar sx={{ width: 30, height: 30 }} className={`${style.emailIcon}`}>
                                    <MailIcon />
                                </Avatar>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default IndicadorOwner