import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import style from './PartnersStrip.module.css'

const PartnersStrip = () => {
    const partnerList = ['CPUM', 'IMPLAN', 'SIGMUN']

    return (
        <Container className={`${style.partnerContainer}`}>
            <h1>Involucrados</h1>
            <Grid container>
                {partnerList.map((partner, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index} className={`${style.partnerImagesContainer}`}>
                        <Image src={`/images/partners/${partner}.png`} alt={partner} height='100' width='100' objectFit='contain' title={`Logotipo de ${partner}`} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default PartnersStrip