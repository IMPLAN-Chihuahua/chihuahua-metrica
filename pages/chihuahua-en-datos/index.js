import { Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import TemaList from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';
import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import Capsule from '@components/indicador/Capsule';
import DimensionesList from '@components/dimension/GridDimensiones';

const CRUMBS = [
  {
    text: 'Sistema de Indicadores del PDU2040 Séptima Actualización'
  }
]

export default function Modulo(props) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('indicadores-page')
  }
  const modulos = props.data.modulos;
  const dimensiones = props.data.dimensiones;
  return (
    <>
      <Head>
        <title name='start'>Sistema de Indicadores del PDU2040 Séptima Actualización</title>
        <meta name="description" content="Proyecto Sistema de Indicadores del PDU2040 para el monitoreo de una serie de indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
        <PageBreadcrumb crumbs={[...CRUMBS]} />
        <section>
          <Title variant='h3' component='h1'>Sistema de Indicadores del PDU2040 Séptima Actualización</Title>
          <Typography textAlign='start' variant='body1'>
            El Sistema de Indicadores del PDU2040 ofrece a la ciudadanía los datos de las dimensiones evaluadas en el PDU2040, con el objetivo de monitorear diferentes aspectos de la ciudad de Chihuahua. Los indicadores presentados en este sistema permiten analizar la Infraestructura de Desarrollo, los Entornos Urbanos Consolidados y la Calidad de Vida y Sostenibilidad Ambiental mediante diferentes medios de obtención de datos representados mediante una ficha técnica.
          </Typography>
        </section>
        <br />
        <section>
          <Title variant='h4' component='h2'>Indicadores separados por dimensión</Title>
          <Grid container rowSpacing={1} columnSpacing={1} sx={{ mb: 5 }}>
            <DimensionesList dimensiones={dimensiones} />
          </Grid>
          <Title variant='h5' component='h3' sx={{ pb: 2 }}>Indicadores que te podrían interesar</Title>
        </section>
        <Capsule />
        <br />

        <section>
          {/* <Title variant='h4' component='h2'>Indicadores separados por temática</Title> */}
          {/* <Grid container rowSpacing={1} columnSpacing={1}>
            <TemaList modulos={modulos} />
          </Grid> */}
        </section>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const modulosRes = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
  const { data: modulosData } = await modulosRes.json();

  const dimensionesRes = await fetch(`${process.env.INDICADORES_BASE_URL}/dimensiones/info/general`);
  const { data: dimensionesData } = await dimensionesRes.json();

  const data = {
    modulos: modulosData,
    dimensiones: dimensionesData
  }

  return modulosRes.status === 200 && dimensionesRes.status === 200 ? { props: { data } } : { props: { data: [] } };
}
