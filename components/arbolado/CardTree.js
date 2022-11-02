import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FichaArbol from 'pages/arbolado-urbano/catalogo'

import Image from 'next/image'
import React, { useEffect, useState } from 'react';

import style from './CardTree.module.css';
import TextWithAvatar from './TextWithAvatar';


const CardTree = ({tree}) => {

    return (
        <Grid item xs={6} md={3} className={style.CardTreeFlex} >
            <Card  >
                <CardActionArea >
                    <CardMedia
                        component="img"
                        image={tree.arbol}
                    />
                        
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            <div dangerouslySetInnerHTML={{ __html: tree.nombre }} />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <div dangerouslySetInnerHTML={{ __html: tree.sistema }} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Ver ficha completa
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardTree