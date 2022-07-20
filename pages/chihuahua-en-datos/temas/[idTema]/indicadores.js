import Head from "next/head";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Alert from "@mui/material/Alert";
import Title from "@components/commons/Title";
import { useForm, FormProvider } from "react-hook-form"
import { Typography, Box, Stack, TextField, IconButton, Collapse, ToggleButton, InputAdornment } from "@mui/material";
import Image from "next/image";
import tinycolor from 'tinycolor2';
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import { serialize } from "helpers/StringUtils";
import { Clear, FilterAlt, Search } from "@mui/icons-material";
import { debounce } from "lodash";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import { useRouter } from "next/router";

const ODS_ID = 1;
const UNIDAD_MEDIDA_ID = 2;
const COBERTURA_GEOGRAFICA_ID = 3;

export default function Modulo(props) {
  const [indicadores, setIndicadores] = useState({});
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
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
      .finally(() => {
        setLoading(false);
      });
  }, [selectedTema, filters, search]);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) {
      return;
    }
    const savedPage = parseInt(localStorage.getItem('indicadores-page'))
    fetchIndicadores(savedPage || 1, search);

    return () => {
      isMounted = false;
    }
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
    text: 'Chihuahua en Datos',
    href: '/chihuahua-en-datos'
  }, {
    text: selectedTema.temaIndicador,
  }];

  const backgroundColor = useMemo(() => tinycolor(selectedTema.color).lighten().lighten().toHexString(), [selectedTema]);
  const foregroundColor = useMemo(() => tinycolor(selectedTema.color).darken(60).toHexString(), [selectedTema]);

  const getTema = (id) => {
    return [...props.temas.data].find(tema => tema.id === id);
  }

  const router = useRouter();
  const handleTemaNavigation = useCallback((id) => {
    localStorage.removeItem('indicadores-page')
    setSelectedTema(getTema(id))
  }, []);

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
        <Stack direction='row' mb={3} flexWrap={{ xs: 'wrap', md: 'nowrap' }} justifyContent='center'>
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
              p: 2,
              backgroundColor,
              color: foregroundColor,
              border: `1px solid ${foregroundColor}`,
              flexGrow: 1,
              ml: { xs: 0, md: 1 },
              mt: { xs: 1, md: 0 },
              wordWrap: 'break-word'
            }}>
            <Title variant='h3' component='h1'>{selectedTema.temaIndicador}</Title>
            <Typography>{selectedTema.descripcion}</Typography>
          </Box>
        </Stack>
        <section>
          <Title variant='h4' component='h2'>Indicadores</Title>
          <Title variant="h5" component="h3">
            Búsqueda
          </Title>
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
  const [odsRes,
    medidaRes,
    coberturaRes,
    temasRes,
    selectedTemaRes] = await Promise.all([
      fetch(`${baseUrl}/catalogos/${ODS_ID}`),
      fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA_ID}`),
      fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA_ID}`),
      fetch(`${baseUrl}/modulos`),
      fetch(`${baseUrl}/modulos/${idTema}`),
    ]);
  const [ods, medidas, coberturas, temas, selectedTema] = await Promise.all([
    odsRes.json(),
    medidaRes.json(),
    coberturaRes.json(),
    temasRes.json(),
    selectedTemaRes.json(),
  ]);
  return {
    props: {
      key: idTema,
      ods,
      coberturas,
      medidas,
      temas,
      selectedTema: { ...selectedTema.data },
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
      placeholder='Buscar por nombre'
    />
  );
}

