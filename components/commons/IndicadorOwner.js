import { Avatar, AvatarGroup, Button, Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import style from './IndicadorOwner.module.css'
import MailIcon from '@mui/icons-material/Mail';
import Title from './Title'

const IndicadorOwner = ({ authorID, indicadorDate }) => {
    return (
        <>
            <Title variant='h4' component='h2'>Responsable</Title>
            <Grid container className={`${style.indicadorOwner}`}>

                <Grid item xs={12} sm={12} md={8} lg={6} xl={6} className={`${style.cardBody}`}>
                    <Box className={`${style.cardContainer}`}>
                        <Box className={`${style.imageContainer}`}>
                            <Avatar alt='Bobby P.' src='https://media.gq.com.mx/photos/61f8318a45749103d307bf61/2:3/w_1124,h_1686,c_limit/robert%20pattinson.jpg' sx={{ width: 100, height: 100 }}>
                            </Avatar>
                        </Box>
                        <Box className={`${style.userInformation}`} >
                            <Typography variant='caption' component='h4' className={`${style.cardData}`}>
                                24 de Julio 2022
                            </Typography>
                            <Typography variant='subtitle' component='h3' className={`${style.cardData}`}>
                                Robert Pattinson
                            </Typography>
                            <Typography variant='subtitle' component='h5' className={`${style.cardData}`}>
                                Robert Douglas Thomas Pattinson (born 13 May 1986) is an English actor. Known for starring in both big-budget and independent films.
                            </Typography>
                            <br />
                        </Box>
                        <Box className={`${style.contact}`}>
                            <Link href='mailto:Bobby.P@gmail.com' className={`${style.link}`}>
                                <Avatar sx={{ width: 30, height: 30 }} className={`${style.emailIcon}`}>
                                    <MailIcon />
                                </Avatar>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default IndicadorOwner