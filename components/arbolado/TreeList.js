import React from 'react'
import StarTree from './StarTree'

const trees = [
    {
        id: 1,
        avatar: '/images/arbolado/mezquite_C.png',
        arbol: '/images/arbolado/mezquite_A.png',
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
        nombre: '<b>Huizache/</b> Vachellia Farnesiana',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
    {
        id: 3,
        avatar: '/images/arbolado/huizache_C.png',
        arbol: '/images/arbolado/huizache_A.png',
        nombre: '<b>Huizache Chino/</b> Vachellia Schaffneri',
        sistema: 'Profundo (>1.5m)',
        riego: 'Baja',
        follaje: 'Perennifolio',
        distancia: '7',
    },
    {
        id: 4,
        avatar: '/images/arbolado/miembre_C.png',
        arbol: '/images/arbolado/miembre_A.png',
        nombre: '<b>Miembre/</b> Chilopsis Linearis',
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
                        <StarTree tree={tree} />
                    )
                })
            }
        </>
    )
}

export default TreeList