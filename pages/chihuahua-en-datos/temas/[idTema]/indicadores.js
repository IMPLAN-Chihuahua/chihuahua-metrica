import Head from "next/head";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useMemo, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Alert from "@mui/material/Alert";
import Title from "@components/commons/Title";
import { useForm, FormProvider } from "react-hook-form"
import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import tinycolor from 'tinycolor2';
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import { serialize } from "helpers/StringUtils";

const ODS_ID = 1;
const UNIDAD_MEDIDA_ID = 2;
const COBERTURA_GEOGRAFICA_ID = 3;

export default function Modulo(props) {
  const [indicadores, setIndicadores] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedTema, setSelectedTema] = useState(props.selectedTema);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState('');

  const methods = useForm();
  const { watch } = methods;
  const fetchIndicadores = useCallback(() => {
    setLoading(true);
    const url = `${process.env.INDICADORES_BASE_URL}/modulos/${selectedTema?.id}/indicadores?page=${page}&${filters}`;
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.error.text)
      })
      .then(indicadores => {
        setTotalPages(indicadores.totalPages);
        setIndicadores(indicadores.data);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedTema.id, page, filters]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchIndicadores();
    }
    return () => {
      isMounted = false;
    }
  }, [fetchIndicadores]);


  useEffect(() => {
    const subscription = watch(value => {
      const { tema, ...data } = value;
      setSelectedTema(tema || props.selectedTema)
      console.log(data?.anio?.getFullYear())
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

  const handlePagination = (_, value) => setPage(value);

  const CRUMBS = [{
    text: 'Chihuahua en Datos',
    href: '/chihuahua-en-datos'
  }, {
    text: selectedTema.temaIndicador,
  }];

  const backgroundColor = useMemo(() => tinycolor(selectedTema.color).lighten().lighten().toHexString(), [selectedTema]);
  const foregroundColor = useMemo(() => tinycolor(selectedTema.color).darken(60).toHexString(), [selectedTema]);

  return (
    <>
      <Head>
        <title>{selectedTema?.temaIndicador} - Indicadores</title>
        <meta name="description" content={selectedTema?.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container maxWidth="lg" sx={{ mb: 3, mt: 3 }}>
        <PageBreadcrumb crumbs={[...CRUMBS]} />
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
              backgroundColor: backgroundColor,
              color: foregroundColor,
              border: `1px solid ${foregroundColor}`,
              flexGrow: 1,
              ml: 1,
              wordWrap: 'break-word'
            }}>
            <Title variant='h3' component='h1'>{selectedTema.temaIndicador}</Title>
            <Typography>{selectedTema.descripcion}</Typography>
          </Box>
        </Stack>
        <section>
          <Title variant='h4' component='h2'>Indicadores</Title>
          <FormProvider {...methods}>
            <IndicadorFilter
              odsList={[...props.ods.data]}
              unidadMedidaList={[...props.medidas.data]}
              coberturaList={[...props.coberturas.data]}
              modulosList={[...props.temas.data]}
            />
          </FormProvider>
          {isLoading ?
            Array.from(new Array(4)).map((_, i) => <IndicadorSkeleton key={i} />)
            :
            !hasError &&
            (<>
              <IndicadorList indicadores={indicadores} fontColor={tinycolor(selectedTema.color).darken(60).toHexString()} />
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
      ods,
      coberturas,
      medidas,
      temas,
      selectedTema: { ...selectedTema.data },
    },
  };
}