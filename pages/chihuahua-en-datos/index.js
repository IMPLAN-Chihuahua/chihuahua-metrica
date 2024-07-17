import { Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import TemaList from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';
import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import Capsule from '@components/indicador/Capsule';
import DimensionesList from '@components/dimension/GridDimensiones';

const CRUMBS = [
  {
    text: 'Chihuahua en Datos'
  }
]

export default function Modulo(props) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('indicadores-page')
  }

  const modulos = props.data.modulos;
  const dimensiones = props.data.dimensiones;
  console.log(console.log('hu washusei'))
  console.log(modulos);
  console.log('#################')
  console.log(dimensiones)
  return (
    <>
      <Head>
        <title name='start'>Chihuahua en Datos</title>
        <meta name="description" content="Proyecto Chihuahua en Datos para el monitoreo de una serie de indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
        <PageBreadcrumb crumbs={[...CRUMBS]} />
        <section>
          <Title variant='h3' component='h1'>Chihuahua en Datos</Title>
          <Typography textAlign='start' variant='body1'>
            Chihuahua en Datos ofrece a la ciudadanía los datos de la
            estructura urbana, económica y social con el fin de dar a conocer la dirección
            en la que se encuentra la ciudad y encontrar las áreas de oportunidad.
          </Typography>
        </section>
        <br />
        <Title variant='h4' component='h2'>Temas de Interés</Title>
        <Capsule />
        <br />
        <section>
          <Title variant='h4' component='h2'>Indicadores separados por dimensión</Title>
          <Grid container rowSpacing={1} columnSpacing={1} sx={{ mb: 5 }}>
            <DimensionesList dimensiones={dimensiones} />
          </Grid>
        </section>
        <section>
          <Title variant='h4' component='h2'>Indicadores separados por temática</Title>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <TemaList modulos={modulos} />
          </Grid>
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
