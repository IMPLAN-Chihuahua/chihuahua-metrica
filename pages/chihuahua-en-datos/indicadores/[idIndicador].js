import Error from '../../_error'
import Head from "next/head";
import Container from "@mui/material/Container";
import Header from "./Header";
import HistoricalData from "./Historical";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import { Stack, Typography } from "@mui/material";
import Owner from '@components/commons/IndicadorOwner';
import Formula from '@components/indicador/Datasheet/Formula';
import { IndicadorStats as Stats } from './Stats';


export default function FichaTecnica(props) {

  const { indicador, responsible, navigation } = props;

  const CRUMBS = [{
    text: 'Sistema de Indicadores del PDU2040 Séptima Actualización',
    href: '/chihuahua-en-datos'
  }, {
    text: indicador.modulo.temaIndicador,
    href: `/chihuahua-en-datos/temas/${indicador.modulo.id}/indicadores`
  }, {
    text: indicador.nombre
  }];

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} message={props?.message} />
  }

  return (
    <>
      <Head>
        <title>{indicador.nombre}</title>
        <meta name="description" content={indicador.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ mb: 3, mt: 3 }}>
        <PageBreadcrumb crumbs={CRUMBS} />
        <Stack spacing={6} mt={3}>
          <Header info={indicador} />
          <Stats
            ultimoValor={indicador.ultimoValorDisponible}
            anioReferencia={indicador.anioUltimoValorDisponible}
            tendencia={indicador.tendenciaActual}
            cobertura={indicador.catalogos[2].nombre}
          />
          <section>
            <Typography fontStyle='italic' variant='body2'>{indicador.fuente}</Typography>
          </section>
          {/* TODO: ADD ELI5 SECTION */}
          {
            indicador?.formula && (
              <section>
                <Typography variant='h5' mb={2}>Fórmula</Typography>
                <Formula formula={indicador?.formula} />
              </section>
            )
          }
          <section>
            <Typography variant='h5' mb={2}>Históricos</Typography>
            <HistoricalData history={indicador} />
          </section>
          <section>
            <Typography variant='h5' mb={2}>Responsable</Typography>
            <Owner
              responsible={responsible.data}
              indicadorDate={indicador.updatedAt}
              indicadorName={indicador.nombre}
            />
          </section>
          {/* TODO: ADD RELATED INDICADORES */}
        </Stack>
      </Container>
    </>
  );
}


export async function getServerSideProps(context) {
  const idIndicador = context.params.idIndicador;
  const indicadorRes = await fetch(`${process.env.INDICADORES_BASE_URL}/indicadores/${idIndicador}`);
  const errorCode = indicadorRes.ok ? false : indicadorRes.status;
  const indicador = await indicadorRes.json();

  if (errorCode) {
    return { props: { errorCode, ...indicador } }
  }
  const idUser = indicador.data.createdBy || null;
  const responsibleRes = await fetch(`${process.env.INDICADORES_BASE_URL}/usuarios/${idUser}`);
  const responsible = await responsibleRes.json();

  return {
    props: { indicador: { ...indicador.data }, responsible, errorCode, navigation: { ...indicador.navigation } },
  };
}
