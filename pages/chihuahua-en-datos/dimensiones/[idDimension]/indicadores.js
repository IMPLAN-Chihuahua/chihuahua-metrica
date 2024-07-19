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

const indicadores = (props) => {
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
        const { idOds, idCobertura, anioUltimoValorDisponible, idUnidadMedida, idModulo } = filters;

        const queryParams = new URLSearchParams({
            page,
            idDimension: dimension.id,
            ...(searchQuery.length > 0 && { searchQuery: searchQuery.trim() }),
            ...(idOds > 0 && { idOds }),
            ...(anioUltimoValorDisponible > 0 && { anioUltimoValorDisponible }),
            ...(idCobertura > 0 && { idCobertura }),
            ...(idUnidadMedida > 0 && { idUnidadMedida }),
            ...(idModulo?.length > 0 && { modulos: idModulo.join(',') })

        });

        const url = `${process.env.INDICADORES_BASE_URL}/dimensiones/indicadores?${queryParams}`;
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
            filterValues.idModulo = watch('modulos');
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
        text: 'Chihuahua en Datos',
        href: '/chihuahua-en-datos'
    }, {
        text: dimension.titulo,
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
                    direction='row'
                    mb={3}
                    spacing={2}
                    flexWrap={{ xs: 'wrap', md: 'nowrap' }}
                    justifyContent='space-between'
                    divider={
                        <Divider
                            orientation='vertical'
                            flexItem
                            sx={{ backgroundColor: dimension.color, width: 3, height: '180px', alignSelf: 'center' }} />
                    }
                >
                    <Box
                        sx={{
                            width: { xs: '100%' },
                            maxWidth: 400,
                            height: 250,
                            position: 'relative',
                        }}>
                        <Image
                            loader={() => dimension.urlImagen}
                            src={dimension?.urlImagen}
                            layout='fill'
                            objectFit='cover'
                        />
                    </Box>
                    <Box
                        component='section'
                        sx={{
                            mt: { xs: 1, md: 0 },
                            wordWrap: 'break-word'
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
                            flexWrap: 'wrap',
                            gap: 1,
                            m: 2
                        }}>
                            {
                                props.modulos.data.map(modulo => (
                                    <Controller
                                        name='modulos'
                                        defaultValue={[]}
                                        key={modulo.id}
                                        control={methods.control}
                                        render={({ field: { value, onChange } }) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        icon={<PanoramaFishEye />}
                                                        checkedIcon={<CheckCircleIcon />}
                                                        onChange={onChange}
                                                        value={modulo.id}
                                                        {...methods.register('modulos')}
                                                        sx={{
                                                            color: dimension.color,
                                                            '&.Mui-checked': {
                                                                color: dimension.color,
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={<Typography sx={{ fontSize: '12px' }}>{modulo.temaIndicador}</Typography>}
                                                sx={{
                                                    borderRadius: '50px',
                                                    border: value.includes(modulo.id.toString()) ? `1px solid ${dimension.color}` : '1px solid #ccc',
                                                    p: '1px',
                                                    pr: '10px',
                                                    backgroundColor: value.includes(modulo.id.toString()) ? hexAsRGBA(dimension.color, 0.1) : 'transparent',
                                                }}
                                            />
                                        )}
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

    const [odsRes, medidaRes, coberturaRes, modulosRes]
        = await Promise.all([
            fetch(`${baseUrl}/catalogos/${ODS_ID}`),
            fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA_ID}`),
            fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA_ID}`),
            fetch(`${baseUrl}/dimensiones/${idDimension}/modulos`)
        ]);

    const [ods, medidas, coberturas, modulos] = await Promise.all([
        odsRes.json(),
        medidaRes.json(),
        coberturaRes.json(),
        modulosRes.json()
    ]);
    return {
        props: {
            errorCode,
            key: idDimension,
            ods,
            coberturas,
            medidas,
            modulos,
            selectedDimension: { ...selectedDimension.data }
        },
    };
};

export default indicadores