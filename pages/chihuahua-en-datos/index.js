import Head from 'next/head';
import IndicadoresPDU2040 from '@components/information/IndicadoresPDU2040';
import TemasBook from '@components/proyecto/TemasBook';
import AboutIndicadores from '@components/information/AboutIndicadores';
import { useEffect, useState } from 'react';
import TemasCarousel from '@components/proyecto/TemasCarousel';
const CRUMBS = [
  {
    text: 'Sistema de Indicadores del PDU2040 Séptima Actualización'
  }
]

export default function TEma(props) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('indicadores-page')
  }
  const temas = props.data.temas;
  const objetivos = props.data.objetivos;

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
      <IndicadoresPDU2040 objetivos={objetivos} />
      <AboutIndicadores />
      {isMobile ?
        <TemasCarousel temas={temas} />
        :
        <TemasBook temas={temas} />
      }
    </>
  );
};

export async function getServerSideProps(context) {
  const temasRes = await fetch(`${process.env.INDICADORES_BASE_URL}/temas`);
  const { data: temasData } = await temasRes.json();

  const objetivosRes = await fetch(`${process.env.INDICADORES_BASE_URL}/objetivos/info/general`);
  const { data: objetivosData } = await objetivosRes.json();

  const data = {
    temas: temasData,
    objetivos: objetivosData
  }

  return temasRes.status === 200 && objetivosRes.status === 200 ? { props: { data } } : { props: { data: [] } };
}
