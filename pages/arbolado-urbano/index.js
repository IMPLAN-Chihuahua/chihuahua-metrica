import Title from '@components/commons/Title';
import { GitHub } from '@mui/icons-material';
import { Container, Typography, Box, Button, Grid, Chip } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import StarTree from '@components/arbolado/StarTree';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineDot, TimelineConnector, TimelineContent
} from '@mui/lab';
import { borderRadius } from '@mui/system';

const BENEFICIOS = [
  'Mitigación de las altas temperaturas',
  'Mitigación de inundaciones',
  'Mejor salud mental',
  'Mejor desarrollo cerebral y función cognitiva',
  'Reducción del riesgo de enfermedades no transmisibles',
  'Reducción de la mortalidad prematura',
  'Mejores resultados del embarazo',
  'Mejor percepción de la salud general',
  'Reducción del tiempo de hospitalización y recuperación'
]

const MapSection = ({ src, description, title }) => {
  return (<Grid item container>
    <Grid item xs={12}>
      <Title variant='h5' component='h3' mt={3}>{title}</Title>
    </Grid>
    <Grid item xs={12} lg={8} sx={{ alignItems: 'stretch' }}>
      <Box sx={{
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        mb: { xs: 1, lg: 0 }
      }}>
        <iframe
          height='100%'
          width='100%'
          src={src}
          title={title}
        >Mapa</iframe>
      </Box>
    </Grid>
    <Grid
      item
      xs={12}
      display='flex'
      justifyContent='center'
      alignItems='center'
      lg={4}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid var(--darker-green)',
          color: 'var(--soft-black)',
          width: { xs: '100%', sm: '300px' },
          height: '150px',
          padding: 5,
          borderRadius: '30px'
        }}
      >
        <div>
          {description}
        </div>
      </Box>
    </Grid>
  </Grid>)
};


const ArboladoUrbano = () => {
  return (
    <>
      <Head>
        <title>Arbolado Urbano</title>
        <meta name="description" content="Proyecto indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Box
        sx={{
          position: 'relative',
          height: '70vh'
        }}>
        <Image src='/banner-arbolado-828w.webp' layout='fill' objectFit='cover' />
      </Box>
      <Container>
        <Box component='section' marginTop={3} marginBottom={3}>
          <Typography
            fontWeight='bold'
            textAlign='center'
            fontSize={24}
            lineHeight={2}
            sx={{ textTransform: 'uppercase' }}
          >
            Plantar un árbol construye la infraestructura verde de la ciudad
          </Typography>
          <Typography
            textAlign='center'
            fontSize={18}
            letterSpacing={4}
            lineHeight={2}
            sx={{ textTransform: 'uppercase' }}
          >
            Mitigando el cambio climático y acercando los servicios ambientales <br />
            A las personas, además de apropiarse del espacio público y de las áreas verdes
          </Typography>
        </Box>
        <section>
          <Title variant='h3' component='h1'>Arbolado Urbano</Title>
          <Typography mb={3} fontSize='1.3rem'>
            El arbolado urbano es el conjunto de árboles que se encuentran en
            las zonas urbanas, que a su vez proporcionan una variedad de beneficios
            ambientales, que generan efectos positivos en la mitigación del cambio
            climático. La presencia del arbolado forma parte de una infraestructura
            verde que impacta en el aspecto social, económico y cultural,
            mejorando la calidad de vida de la sociedad y mantener la resiliencia de las ciudades.
          </Typography>
        </section>
      </Container>
      <Box
        component='section'
        sx={{ position: 'relative', height: '300px' }}>
        <Image src='/regla-300-828w.webp' layout='fill' objectFit='cover' />
      </Box>
      <Container sx={{ marginTop: 3 }}>
        <section>
          <Title variant='h4' component='h2'>Regla 3-30-300</Title>
          <Typography mb={3} fontSize='1.3rem'>
            Esta regla esta enfocada a mejorar la calidad del arbolado urbano
            contribuyendo a su vez en el bienestar y la salud humana. Lo primero
            consiste en observar <span style={{ fontWeight: 'bold' }}>3 árboles desde casa</span> de un tamaño considerable,
            tener como <span style={{ fontWeight: 'bold' }}>mínimo el 30% de cobertura vegetal</span> en su colonia y
            <span style={{ fontWeight: 'bold' }}> vivir a una distancia menor de 300 metros de un espacio verde</span>. Aunque el estado actual
            de las ciudades es diferente, utilizar esta regla aporta a la
            necesidad de tener un sistema arbóreo bien planificado y establecido en la ciudad.
          </Typography>
        </section>
        <section>
          <Title variant='h5' component='h3' mt={3}>Beneficios de estar en contacto con zonas verdes</Title>
          <Box display='flex' flexWrap='wrap' >
            {
              BENEFICIOS.map((b, idx) => (
                <Box sx={{
                  backgroundColor: '#f1faee',
                  borderRadius: 5,
                  padding: 1,
                  margin: 1,
                  wordBreak: 'break-all',
                }}>
                  <Typography fontWeight={500} fontSize='1.1rem'>{b}</Typography>
                </Box>
              ))
            }
          </Box>
        </section>
        <section>
          <section>
            <Grid container>
              <MapSection
                title='Inventario del Arbolado Urbano'
                src='https://geoportal.implanchihuahua.org/sigmun/apps/webappviewer/index.html?id=842822f688c641ca90b69007fccc6b61'
                description={(
                  <>
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>~0.23</Typography>
                    <Typography fontWeight='500' textAlign='center'>Árboles por persona</Typography>
                  </>
                )}
              />
              <MapSection
                title='Muestra de la Vista Verde en la Ciudad'
                src='https://geoportal.implanchihuahua.org/sigmun/apps/Styler/index.html?appid=4b73f84656264dba8b027d5fed38d6d2'
                description={(
                  <>
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>~11.76%</Typography>
                    <Typography fontWeight='500' textAlign='center'>Areás verdes por persona</Typography>
                  </>
                )}
              />
              <MapSection
                title='Proximidad a espacios verdes con más de 10 árboles para uso recreativo'
                src='https://geoportal.implanchihuahua.org/sigmun/apps/instant/media/index.html?appid=25d7bf6eebb545e0b5205de75bb8ad6f'
                description={(
                  <>
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>~60%</Typography>
                    <Typography fontWeight='500' textAlign='center'>De la población vive <br /> cerca de un parque</Typography>
                  </>
                )}
              />
            </Grid>
          </section>
          <Title variant='h5' component='h3' sx={{ mt: 4 }}>Fuente</Title>
          <Typography mb={1} fontSize='1.3rem'>Para calcular el GVI, se utilizó una herramienta desarrollada por el <b>Senseable City Lab del MIT</b>. El código fuente se encuentra en el siguiente enlace. </Typography>
          <Button
            target='_blank'
            rel='noreferrer noopener'
            href='https://github.com/mittrees/Treepedia_Public'
            size='lg'
            variant='outlined'
            endIcon={<GitHub />}>Repositorio Github</Button>
        </section>
        <section>
          <Title variant='h4' component='h2' mt={3}>Censo del Arbolado</Title>
          <Typography fontSize='1.3rem' sx={{ mb: '5vh' }}>
            El Instituto de Planeación Integral del Municipio de Chihuahua con
            el propósito de contribuir a una ciudad resiliente y  sustentable,
            desarrolló un proyecto como instrumento que ofrece información actual
            de las condiciones y características en que se encuentra la estructura
            del arbolado, así como de su función y los beneficios ambientales,
            sociales y económicos que puede proveer los árboles para la ciudad
            de Chihuahua, a través de un inventario forestal utilizando la
            aplicación de Árbol mid y procesando datos a través de la
            herramienta I-Tree Eco v6.
          </Typography>
        </section>

      </Container>

      <Box sx={{ bgcolor: '#f1faee', pt: 10 }}>
        <section >
          <StarTree />
          <StarTree />
          <StarTree />
          <StarTree />
          <StarTree />
          <StarTree />
        </section>
      </Box>
    </>
  );
};

export default ArboladoUrbano;