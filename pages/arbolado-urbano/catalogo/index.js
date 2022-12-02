import Head from 'next/head';
import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink } from '@mui/material';
import * as React from 'react';
import TreeList from '@components/arbolado/TreeList';


const Catalogo = () => {
    return (
        <>
        <Head>
            <title>Catálogo de arboles</title>
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
            <Box sx={{ marginBottom: 3 }}>
                <Typography
                    textAlign='center'
                    fontSize={18}
                    letterSpacing={2}
                    lineHeight={2}
                >
                    En esta sección podrás encontrar un listado de 102 especies de árboles en Chihuahua
                </Typography>
            </Box>

            <section>
                <Grid container rowSpacing={1} columnSpacing={1} >
                    <TreeList />
                </Grid>
            </section>
        </Container>
       
        </>
    )
};


export default Catalogo;