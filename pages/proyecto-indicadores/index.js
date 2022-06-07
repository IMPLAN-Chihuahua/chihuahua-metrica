import { Box, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';
import TemaList from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';

export default function Modulo(props) {
  const data = props.data;
  return (<>
    <Head>
      <title>Proyecto Indicadores</title>
      <meta name="description" content="Proyecto indicadores de la ciudad de Chihuahua" />
      <link rel="icon" href="/icon.ico" />
    </Head>
    <Container sx={{ marginTop: 3, marginBottom: 3 }}>
      <Title variant='h3' component='h1'>Indicadores de Chihuahua</Title>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <Typography textAlign='start' variant='body1' mt={3} fontSize='1.3rem'>
            Los Indicadores de Chihuahua ofrecen a la ciudadanía los datos de la
            estructura urbana, económica y social con el fin de dar a conocer la dirección
            en la que se encuentra la ciudad y encontrar las áreas de oportunidad.
          </Typography>
          <Typography textAlign='start' variant='body1' mt={2} mb={3} fontSize='1.3rem'>
            La plataforma cuenta con una base de 152 de indicadores, 42 técnico-urbanos
            y 110 sociales, los cuales pueden ser usados de referencia para estudios y proyectos.
            Son fundamentados con la información que brindan los censos de INEGI, CONEVAL,
            IMCO, ONU, IMPLAN, entre otros organismos.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box className={style.rightSide}>
            <Image src='/images/implan-logo.webp' alt='implan_logo' width={200} height={150} />
          </Box>
        </Grid>
      </Grid>
      <Title variant='h4' component='h2' mb={3} mt={3}>Temas de Interés</Title>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <TemaList modulos={data} />
      </Grid>
    </Container>
  </>);
};

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
  const data = await res.json();
  return res.status === 200 ? { props: { ...data } } : { props: { data: [] } };
}
