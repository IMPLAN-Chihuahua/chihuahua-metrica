import Head from "next/head";
import {
    Typography, Box, Stack, TextField, IconButton,
    Collapse, ToggleButton, InputAdornment, Divider,
    Container, Alert,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form"
import { Clear, Done, FilterAlt, PanoramaFishEye, PausePresentation, Search } from "@mui/icons-material";
import { debounce } from "lodash";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Title from "@components/commons/Title";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import tinycolor from 'tinycolor2';
import Image from "next/image";
import Error from "pages/_error";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { hexAsRGBA } from "helpers/StringUtils";

const ODS_ID = 1;
const UNIDAD_MEDIDA_ID = 2;
const COBERTURA_GEOGRAFICA_ID = 3;

const Indicadores = (props) => {
    const [indicadores, setIndicadores] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [dimension, setDimension] = useState(props.selectedDimension);
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');

    const [filters, setFilters] = useState({
        idOds: 0,
        idCobertura: 0,
        anioUltimoValorDisponible: 0
    });

    const methods = useForm();
    const { watch } = methods;

    const getIndicadores = useCallback((page, searchQuery, filters) => {
        const { idOds, idCobertura, anioUltimoValorDisponible, idUnidadMedida, temas } = filters;
        const queryParams = new URLSearchParams({
            page,
            ...(searchQuery.length > 0 && { searchQuery: searchQuery.trim() }),
            ...(idOds > 0 && { ods: idOds }),
            ...(anioUltimoValorDisponible > 0 && { anioUltimoValorDisponible }),
            ...(idCobertura > 0 && { cobertura: idCobertura }),
            ...(idUnidadMedida > 0 && { medida: idUnidadMedida }),
            ...(temas?.length > 0 && { temas: temas.join(',') })

        });

        const url = `${process.env.INDICADORES_BASE_URL}/dimensiones/${dimension.id}/indicadores?${queryParams}`;
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res.error.text)
            })
            .then(indicadores => {
                setTotalPages(indicadores.totalPages);
                setPage(indicadores.page);
                setIndicadores(indicadores.data);
                setHasError(false);
            })
            .catch((e) => {
                setError(e.message);
                setHasError(true)
            })
            .finally(() => setLoading(false));

    }, [dimension.id, filters, search]);


    useEffect(() => {
        const subscription = watch(value => {
            const { ...data } = value
            const filterValues = {};
            filterValues.idOds = data.ods?.id;
            filterValues.idCobertura = data.cobertura?.id;
            filterValues.anioUltimoValorDisponible = data?.anio?.getFullYear();
            filterValues.idUnidadMedida = data.medida?.id;
            filterValues.temas = data.temas;
            setFilters(filterValues)
        });
        return () => subscription.unsubscribe();
    }, [watch, setFilters])

    const handlePagination = useCallback((_, value) => {
        if (value === page) {
            return;
        }
        localStorage.setItem('indicadores-page', value)
        getIndicadores(parseInt(value), search, filters);
    }, [page, dimension]);

    useEffect(() => {
        const savedPage = parseInt(localStorage.getItem('indicadores-page'))
        getIndicadores(savedPage || 1, search, filters);
    }, [getIndicadores])


    const CRUMBS = [{
        text: 'Sistema de Indicadores del PDU2040 Séptima Actualización',
        href: '/chihuahua-en-datos'
    }, {
        text: `${dimension.titulo.substring(0, 50)}${dimension.titulo.length > 50 ? '...' : ''}`,
    }];

    if (hasError) {
        return <Error statusCode={props.errorCode} message={props?.message} />
    }

    return (
        <>
            <Head>
                <title>{dimension?.titulo} - Indicadores</title>
                <meta name="description" content={dimension?.titulo} />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'flex-end', lg: 'space-between' },
                        paddingTop: 1,
                        paddingBottom: 1,
                        alignItems: 'center'
                    }}>
                    <PageBreadcrumb crumbs={[...CRUMBS]} />
                    <NavBackAndFoward
                        prev={{
                            title: 'Dimensión anterior',
                            disabled: dimension.id === 1,
                            onClick: () => localStorage.removeItem('indicadores-page'),
                            link: `/chihuahua-en-datos/dimensiones/${dimension.id - 1}/indicadores`
                        }}
                        next={{
                            title: 'Siguiente dimensión',
                            disabled: dimension.id === 3,
                            onClick: () => localStorage.removeItem('indicadores-page'),
                            link: `/chihuahua-en-datos/dimensiones/${dimension.id + 1}/indicadores`
                        }}
                    />
                </Box>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    my={{ xs: 1, md: 3 }}
                    spacing={2}
                    justifyContent='space-around'
                >
                    <Box
                        sx={{
                            minWidth: { xs: '100%', sm: 500, md: 400 },
                            maxWidth: 400,
                            height: 250,
                            position: 'relative',
                            alignSelf: { xs: 'center', md: 'flex-start' }
                        }}>
                        <Image
                            loader={() => dimension.urlImagen}
                            src={dimension?.urlImagen}
                            layout='fill'
                            objectFit='cover'
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            wordWrap: 'break-word',
                            alignSelf: 'flex-start'
                        }}>
                        <Title variant='h4' component='h1'>{dimension.titulo}</Title>
                        <Typography>{dimension.descripcion}</Typography>
                    </Box>
                </Stack>
                <section>
                    <Title variant='h4' component='h2'>Indicadores</Title>
                    <FormProvider {...methods}>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <IndicadorSearchBar setSearch={setSearch} />
                            <ToggleButton
                                value='cheked'
                                selected={open}
                                onChange={() => setOpen(old => !old)}
                                sx={{ ml: 3 }}
                            >
                                <FilterAlt />
                            </ToggleButton>
                        </Box>
                        <Collapse in={open}>
                            <IndicadorFilter
                                odsList={[...props.ods.data]}
                                unidadMedidaList={[...props.medidas.data]}
                                coberturaList={[...props.coberturas.data]}
                            />
                        </Collapse>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',

                            gap: 1,
                            m: 2
                        }}>
                            {
                                props.temas.data.map(tema => (
                                    <FormControlLabel
                                        key={tema.id}
                                        control={
                                            <Checkbox
                                                size="small"
                                                icon={<PanoramaFishEye />}
                                                checkedIcon={<CheckCircleIcon />}
                                                onChange={console.log}
                                                value={tema.id}
                                                {...methods.register('temas')}
                                                sx={{
                                                    color: dimension.color,
                                                    '&.Mui-checked': {
                                                        color: dimension.color,
                                                    },
                                                }}
                                            />
                                        }
                                        label={<Typography sx={{ fontSize: '17px' }}>{tema.temaIndicador}</Typography>}
                                        sx={{
                                            borderRadius: '50px',
                                            border: `1px solid ${dimension.color}`,
                                            p: '1px',
                                            pr: '10px',
                                            backgroundColor: hexAsRGBA(dimension.color, 0.1),
                                        }}
                                    />
                                ))
                            }
                        </Box>
                    </FormProvider>
                    {isLoading ?
                        Array.from(new Array(4)).map((_, i) => <IndicadorSkeleton key={i} />)
                        :
                        !hasError &&
                        (<>
                            <IndicadorList
                                indicadores={indicadores}
                                fontColor={tinycolor(dimension.color).darken(60).toHexString()}
                            />
                            <IndicadorPagination
                                page={page}
                                totalPages={totalPages}
                                handlePagination={handlePagination}
                            />
                        </>)
                    }
                    {!isLoading && hasError && <Alert severity='error' sx={{ marginBottom: 2 }}>Hubo un error</Alert>}
                </section>
            </Container>
        </>
    )
}

const IndicadorSearchBar = ({ setSearch }) => {
    const textRef = useRef(null);

    const [searching, setSearching] = useState(false);

    const handleClear = () => {
        textRef.current.value = '';
        setSearch('');
        setSearching(false);
    };

    const handleChange = useCallback(debounce(e => {
        setSearch(e.target.value);
        setSearching(true);
    }, 300), [])


    return (
        <TextField
            inputRef={textRef}
            InputProps={{
                startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>),
                endAdornment: (
                    searching &&
                    <IconButton onClick={handleClear}>
                        <Clear />
                    </IconButton>
                )
            }}
            name='searchQuery'
            fullWidth
            onChange={handleChange}
            placeholder='Buscar indicadores por nombre'
        />
    )
};

export async function getServerSideProps(context) {
    const baseUrl = process.env.INDICADORES_BASE_URL;
    const { idDimension } = context.params;
    const selectedDimensionRes = await fetch(`${baseUrl}/dimensiones/${idDimension}`);
    const errorCode = selectedDimensionRes.ok ? false : selectedDimensionRes.status;
    const selectedDimension = await selectedDimensionRes.json();


    if (errorCode) {
        return {
            props: {
                errorCode,
                ...selectedDimension
            }
        }
    }

    const [odsRes, medidaRes, coberturaRes, temasRes]
        = await Promise.all([
            fetch(`${baseUrl}/catalogos/${ODS_ID}`),
            fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA_ID}`),
            fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA_ID}`),
            fetch(`${baseUrl}/dimensiones/${idDimension}/temas`)
        ]);

    const [ods, medidas, coberturas, temas] = await Promise.all([
        odsRes.json(),
        medidaRes.json(),
        coberturaRes.json(),
        temasRes.json()
    ]);
    return {
        props: {
            errorCode,
            key: idDimension,
            ods,
            coberturas,
            medidas,
            temas,
            selectedDimension: { ...selectedDimension.data }
        },
    };
};

export default Indicadores