import Head from 'next/head'
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import AboutDescription from '@components/information/AboutDescription';
import { ProjectsSection } from '@components/proyecto/ProjectSection';
import { Container } from '@mui/material';
import StatsIndicadores from '@components/stats/StatsIndicadores';
import SatisfactionSurvey from '@components/stats/SatisfactionSurvey';
import Splashscreen from '@components/commons/Splashscreen';
import PartnersStrip from '@components/commons/PartnersStrip';
import PDU2040 from '@components/information/PDU2040';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chihuahua Métrica</title>
        <meta name="description" content="Chihuahua Métrica es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio de Chihuahua para informar, monitorear y evaluar su transformación en el ámbito de la planeación urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar para que cualquier usuario que tome decisiones." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body>
        <Splashscreen />
        <EmblaCarousel />
        <Container maxWidth='lg' sx={{ marginTop: 3 }}>
          <PDU2040 />
        </Container>
        <SatisfactionSurvey />
        <PartnersStrip />
      </body>
    </>
  )
}
