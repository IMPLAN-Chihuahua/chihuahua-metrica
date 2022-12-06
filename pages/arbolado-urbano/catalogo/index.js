import Head from 'next/head';
import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink, Pagination, TextField, IconButton, InputAdornment } from '@mui/material';
import * as React from 'react';
import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import TreeList from '@components/arbolado/TreeList';
import useSWR from 'swr';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SkeletonTree from '@components/arbolado/SkeletonTree';

const CRUMBS = [{
    text: 'Arbolado Urbano',
    href: '/arbolado-urbano'
}, {
    text: 'Cátalogo',
    href: `/arbolado-urbano/catalogo`
}];

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Catalogo(props) {
    const [pageIndex, setPageIndex] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(10);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };
    // const data = props.data;
    const { data, error } = useSWR(`${process.env.ARBOLADO_BASE_URL}/biblioteca/arboles?page=${pageIndex}&perPage=8&searchQuery=${searchQuery}`, fetcher);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setPageIndex(1);
        setTotalPages(data?.totalPages);
    }

    return (
        <>
            <Head>
                <title>Catálogo de arboles</title>
            </Head>
            <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
                <PageBreadcrumb crumbs={[...CRUMBS]} />
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
                        En esta sección podrás encontrar un listado de 125 especies de árboles en Chihuahua
                    </Typography>

                    <TextField
                        id="input-with-icon-textfield"
                        label="Buscar árbol por nombre científico, nombre coloquial o familia"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        sx={{ width: '100%' }}
                        onChange={handleSearch}
                    />

                </Box>

                <section>
                    <Grid container rowSpacing={1} columnSpacing={1} >
                        {
                            data && data.biblioteca ?
                                <TreeList trees={data.biblioteca} />
                                :
                                <SkeletonTree />
                        }
                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 3
                        }}
                    >
                        <Pagination count={totalPages} page={pageIndex} onChange={handleChange} showFirstButton showLastButton />
                    </Box>
                </section>
            </Container>

        </>
    )
};
