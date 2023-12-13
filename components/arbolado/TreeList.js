import React from 'react';
import StarTree from './StarTree'
import CardTree from './CardTree'
import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink } from '@mui/material';

import style from './CardTree.module.css';

const TreeList = ({ trees }) => {
    return (
        <Grid container spacing={3} className={style.CardTree} >{
            trees?.map((tree) => {
                return (
                    <CardTree key={tree._id} tree={tree} />
                )
            })
        }
        </Grid>
    )

};

export default TreeList;