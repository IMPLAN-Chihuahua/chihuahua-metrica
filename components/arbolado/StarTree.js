import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react';

import style from './StarTree.module.css';
import TextWithAvatar from './TextWithAvatar';

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

const StarTree = ({ tree }) => {
    return (
        <Container className={style.StarTree}>
            {/*Star head*/}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'column'} avatar={tree.avatar}>
                        <div dangerouslySetInnerHTML={{ __html: tree.nombre }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
            </Grid>

            {/* Star body 1 */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'row'} avatar={'/images/arbolado/sistema-radicular.png'} subtext={'Sistema radicular'}>
                        <div dangerouslySetInnerHTML={{ __html: tree.sistema }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={trees[2].direction} avatar={'/images/arbolado/sistema-radicular.png'} subtext={tree.riego}>
                        <div dangerouslySetInnerHTML={{ __html: 'Necesidad de riego' }} />
                    </TextWithAvatar>
                </Grid>
            </Grid>

            {/* Star body 2 */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText} ${style.tree}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} sx={{ position: 'relative' }}>
                    <Image src={tree.arbol} layout='fill' objectFit='contain' />
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
            </Grid>

            {/* Star feet */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'row'} avatar={'/images/arbolado/follaje.png'} subtext={tree.follaje}>
                        <div dangerouslySetInnerHTML={{ __html: 'Follaje' }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'row-reverse'} avatar={'/images/arbolado/espacio.png'} subtext={tree.distancia}>
                        <div dangerouslySetInnerHTML={{ __html: 'Distancia óptima' }} />
                    </TextWithAvatar>
                </Grid>
            </Grid>
        </Container>
    )
}

export default StarTree