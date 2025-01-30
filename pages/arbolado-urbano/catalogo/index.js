import Head from 'next/head';
import { Container, Typography, Box, Button, Grid, CardActionArea, CardActions, Link as MUILink, Pagination, TextField, IconButton, InputAdornment, Divider } from '@mui/material';
import * as React from 'react';
import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import useSWR from 'swr';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SkeletonTree from '@components/arbolado/SkeletonTree';
import { useCallback } from 'react';
import { debounce } from 'lodash';
import { useEffect } from 'react';
import Image from 'next/image';
import CardTree from '@components/arbolado/CardTree';


import style from './Catalogo.module.css';
import FilterCatalog from '@components/arbolado/FilterCatalog';
import { parametizeQuery } from 'helpers/ObjectUtils';

const CRUMBS = [{
    text: 'Arbolado Urbano',
    href: '/arbolado-urbano'
}, {
    text: 'Cátalogo',
    href: `/arbolado-urbano/catalogo`
}];

export default function Catalogo(props) {
    const [arboles, setArboles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState([]);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [pageIndex, setPageIndex] = useState(1);
    const [totalPages, setTotalPages] = useState(10);


    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    const fetchArboles = useCallback(({ pageIndex, searchQuery = '' }) => {
        const perPage = 8;
        const parametizedFilters = parametizeQuery(filters);

        const url = `${process.env.ARBOLADO_BASE_URL}/biblioteca/arboles?page=${pageIndex}&perPage=${perPage}&searchQuery=${searchQuery}&${parametizedFilters}`;
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.error.text);
            })
            .then(arboles => {
                setArboles(arboles.biblioteca);
                setTotalPages(arboles.totalPages);
                setError(false);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [searchQuery, filters, pageIndex]);

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
            <Box className={style.catalogo}>
                <Grid container rowSpacing={1} columnSpacing={1}  >
                    <Grid item xs={12} md={12} lg={12}  >
                        <Banner />
                    </Grid>
                    <Grid item xs={12} md={2} lg={2} sx={{
                        maxHeight: '101vh',
                        overflowY: 'auto',
                    }} >
                        <FilterCatalog filters={filters} setFilters={setFilters} />
                    </Grid>
                    <Grid item container xs={12} md={10} lg={10} >
                        <Box sx={{ pt: 2, pb: 2, pl: 3, pr: 4, width: '100%' }}>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Buscar árbol por nombre científico, nombre coloquial o familia"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                sx={{ width: '100%' }}
                                onChange={handleSearch}
                            />
                        </Box>

                        <Grid item container xs={12} md={12} lg={12} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: arboles.length % 2 === 0 && arboles.length > 2 ? 'center' : 'start',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}>
                            {
                                !loading ?
                                    arboles?.map((arbol) => {
                                        return (
                                            <CardTree key={arbol._id} tree={arbol} />
                                        )
                                    })
                                    :
                                    <SkeletonTree />
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                p: 2,
                width: '100%',
            }}>

                <Pagination count={totalPages} page={pageIndex} onChange={handleChange} shape='rounded' />
            </Box>
        </>
    )
};

const Banner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '40vh'
            }}>
            <Image
                loader={({ src }) => `https://local-arbolado.s3.us-east-2.amazonaws.com/stock-vector-tropical-leaf-wallpaper-luxury-nature-leaves-pattern-design-golden-banana-leaf-line-arts-hand-1825228952.jpg`}
                src='arbolado_urbano_banner_principal.jpg'
                layout='fill'
                objectFit='cover'
            />
        </Box>
    )
}