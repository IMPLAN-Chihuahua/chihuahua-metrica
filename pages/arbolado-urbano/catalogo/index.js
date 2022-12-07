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
import { useCallback } from 'react';
import { debounce } from 'lodash';
import { useEffect } from 'react';

const CRUMBS = [{
    text: 'Arbolado Urbano',
    href: '/arbolado-urbano'
}, {
    text: 'Cátalogo',
    href: `/arbolado-urbano/catalogo`
}];

const fetcher = (url) => fetch(url).then((res) => res.json());

const useArboles = ({ pageIndex, searchQuery }) => {

    const options = {
        revalidateOnFocus: false,
    }

    const { data, error } = useSWR(`${process.env.ARBOLADO_BASE_URL}/biblioteca/arboles?page=${pageIndex}&perPage=8&searchQuery=${searchQuery}`, fetcher, options);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
};



export default function Catalogo(props) {
    const [arboles, setArboles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [pageIndex, setPageIndex] = useState(1);
    const [totalPages, setTotalPages] = useState(10);


    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    const fetchArboles = useCallback(({ pageIndex, searchQuery = '' }) => {
        const perPage = 8;
        const url = `${process.env.ARBOLADO_BASE_URL}/biblioteca/arboles?page=${pageIndex}&perPage=${perPage}&searchQuery=${searchQuery}`;

        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.error.text);
            })
            .then(arboles => {
                setArboles(arboles.biblioteca);
                // setPageIndex(typeof arboles.page !== 'undefined' ? arboles.page : 1)
                setTotalPages(arboles.totalPages);
                setError(false);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [searchQuery, pageIndex]);

    useEffect(() => {
        let isMounted = true;
        if (!isMounted) {
            return;
        }
        fetchArboles({ pageIndex, searchQuery });

        return () => {
            isMounted = false;
        }

    }, [fetchArboles]);

    const handleSearch = useCallback(debounce((e) => {
        setPageIndex(1);
        setSearchQuery(e.target.value);
    }, 300), []);

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
                            !loading ?
                                <TreeList trees={arboles} />
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
