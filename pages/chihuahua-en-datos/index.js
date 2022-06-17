import { Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import TemaList from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';
import PageBreadcrumb from '@components/commons/PageBreadcrumb';

const CRUMBS = [
  {
    text: 'Chihuahua en Datos'
  }
]

export default function Modulo(props) {
  const data = props.data;
  return (
    <>
      <Head>
        <title>Chihuahua en Datos</title>
        <meta name="description" content="Proyecto Chihuahua en Datos para el monitoreo de una serie de indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ marginTop: 3, marginBottom: 3 }}>
        <PageBreadcrumb crumbs={[...CRUMBS]} />
        <section>
          <Title variant='h3' component='h1'>Chihuahua en Datos</Title>
          <Typography textAlign='start' variant='body1'>
            Chihuahua en Datos ofrece a la ciudadanía los datos de la
            estructura urbana, económica y social con el fin de dar a conocer la dirección
            en la que se encuentra la ciudad y encontrar las áreas de oportunidad.
          </Typography>
          <Typography textAlign='start' variant='body1' mt={1}>
            La plataforma cuenta con una base de 152 de indicadores, 42 técnico-urbanos
            y 110 sociales, los cuales pueden ser usados de referencia para estudios y proyectos.
            Son fundamentados con la información que brindan los censos de INEGI, CONEVAL,
            IMCO, ONU, IMPLAN, entre otros organismos.
          </Typography>
        </section>
        <section>
          <Title variant='h4' component='h2'>Temas de Interés</Title>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <TemaList modulos={data} />
          </Grid>
        </section>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
  const data = await res.json();
  return res.status === 200 ? { props: { ...data } } : { props: { data: [] } };
}
