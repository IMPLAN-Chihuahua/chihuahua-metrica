import { Grid, Typography } from '@mui/material'
import { toTitleCase } from 'helpers/StringUtils'
import React from 'react'

const Titular = ({ header, value }) => {
    return (
        <Grid item xs={3} >
            <Typography variant="h6" component="div" sx={{ fontWeight: 400, backgroundColor: '#085e40', color: 'white', pl: 1 }} > {header} </Typography>
            <Typography variant="body1" component="div" sx={{
                fontWeight: 500,
                borderStyle: 'solid',
                borderColor: '#085e40',
                padding: 1,
            }} > {toTitleCase(value)} </Typography>
        </Grid>
    )
}

export default Titular