import { Typography, Box, CardActionArea, Link as MUILink } from '@mui/material';
import { toUnderScoreCase } from 'helpers/StringUtils';
import Image from 'next/image'
import NextLink from "next/link";

import React, { useEffect, useState } from 'react';

import style from './CardTree.module.css';
const imageServer = 'https://local-arbolado.s3.us-east-2.amazonaws.com/imagenes_catalogo/resized';


const CardTree = ({ tree }) => {
    const imageLoader = ({ src }) => {
        return `${imageServer}/${toUnderScoreCase(tree.NOMBRE_CIENTIFICO)}/${toUnderScoreCase(tree.NOMBRE_IMAGEN)}_1.jpg`;
    }
    return (
        <Box>
            <NextLink href={`/arbolado-urbano/catalogo/${tree._id}`} passHref>

                <Box className={`${style.tree}`}>
                    <CardActionArea>
                        <Box

                            sx={{
                                height: 450,
                                width: 350,
                            }}
                        >
                            <Image
                                loader={imageLoader}
                                src={`${imageServer}/${toUnderScoreCase(tree.NOMBRE_CIENTIFICO)}/${toUnderScoreCase(tree.NOMBRE_IMAGEN)}_1.jpg`}
                                alt={`Imagen de ${tree.NOMBRE_CIENTIFICO} tomada por ${tree.IMAGENES_AUTOR}`}
                                width={500}
                                height={500}
                                layout="responsive"
                                quality={100}
                                priority={true}
                                loading="eager"
                                unoptimized={true}
                                className={`${style.grow}`}
                                objectFit='cover'
                                objectPosition={`20% 50%`}
                            />
                            <Box sx={{
                                p: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Box>
                                    <Typography gutterBottom variant="h5" fontWeight={550} >
                                        {tree.NOMBRE_CIENTIFICO}
                                    </Typography>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" fontWeight={550}>
                                            Nombre coloquial: {tree.NOMBRE_COMUN}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{
                                            fontStyle: 'italic'
                                        }} >
                                            Familia: {tree.FAMILIA}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </CardActionArea>
                </Box>
            </NextLink>
        </Box>
    );
};

export default CardTree