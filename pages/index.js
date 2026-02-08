import Head from 'next/head'
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import { Box, Container } from '@mui/material';
import Splashscreen from '@components/commons/Splashscreen';
import PartnersStrip from '@components/commons/PartnersStrip';
import PDU2040 from '@components/information/PDU2040';
import ObjetivosContainer from '@components/information/ObjetivosContainer';
import AboutIndicadores from '@components/information/AboutIndicadores';

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Chihuahua Métrica</title>
        <meta name="description" content="Chihuahua Métrica es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio de Chihuahua para informar, monitorear y evaluar su transformación en el ámbito de la planeación urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar para que cualquier usuario que tome decisiones." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Splashscreen />
      <EmblaCarousel />
      <Container maxWidth='lg' sx={{ marginTop: 3 }}>
        <PDU2040 />
        {/* <SatisfactionSurvey /> */}
      </Container>
      <ObjetivosContainer data={data} />

      <Container maxWidth='lg' >
        <PartnersStrip />
      </Container>

    </>
  )
}

export async function getStaticProps() {
  try {
    const temasRes = await fetch(`${process.env.INDICADORES_BASE_URL}/temas`);
    const { data: temasData = [] } = await temasRes.json();

    const objetivosRes = await fetch(`${process.env.INDICADORES_BASE_URL}/objetivos`);
    const { data: objetivosData = [] } = await objetivosRes.json();

    const data = { temas: temasData, objetivos: objetivosData };

    return {
      props: { data },
      // La página se regenera cada 1 hora (3600 segundos)
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: { temas: [], objetivos: [] } },
      revalidate: 3600,
    };
  }
}