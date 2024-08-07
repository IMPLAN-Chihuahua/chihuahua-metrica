import Head from "next/head";
import {
  Typography, Box, Stack, TextField, IconButton,
  Collapse, ToggleButton, InputAdornment, Divider,
  Container, Alert
} from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form"
import { serialize } from "helpers/StringUtils";
import { Clear, FilterAlt, Search } from "@mui/icons-material";
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

const ODS_ID = 1;
const UNIDAD_MEDIDA_ID = 2;
const COBERTURA_GEOGRAFICA_ID = 3;

export default function Modulo(props) {
  const [indicadores, setIndicadores] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedTema, setSelectedTema] = useState(props.selectedTema);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState('');


  const methods = useForm();
  const { watch } = methods;
  const fetchIndicadores = useCallback((fixedPage, search = '') => {
    const url =
      `${process.env.INDICADORES_BASE_URL}/modulos/${selectedTema.id}/indicadores?page=${fixedPage}&searchQuery=${search}${filters}`;
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
      .catch(() => {
        setHasError(true)
      })
      .finally(() => setLoading(false));
  }, [selectedTema.id, filters, search]);

  useEffect(() => {

    const savedPage = parseInt(localStorage.getItem('indicadores-page'))
    fetchIndicadores(savedPage || 1, search);
  }, [fetchIndicadores]);

  useEffect(() => {
    const subscription = watch(value => {
      const { tema, ...data } = value;

      setSelectedTema(tema || props.selectedTema)
      const filterValues = {};
      filterValues.idOds = data.ods?.id;
      filterValues.idUnidadMedida = data.medida?.id;
      filterValues.idCobertura = data.cobertura?.id;
      filterValues.tendenciaActual = data?.tendenciaActual?.value;
      filterValues.anioUltimoValorDisponible = data?.anio?.getFullYear();
      setFilters(serialize(filterValues))
    });
    return () => subscription.unsubscribe();
  }, [watch, setFilters]);

  const handlePagination = useCallback((_, value) => {
    if (value === page) {
      return;
    }
    localStorage.setItem('indicadores-page', value)
    fetchIndicadores(parseInt(value))
  }, [page, selectedTema]);

  const CRUMBS = [{
    text: 'Sistema de Indicadores del PDUCP',
    href: '/chihuahua-en-datos'
  }, {
    text: selectedTema.temaIndicador,
  }];

  if (props.errorCode) {
  }

  return (
    <>
      <Head>
        <title>{selectedTema?.temaIndicador} - Indicadores</title>
        <meta name="description" content={selectedTema?.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container maxWidth="lg" sx={{ mb: 3, mt: 3 }}>
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
              title: 'Temática anterior',
              disabled: selectedTema.id === 1,
              onClick: () => localStorage.removeItem('indicadores-page'),
              link: `/chihuahua-en-datos/temas/${selectedTema.id - 1}/indicadores`
            }}
            next={{
              title: 'Siguiente temática',
              disabled: selectedTema.id === 14,
              onClick: () => localStorage.removeItem('indicadores-page'),
              link: `/chihuahua-en-datos/temas/${selectedTema.id + 1}/indicadores`
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
              sx={{ backgroundColor: selectedTema.color, width: 3, height: '180px', alignSelf: 'center' }} />
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
              loader={() => selectedTema.urlImagen}
              src={selectedTema.urlImagen}
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
            <Title variant='h3' component='h1'>{selectedTema.temaIndicador}</Title>
            <Typography>{selectedTema.descripcion}</Typography>
          </Box>
        </Stack>
        <section>
          <Title variant='h4' component='h2'>Indicadores</Title>
          <FormProvider {...methods}>
            <Box sx={{ display: 'flex', mb: 3 }}>
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
                modulosList={[...props.temas.data]}
              />
            </Collapse>
          </FormProvider>
          {isLoading ?
            Array.from(new Array(4)).map((_, i) => <IndicadorSkeleton key={i} />)
            :
            !hasError &&
            (<>
              <IndicadorList
                indicadores={indicadores}
                fontColor={tinycolor(selectedTema.color).darken(60).toHexString()}
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
  );
};

export async function getServerSideProps(context) {
  const baseUrl = process.env.INDICADORES_BASE_URL;
  const { idTema } = context.params;
  const selectedTemaRes = await fetch(`${baseUrl}/modulos/${idTema}`);
  const errorCode = selectedTemaRes.ok ? false : selectedTemaRes.status;
  const selectedTema = await selectedTemaRes.json();
  if (errorCode) {
    return {
      props: {
        errorCode,
        ...selectedTema
      }
    }
  }

  const [odsRes, medidaRes, coberturaRes, temasRes,]
    = await Promise.all([
      fetch(`${baseUrl}/catalogos/${ODS_ID}`),
      fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA_ID}`),
      fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA_ID}`),
      fetch(`${baseUrl}/modulos`)
    ]);

  const [ods, medidas, coberturas, temas,] = await Promise.all([
    odsRes.json(),
    medidaRes.json(),
    coberturaRes.json(),
    temasRes.json(),
  ]);
  return {
    props: {
      errorCode,
      key: idTema,
      ods,
      coberturas,
      medidas,
      temas,
      selectedTema: { ...selectedTema.data }
    },
  };
};


const IndicadorSearchBar = ({ setSearch }) => {
  const textRef = useRef(null)
  const handleClear = () => {
    textRef.current.value = '';
    setSearch('')
    setSearching(false);
  };
  const [searching, setSearching] = useState(false);
  const handleChange = useCallback(debounce(e => {
    setSearching(true);
    setSearch(e.target.value);
  }, 300), []);

  return (
    <TextField
      inputRef={textRef}
      InputProps={{
        startAdornment: (<InputAdornment position='start'><Search /></InputAdornment>),
        endAdornment: (
          searching &&
          <IconButton
            onClick={handleClear}
          >
            <Clear />
          </IconButton>
        )
      }}
      name='searchQuery'
      fullWidth
      onChange={handleChange}
      placeholder='Buscar indicadores por nombre'
    />
  );
}

