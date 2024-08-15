import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import IndicadoresPDU2040 from '@components/information/IndicadoresPDU2040';
import TemasBook from '@components/proyecto/TemasBook';
import AboutIndicadores from '@components/information/AboutIndicadores';
import style from './ChihEnDatos.module.css';
import { useEffect, useState } from 'react';
import TemasGrid from '@components/proyecto/TemasGrid';
import TemaList from '@components/proyecto/GridModulos';
import TemasCarousel from '@components/proyecto/TemasCarousel';
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

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 760
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title name='start'>Sistema de Indicadores del PDU2040 Séptima Actualización</title>
        <meta name="description" content="Proyecto Sistema de Indicadores del PDU2040 para el monitoreo de una serie de indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <IndicadoresPDU2040 dimensiones={dimensiones} />
      <AboutIndicadores />
      {isMobile ?
        <TemasCarousel modulos={modulos} />
        :
        <TemasBook modulos={modulos} />
      }
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
