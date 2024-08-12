import { Box, Grid } from '@mui/material'
import React from 'react'

const TemasBook = () => {
    return (
        <Grid container
            sx={{
                height: '50vh',
                width: '100%',
            }}
        >
            <Grid item xs={12} md={6} sx={{ backgroundColor: 'blue' }}></Grid>
            <Grid item xs={12} md={6} sx={{ backgroundColor: 'green' }}></Grid>
        </Grid>
    )
}

export default TemasBook