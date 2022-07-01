import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

import style from './StarTree.module.css'
import TextWithAvatar from './TextWithAvatar'

const trees = [
    {
        'text': '<b>Mezquite/</b> Proposis Glandulosa',
        'subtext': '',
        'avatar': '/images/arbolado/mezquite_C.png',
        'direction': 'column',
    },
    {
        'text': 'Sistema radicular',
        'subtext': 'Profundo (>1.5m)',
        'avatar': '/images/arbolado/sistema-radicular.png',
        'direction': 'row',
    },
    {
        'text': 'Necesidad de riego',
        'subtext': 'Baja',
        'avatar': '/images/arbolado/riego.png',
        'direction': 'row-reverse',
    },
    {
        'text': 'Follaje',
        'subtext': 'Perennifolio',
        'avatar': '/images/arbolado/follaje.png',
        'direction': 'row',
    },
    {
        'text': 'Distancia óptima',
        'subtext': '7',
        'avatar': '/images/arbolado/espacio.png',
        'direction': 'row-reverse',
    },
]

const StarTree = () => {
    return (
        <Container className={style.StarTree}>
            {/*Star head*/}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[0].direction} avatar={trees[0].avatar}>
                        <div dangerouslySetInnerHTML={{ __html: trees[0].text }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
            </Grid>

            {/* Star body 1 */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[1].direction} avatar={trees[1].avatar} subtext={trees[1].subtext}>
                        <div dangerouslySetInnerHTML={{ __html: trees[1].text }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[2].direction} avatar={trees[2].avatar} subtext={trees[2].subtext}>
                        <div dangerouslySetInnerHTML={{ __html: trees[2].text }} />
                    </TextWithAvatar>
                </Grid>
            </Grid>

            {/* Star body 2 */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText} ${style.tree}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} sx={{ position: 'relative' }}>
                    <Image src={'/images/arbolado/huizache_A.png'} layout='fill' objectFit='contain' />
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
            </Grid>

            {/* Star feet */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[3].direction} avatar={trees[3].avatar} subtext={trees[3].subtext}>
                        <div dangerouslySetInnerHTML={{ __html: trees[3].text }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[4].direction} avatar={trees[4].avatar} subtext={trees[4].subtext}>
                        <div dangerouslySetInnerHTML={{ __html: trees[4].text }} />
                    </TextWithAvatar>
                </Grid>
            </Grid>
        </Container>
    )
}

export default StarTree