import Container from "@mui/material/Container";
import MapButton from "@components/indicador/Datasheet/MapButton";
import TopData from "@components/indicador/Datasheet/TopData";
import DataSheet from "@components/indicador/Datasheet/DataSheet";
import GraphBox from "@components/indicador/Datasheet/GraphBox";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import IndicadorOwner from "@components/commons/IndicadorOwner";
import Head from "next/head";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import { Box } from "@mui/material";
import { useRouter } from "next/router";


export default function FichaTecnica(props) {
  const indicador = props.data;
  const navigation = props.navigation;
  const responsible = props.responsible;
  const CRUMBS = [{
    text: 'Chihuahua en Datos',
    href: '/chihuahua-en-datos'
  }, {
    text: indicador.modulo.temaIndicador,
    href: `/chihuahua-en-datos/temas/${indicador.modulo.id}/indicadores`
  }, {
    text: indicador.nombre
  }];

  const router = useRouter();

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
  const res = await fetch(
    `${process.env.INDICADORES_BASE_URL}/indicadores/${idIndicador}`
  );

  const data = await res.json();

  if (res.status === 200) {
    const idUser = data.data.owner;

    const [responsibleRes] = await Promise.all([
      fetch(
        `${process.env.INDICADORES_BASE_URL}/usuarios/${idUser}`
      ),
    ]);

    const [responsible] = await Promise.all([
      responsibleRes.json(),
    ]);

    return {
      props: { ...data, responsible },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
}
