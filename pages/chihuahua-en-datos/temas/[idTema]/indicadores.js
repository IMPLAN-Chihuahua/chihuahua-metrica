import Head from "next/head";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Alert from "@mui/material/Alert";
import Title from "@components/commons/Title";
import { useForm, FormProvider } from "react-hook-form"
import { isUndefined } from "helpers/ObjectUtils";
import { serialize } from "helpers/StringUtils";
import { Typography } from "@mui/material";

const ODS = 1;
const UNIDAD_MEDIDA = 2;
const COBERTURA_GEOGRAFICA = 3;

export default function Modulo(props) {
  const [indicadores, setIndicadores] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [modulo, setModulo] = useState(props.idTema);
  const [selectedTema, setSelectedTema] = useState(props.selectedTema);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState('');

  const methods = useForm()
  const fetchIndicadores = useCallback(() => {
    setLoading(true);
    const url = `${process.env.INDICADORES_BASE_URL}/modulos/${modulo}/indicadores?page=${page}&${filters}`;
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
  }, [modulo, page, filters]);


  const updateFilter = useCallback(() => {

  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateFilter();
      fetchIndicadores();
    }
    return () => {
      isMounted = false;
    }
  }, [updateFilter, fetchIndicadores]);

  const { watch } = methods
  useEffect(() => {
    const subscription = watch((value) => {
      const payload = {};
      let updatedIdModulo = value?.temaIndicador?.id;
      let updatedTema = value?.temaIndicador;
      setModulo(isUndefined(updatedIdModulo) ? props.idTema : updatedIdModulo);
      setSelectedTema(isUndefined(updatedTema) ? props.selectedTema : updatedTema);
      payload.idOds = value?.ods?.id;
      payload.idUnidadMedida = value?.medida?.id;
      payload.idCobertura = value?.cobertura?.id;
      payload.anioUltimoValorDisponible = value?.anio?.getFullYear();
      payload.tendenciaActual = value?.tendencia?.value.toUpperCase();
      setFilters(serialize(payload));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handlePagination = (_, value) => setPage(value);
  return (
    <>
      <Head>
        <title>Indicadores de tema seleccionado</title>
        <meta name="description" content="Indicadores de un tema" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container maxWidth="xl" sx={{ mb: 3, mt: 3 }}>
        <section>
          <Title variant='h3' component='h1'>{selectedTema.temaIndicador}</Title>
          <Typography>Los indicadores que se presentan se refieren a los elementos de organización, administración de la estructura y territorio de la ciudad que favorecen a la toma de decisiones con relación al crecimiento urbano.</Typography>
        </section>
        <section>
          <Title variant='h4' component='h2'>Indicadores</Title>
          <FormProvider {...methods}>
            <IndicadorFilter
              odsList={[...props.ods.data]}
              unidadMedidaList={[...props.medidas.data]}
              coberturaList={[...props.coberturas.data]}
              modulosList={[...props.modulos.data]}
            />
          </FormProvider>
          {isLoading ?
            Array.from(new Array(3)).map((_, i) => <IndicadorSkeleton key={i} />)
            :
            !hasError &&
            (<>
              <IndicadorList
                indicadores={indicadores}
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
  const [odsRes, medidaRes, coberturaRes, modulosRes, moduloRes] = await Promise.all([
    fetch(`${baseUrl}/catalogos/${ODS}`),
    fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA}`),
    fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA}`),
    fetch(`${baseUrl}/modulos`),
    fetch(`${baseUrl}/modulos/${idTema}`),
  ]);
  const [ods, medidas, coberturas, modulos, modulo] = await Promise.all([
    odsRes.json(),
    medidaRes.json(),
    coberturaRes.json(),
    modulosRes.json(),
    moduloRes.json(),

  ]);
  return {
    props: {
      idTema,
      ods,
      coberturas,
      medidas,
      modulos,
      selectedTema: { ...modulo.data },
    },
  };
}