import React from 'react'
import { Grid, Link as MUILink } from '@mui/material';
import style from './CardTree.module.css';
import StarTree from './StarTree'
import CardTree from './CardTree'

const trees = [
    {
        id: 1,
        avatar: '/images/arbolado/mezquite_C.png',
        arbol: '/images/arbolado/mezquite_A.png',
        ficha: '/images/arbolado/mezquite_F.png',
        nombre: '<b>Mezquite/</b> Proposis Glandulosa',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
    {
        id: 2,
        avatar: '/images/arbolado/huizache_C.png',
        arbol: '/images/arbolado/huizache_A.png',
        ficha: '/images/arbolado/huizache_F.png',
        nombre: '<b>Huizache/</b> Vachellia Farnesiana',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
    {
        id: 3,
        avatar: '/images/arbolado/palo-verde_C.png',
        arbol: '/images/arbolado/palo-verde_A.png',
        ficha: '/images/arbolado/palo-verde_F.png',
        nombre: '<b>Palo Verde/</b> Parkinsonia Aculeata',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
    {
        id: 4,
        avatar: '/images/arbolado/mimbre_C.png',
        arbol: '/images/arbolado/mimbre_A.png',
        ficha: '/images/arbolado/mimbre_F.png',
        nombre: '<b>Mimbre/</b> Chilopsis Linearis',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Caducifolio',
        distancia: '7',
    },
    {
        id: 5,
        avatar: '/images/arbolado/mimbre_C.png',
        arbol: '/images/arbolado/mimbre_A.png',
        ficha: '/images/arbolado/mimbre_F.png',
        nombre: '<b>Mimbre/</b> Chilopsis Linearis',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Caducifolio',
        distancia: '7',
    },
    {
        id: 6,
        avatar: '/images/arbolado/mimbre_C.png',
        arbol: '/images/arbolado/mimbre_A.png',
        ficha: '/images/arbolado/mimbre_F.png',
        nombre: '<b>Mimbre/</b> Chilopsis Linearis',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Caducifolio',
        distancia: '7',
    },
    {
        id: 7,
        avatar: '/images/arbolado/mimbre_C.png',
        arbol: '/images/arbolado/mimbre_A.png',
        ficha: '/images/arbolado/mimbre_F.png',
        nombre: '<b>Mimbre/</b> Chilopsis Linearis',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Caducifolio',
        distancia: '7',
    },
    {
        id: 8,
        avatar: '/images/arbolado/huizache_C.png',
        arbol: '/images/arbolado/huizache_A.png',
        ficha: '/images/arbolado/huizache_F.png',
        nombre: '<b>Huizache/</b> Vachellia Farnesiana',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
]

const TreeList = () => {
    return (
        <>
            <Grid container spacing={3} className={style.CardTree} >
                {
                    trees.map((tree, index) => {
                        return (
                            <CardTree key={index} tree={tree} />
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default TreeList