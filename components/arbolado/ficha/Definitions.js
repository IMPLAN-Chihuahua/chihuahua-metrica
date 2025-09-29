import { Grid, Typography } from '@mui/material'
import { toTitleCase } from 'helpers/StringUtils'
import React from 'react'
const Definitions = ({ icon, category, value }) => {
    return (
        <Grid container item xs={4} md={4} lg={4} sx={{
            display: 'flex', flexDirection: 'row', pt: 2
        }}>
            <Grid item xs={2} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: '#002b36' }}>
                {icon}
            </Grid>
            <Grid item xs={10} md={10} lg={10} sx={{
                display: 'flex', alignContent: 'center', alignItems: 'center', color: '#002b36'
            }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500, fontStyle: 'italic' }} >
                    {(category)}
                </Typography>
            </Grid>
            <Grid item xs={2} md={2} lg={2} sx={{}}>

            </Grid>
            <Grid item xs={10} md={10} lg={10} sx={{
                display: 'flex', alignContent: 'center', alignItems: 'center'
            }}
            >
                <Typography variant="inherit" component="div" sx={{ fontStyle: 'italic', color: 'gray' }} >
                    {toTitleCase(value)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Definitions