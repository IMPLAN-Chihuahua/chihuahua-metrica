import Title from '@components/commons/Title';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';

const ArboladoUrbano = () => {
  return (
    <>
      <Head>
        <title>Arbolado Urbano</title>
        <meta name="description" content="Proyecto indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ marginTop: 3, marginBottom: 3 }}>
        <Title variant='h3' component='h1'>Arbol Mid</Title>
        <Typography>Explicar 3/30/300</Typography>
      </Container>
    </>
  );
};

export default ArboladoUrbano;