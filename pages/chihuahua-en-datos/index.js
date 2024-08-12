import { Box, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import IndicadoresPDU2040 from '@components/information/IndicadoresPDU2040';
import TemasBook from '@components/proyecto/TemasBook';

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
      <IndicadoresPDU2040 dimensiones={dimensiones} />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pr: 20,
        pl: 20,

      }}>
        <TemasBook modulos={modulos} />

        {/* <Title variant='h4' component='h2'>Indicadores separados por dimensión</Title> */}

        <section>
          {/* <Typography textAlign='start' variant='body1'>
            El Sistema de Indicadores del PDU2040 ofrece a la ciudadanía los datos de las dimensiones evaluadas en el PDU2040, con el objetivo de monitorear diferentes aspectos de la ciudad de Chihuahua. Los indicadores presentados en este sistema permiten analizar la Infraestructura de Desarrollo, los Entornos Urbanos Consolidados y la Calidad de Vida y Sostenibilidad Ambiental mediante diferentes medios de obtención de datos representados mediante una ficha técnica.
            </Typography> */}
        </section>
        <br />
        {/* <Capsule /> */}
        <br />

        <section>
          {/* <Title variant='h4' component='h2'>Indicadores separados por temática</Title> */}
          {/* <Grid container rowSpacing={1} columnSpacing={1}>
            <TemaList modulos={modulos} />
          </Grid> */}
        </section>
      </Box>
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
