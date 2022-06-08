import Head from 'next/head'
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import AboutDescription from '@components/information/AboutDescription';
import { AboutLocation } from '@components/information/AboutLocation';
import { ProjectsSection } from '@components/proyecto/ProjectSection';
import { AboutForm } from '@components/information/AboutForm';
import { useEffect } from 'react';
import { Container } from '@mui/material';

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const globalLoader = document.getElementById('globalLoader');
      const loader = document.getElementById('loader');

      if (globalLoader && loader) {
        setTimeout(() => {
          loader.style.opacity = 0;
          setTimeout(() => {
            globalLoader.style.opacity = 0;
            globalLoader.style.zIndex = -1;
          }, 400);
        }, 900)
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Chihuahua Metrica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body>
        <div id='globalLoader'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: 'black',
            transition: 'all 1s linear',
          }}>
          <div id='loader' style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.25s linear',
          }}>
            <img
              alt='Chihuahua Metrica Logo'
              src='/logo_chihuahua_metrica.webp'
              style={{ maxWidth: '300px' }} />
          </div>
        </div>
        <EmblaCarousel />
        <Container maxWidth='lg' sx={{ marginTop: 3, marginBottom: 3 }}>
          <AboutDescription />
          <ProjectsSection />
          <AboutLocation />
          <AboutForm />
        </Container>
      </body>
    </>
  )
}
