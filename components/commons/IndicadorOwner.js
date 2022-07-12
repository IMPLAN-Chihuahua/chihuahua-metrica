import { Avatar, AvatarGroup, Box, Button, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import style from './IndicadorOwner.module.css'
import MailIcon from '@mui/icons-material/Mail';
import Title from './Title'

const IndicadorOwner = ({ responsible, indicadorDate }, props) => {
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
                                24 de Julio 2022
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
                            <a href={`mailto:${responsible.correo}`} className={`${style.link}`}>
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