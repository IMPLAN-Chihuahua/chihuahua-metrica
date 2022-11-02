import Head from 'next/head';
import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import StarTree from '@components/arbolado/StarTree';
import TreeList from '@components/arbolado/TreeList';
import { Margin } from '@mui/icons-material';


const Catalogo = () => {
    return (
        <>
        <Head>
            <title>Catalogo de arboles</title>
        </Head>
        <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
            <Box>
                <Typography
                    textAlign='center'
                    fontSize={30}
                    letterSpacing={2}
                    lineHeight={2}
                >
                    Catálogo de árboles
                </Typography>
            </Box>
            <Box>
                <Typography
                    textAlign='center'
                    fontSize={18}
                    letterSpacing={2}
                    lineHeight={2}
                >
                    En esta sección podrás encontrar un listado de 102 especies de árboles en Chihuahua
                </Typography>
            </Box>
        </Container>

        <Box sx={{ bgcolor: '#f1faee', pt: 5 }}>
            <section >
                <TreeList />
            </section>
        </Box>
        </>
    )
};

export default Catalogo;