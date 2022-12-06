import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { toUnderScoreCase } from 'helpers/StringUtils';
import Link from 'next/link';
import Image from 'next/image'

import React, { useEffect, useState } from 'react';

import style from './CardTree.module.css';

const imageServer = 'http://siee.mpiochih.gob.mx/imagenes_catalogo/resized';



const CardTree = ({ tree }) => {
    const [isHover, setHover] = useState(false);

    const imageLoader = ({ src }) => {
        return `${imageServer}/${toUnderScoreCase(tree.NOMBRE_CIENTIFICO)}/${toUnderScoreCase(tree.NOMBRE_IMAGEN)}_1.jpg`;
    }

    return (
        <Grid item xs={12} md={3} className={style.CardTreeFlex} >
            <Card  >
                <CardActionArea >
                    <CardMedia
                        sx={{
                            height: 500,
                            width: 400,
                            maxHeight: { xs: 500, md: 400 },
                            maxWidth: { xs: 500, md: 400 }
                        }}
                    >
                        <Image
                            loader={imageLoader}
                            src={`${imageServer}/${toUnderScoreCase(tree.NOMBRE_CIENTIFICO)}/${toUnderScoreCase(tree.NOMBRE_IMAGEN)}_1.jpg`}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            layout="responsive"
                            quality={100}
                            priority={true}
                            loading="eager"
                            unoptimized={true}
                        />

                    </CardMedia>
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            <div dangerouslySetInnerHTML={{ __html: tree.NOMBRE_CIENTIFICO }} />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <div dangerouslySetInnerHTML={{ __html: tree.NOMBRE_COMUN }} />
                        </Typography>
                        <Typography variant="body3" color="text.secondary" >
                            <div dangerouslySetInnerHTML={{ __html: tree.FAMILIA }} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" style={{ backgroundColor: '#507940', color: 'white' }}
                        href={`/arbolado-urbano/catalogo/${tree._id}`}>
                        Ver ficha completa
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardTree