import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

import style from './StarTree.module.css';
import TextWithAvatar from './TextWithAvatar';

const StarTree = ({ tree }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredTree, setHoveredTree] = useState(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });


    const onMouseEnter = (id) => {
        setIsHovering(true);
        setHoveredTree(id);
        // setCoords({ x: mouseX, y: mouseY });
    }

    const onMouseLeave = (id) => {
        setIsHovering(false);
        setHoveredTree(null);
        console.log('may god help us');
    }

    return (
        <Container className={style.StarTree}>
            {/*Star head*/}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'column'} avatar={tree.avatar} header={true}>
                        <div dangerouslySetInnerHTML={{ __html: tree.nombre }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
            </Grid>

            {/* Star body 1 */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'row'} avatar={'/images/arbolado/sistema-radicular.png'} subtext={tree.sistema}>
                        <div dangerouslySetInnerHTML={{ __html: 'Sistema radicular' }} />
                    </TextWithAvatar>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                    <TextWithAvatar flexDirection={'row-reverse'} avatar={'/images/arbolado/riego.png'} subtext={tree.riego}>
                        <div dangerouslySetInnerHTML={{ __html: 'Necesidad de riego' }} />
                    </TextWithAvatar>
                </Grid>
            </Grid>

            {/* Star body 2: Tree */}
            <Grid container>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.centeredText}`}>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} sx={{ position: 'relative' }} className={` ${style.tree}`} onMouseEnter={(e) => onMouseEnter(tree.id)} onMouseLeave={(e) => onMouseLeave(tree.id)}>
                    <Image src={tree.arbol} className={style.arbol} layout='fill' objectFit='contain' />
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4} className={`${style.treeDatasheet} ${isHovering ? style.treeHovered : style.treeUnhovered}`} sx={{ position: 'relative' }}>
                    <Image src={tree.ficha} height='500px' width='500px' objectFit='contain' className={style.treeFicha} />
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