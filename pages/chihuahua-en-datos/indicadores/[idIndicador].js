import Error from '../../_error'
import Container from "@mui/material/Container";
import MapButton from "@components/indicador/Datasheet/MapButton";
import TopData from "@components/indicador/Datasheet/TopData";
import DataSheet from "@components/indicador/Datasheet/DataSheet";
import GraphBox from "@components/indicador/Datasheet/GraphBox";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import Head from "next/head";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import { Box } from "@mui/material";
import IndicadorOwner from '@components/commons/IndicadorOwner';


export default function FichaTecnica(props) {
  if (props.errorCode) {
    return <Error statusCode={props.errorCode} message={props?.message} />
  }

  const { indicador, responsible, navigation } = props;

  const CRUMBS = [{
    text: 'Chihuahua en Datos',
    href: '/chihuahua-en-datos'
  }, {
    text: indicador.modulo.temaIndicador,
    href: `/chihuahua-en-datos/temas/${indicador.modulo.id}/indicadores`
  }, {
    text: indicador.nombre
  }];


  return (
    <>
      <Head>
        <title>{indicador?.nombre}</title>
        <meta name="description" content={indicador?.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ mb: 3, mt: 3 }}>
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
              title: 'Indicador anterior',
              disabled: navigation.prev == null,
              link: `/chihuahua-en-datos/indicadores/${navigation.prev}`
            }}
            next={{
              title: 'Siguiente indicador',
              disabled: navigation.next == null,
              link: `/chihuahua-en-datos/indicadores/${navigation.next}`
            }}
          />
        </Box>
        <TopData info={indicador} />
        <DataSheet datasheet={indicador} />
        <GraphBox history={indicador} />
        <MapButton mapa={indicador.mapa} />
        <IndicadorOwner responsible={responsible.data} indicadorDate={indicador.updatedAt} indicadorName={indicador.nombre} />
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
