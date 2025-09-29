import { Box, Grid } from '@mui/material'
import React from 'react'

const ServiciosEcosistemicos = ({ provisional, regulacion, soporte, cultural }) => {
    return (
        <Grid container item sx={{
            pt: 3
        }}>
            <ImprovedHeader value="Provisionales" borderRight={true} />
            <ImprovedHeader value="Regulación" />

            <ImprovedRow value={provisional} borderRight={true} />
            <ImprovedRow value={regulacion} />

            <ImprovedHeader value="Soporte" borderRight={true} />
            <ImprovedHeader value="Culturales" />

            <ImprovedRow value={soporte} borderRight={true} />
            <ImprovedRow value={cultural} />
        </Grid>
    )
}

const ImprovedHeader = ({ value, borderRight }) => (
    <Grid item xs={6} sx={{
        backgroundColor: '#f8f9fa', fontWeight: 'bold', color: '#002b36',
        borderBottom: '3px solid #085e40', p: 1,
        borderRight: borderRight ? '3px solid #085e40' : '0',
        borderRadius: !borderRight ? '0 5px 0 0' : '5px 0 0 0',
    }}>
        {value}
    </Grid>
)

const ImprovedRow = ({ value, borderRight }) => (
    <Grid item xs={6} sx={{
        p: 1,
        borderRight: borderRight ? '3px solid #085e40' : '0',
    }}>{value}</Grid>
)

export default ServiciosEcosistemicos