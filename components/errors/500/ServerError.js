import { Box, Grid, Link as MUILink, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const ServerError = () => {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        backgroundColor: '#081434',
        alignItems: 'center'
      }}>
      <Grid item container xs={12} md={6} height='fit-content'>
        <Grid item xs={12} height='fit-content'>
          <Typography
            textAlign='center'
            fontSize={32}
            color='white'
            fontWeight={500}
            mt={{ xs: 2, md: 0 }}
          >
            Servicio temporalmente no disponible
          </Typography>
          <Typography color='white' fontSize={22} textAlign='center'>
            Lo sentimos, intenta recargar la página o vuelve más tarde
          </Typography>
        </Grid>
        <Grid item xs={12} position='relative' height={{ xs: '200px', md: '300px' }}>
          <Image src='/error.png' layout='fill' objectFit='contain' />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} position='relative' height={{ xs: '400px', md: '500px' }}>
        <Image src='/LAP01.png' layout='fill' objectFit='contain' />
      </Grid>
    </Grid>
  )
}


export default ServerError;