import React from 'react'
import StarTree from './StarTree'

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
]

const TreeList = () => {
    return (
        <>
            {
                trees.map((tree, index) => {
                    return (
                        <StarTree key={index} tree={tree} />
                    )
                })
            }
        </>
    )
}

export default TreeList