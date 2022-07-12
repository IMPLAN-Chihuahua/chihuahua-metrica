import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import style from './PartnersStrip.module.css'

const PartnersStrip = () => {
    const partnerList = ['MUNICIPIO', 'SIGMUN', 'IMPLAN']
    const links = ['http://www.municipiochihuahua.gob.mx', 'https://geoportal.mpiochih.gob.mx/sigmun/apps/webappviewer/index.html?id=abab1eab03774ce18c3610b842f11264', 'https://implanchihuahua.org']
    return (
        <Container className={`${style.partnerContainer}`}>
            <Grid container>
                {partnerList.map((partner, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index} className={`${style.partnerImagesContainer}`}>
                        <a href={links[index]}>
                            <Image src={`/images/partners/${partner}.png`} alt={partner} height={160} width={160} objectFit='contain' title={`Logotipo de ${partner}`} />
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default PartnersStrip