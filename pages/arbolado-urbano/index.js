import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import Title from '@components/commons/Title';
import { Android, GitHub, OpenInNew } from '@mui/icons-material';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

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
            color='var(--green)'
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
        sx={{
          position: 'relative',
          height: '300px'
        }}>
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
          <Title variant='h4' component='h2'>En nuestra ciudad...</Title>
          <section>
            <Grid container>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    margin: 1,
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <iframe
                      height='100%'
                      width='100%'
                      src='https://geoportal.implanchihuahua.org/sigmun/apps/webappviewer/index.html?id=842822f688c641ca90b69007fccc6b61'
                      title='SADRE - Modelo de Reforestación urbana con sentido social'
                    >Mapa</iframe>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  lg={4}
                  sx={{ order: { xs: -1, lg: 1 } }}>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>0.23</Typography>
                    <Typography fontWeight='500'>Arboles</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    margin: 1,
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <iframe
                      height='100%'
                      width='100%'
                      src='https://geoportal.implanchihuahua.org/sigmun/apps/Styler/index.html?appid=4b73f84656264dba8b027d5fed38d6d2'
                      title='Green View'
                    >
                      Mapa
                    </iframe>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>30</Typography>
                    <Typography fontWeight='500'>Areás verdes por persona</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    margin: 1,
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <iframe
                      height='100%'
                      width='100%'
                      src='https://geoportal.implanchihuahua.org/sigmun/apps/instant/media/index.html?appid=25d7bf6eebb545e0b5205de75bb8ad6f'
                      title='GVI'
                    >
                      Mapa
                    </iframe>
                  </Box>
                </Grid>
                <Grid
                  item
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  xs={12}
                  lg={4}
                  sx={{ order: { xs: -1, lg: 1 } }}>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>60%</Typography>
                    <Typography fontWeight='500' textAlign='center'>De la población vive <br /> cerca de un parque</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </section>
          <Title variant='h5' component='h3'>Fuente</Title>
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
          <Typography fontSize='1.3rem'>
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
    </>
  );
};

export default ArboladoUrbano;