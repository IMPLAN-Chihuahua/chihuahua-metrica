import Title from '@components/commons/Title';
import { GitHub } from '@mui/icons-material';
import { Container, Typography, Box, Button, Grid, Link as MUILink, CardContent, Card, CardMedia, Fade, Collapse } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { useCallback, useState } from 'react';


const ArboladoUrbano = () => {
  return (
    <>
      <Head>
        <title>Arbolado Urbano</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner />
      <Box my={5}></Box>
      <Box
        component='section'
        sx={{
          position: 'relative',
          height: '300px',
          backgroundColor: '#4f8127'
        }}>
        <Image src='/regla-300-828w.webp' layout='fill' objectFit='contain' />
      </Box>

      <Container sx={{ marginTop: 3 }} maxWidth='xl'>
        <section>
          <ArboladoSectionTitle text="Regla" highlightedText="3-30-300" />
          <LinesDecoration />
          <Typography mb={3} mt={5} fontSize='1.2rem' textAlign='justify'>
            Esta regla esta enfocada a mejorar la calidad del arbolado urbano
            contribuyendo a su vez en el bienestar y la salud humana. Lo primero
            consiste en observar 3 árboles de un tamaño considerable desde tu casa,
            también tener como mínimo el 30% de cobertura vegetal en tu colonia y
            por último, vivir a una distancia menor de 300 metros de un espacio verde. Aunque el estado actual
            de las ciudades es diferente, utilizar esta regla aporta a la
            necesidad de tener un sistema arbóreo bien planificado y establecido en la ciudad.
          </Typography>
        </section>
        <section>
          <ArboladoSectionTitle text="Beneficios de estar en contacto con" highlightedText="zonas verdes" />
          <Beneficios />
        </section>
      </Container>
      <Box component='section' sx={{ backgroundColor: '#222222' }} mt={10}>
        <InventarioArboladoSection />
      </Box>
      <Container sx={{ marginTop: 3 }} maxWidth='xl'>
        <section>
          <section>
            <Grid container>
              <MapSection
                title='Proximidad a espacios verdes con más de 10 árboles para uso recreativo'
                src='https://geoportal.implanchihuahua.org/sigmun/apps/instant/media/index.html?appid=25d7bf6eebb545e0b5205de75bb8ad6f'
                description={(
                  <>
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>~60%</Typography>
                    <Typography fontSize='1.3rem' fontWeight='500' textAlign='center'>De la población vive <br /> cerca de un parque</Typography>
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

        <Box style={{ textAlign: 'center', paddingBottom: '15px' }}>
          <Button
            style={{ backgroundColor: '#507940', color: 'white' }}
            href={`/arbolado-urbano/catalogo/`}>
            Ver Catálogo de árboles
          </Button>
        </Box>
      </Container>
    </>
  );
};

const ArboladoSectionTitle = ({ text, highlightedText }) => {
  return (
    <Typography
      variant='h3'
      component='h2'
      textAlign='center'
      mb={2}
      sx={{ fontWeight: 600, fontStyle: 'italic' }}>
      {text} <span style={{ color: '#73b21b', marginLeft: '.2em' }}>{highlightedText}</span>
    </Typography>
  );
}


const LinesDecoration = () => {
  return (
    <>
      <hr style={{ maxWidth: '10em', color: '#73b21b' }} />
      <hr style={{ maxWidth: '5em', color: '#73b21b' }} />
    </>
  )
}

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh'
      }}>
      <Image
        loader={({ src }) => `https://chihuahua-metrica-bucket.s3.us-west-1.amazonaws.com/images/arbolado/${src}`}
        src='arbolado_urbano_banner_principal.jpg'
        layout='fill'
        objectFit='cover'
      />
    </Box>
  )
}

const Beneficios = () => {
  const [beneficios, setBeneficios] = useState(() => [
    {
      icon: '1.png',
      text: 'Mitigación de las',
      highlightedText: 'altas temperaturas',
      desc: 'Las zonas verdes mejoran las condiciones microclimáticas ya que son capaces de reducir la temperatura de sus alrededores varios grados centígrados, además de proporcionar sombra protegiendo de las radiaciones solares. Las zonas verdes son la mejor herramienta para enfriar las ciudades y combatir las islas de calor, que al elevar la temperatura de la ciudad también elevan enormemente el consumo de energía.',
      showMore: false
    },
    {
      icon: '2.png',
      text: 'Mitigación de',
      highlightedText: 'inundaciones',
      desc: 'La urbanización de las ciudades ha hecho que tengan una alta proporción de superficies impermeables, como el cemento, lo que reduce mucho la capacidad de esa zona para absorber agua y retenerla. Eso hace que aumente el riesgo de escorrentía, y la magnitud y frecuencia de las inundaciones. Las zonas verdes aportarían un suelo permeable a la ciudad, protegiéndola ante estas adversidades. ',
      showMore: false
    },
    {
      icon: '3.png',
      text: 'Mejor',
      highlightedText: 'salud mental',
      desc: 'El contacto con espacios verdes se asocia con un menor riesgo de angustia psicológica, de sufrir depresión, ansiedad, y puede mejorar nuestro desarrollo del comportamiento, reduciendo dificultades emocionales y de relaciones sociales. ',
      showMore: false
    },
    {
      icon: '4.png',
      text: 'Mejor desarrollo cerebral',
      highlightedText: 'y función cognitiva',
      desc: 'La exposición a largo plazo a los espacios verdes puede reducir riesgo de problemas emocionales y de comportamiento y generar mejoras del desarrollo cognitivo, incluida una mejor atención y memoria de trabajo.',
      showMore: false
    },
    {
      icon: '5.png',
      text: 'Reducción del riesgo de',
      highlightedText: 'enfermedades no transmisibles',
      desc: 'El contacto con espacios verdes se asocia con un menor riesgo de enfermedades cardiovasculares, diabetes, obesidad y dolor lumbar. Las enfermedades no transmisibles son responsables 71% de todas las muertes a nivel mundial, por lo que el beneficio global de espacios verdes más accesibles podría ser enorme.',
      showMore: false
    },
    {
      icon: '6.png',
      text: 'Reducción de la',
      highlightedText: 'mortalidad prematura',
      desc: 'Se puede reducir la mortalidad prematura por todas las causas debidas a una menor exposición a la contaminación del aire, a la mayor realización de ejercicio físico, a una mayor participación social percibida y al menor riesgo de depresión que generan estos espacios.',
      showMore: false
    },
    {
      icon: '7.png',
      text: 'Mejores resultados',
      highlightedText: 'del embarazo',
      desc: 'El acceso a los espacios verdes se asocia positivamente con una mayor duración de la gestación, lo que reduce el riesgo de parto prematuro, la mortalidad infantil y los resultados negativos a largo plazo durante la niñez y más allá.',
      showMore: false
    },
    {
      icon: '8.png',
      text: 'Mejor percepción de',
      highlightedText: 'la salud general',
      desc: 'Un mayor contacto con los espacios verdes se ha asociado constantemente con una mejor percepción de la salud general y también con el bienestar subjetivo, cosas como sentirse más satisfecho con la vida y la felicidad.',
      showMore: false
    },
    {
      icon: '9.png',
      text: 'Reducción del tiempo de',
      highlightedText: 'hospitalización y recuperación',
      desc: 'La exposición a espacios verdes ayuda a evitar la hospitalización debido al desarrollo de condiciones físicas y psicológicas más saludables, y reduce el período de recuperación después de tratamientos y operaciones.',
      showMore: false
    },
  ])

  const handleClick = useCallback((beneficio) => {
    setBeneficios(preBeneficios => preBeneficios.map((pre, idx) => {
      let newBeneficio = pre;
      if (beneficio.idx === idx) {
        newBeneficio = { ...pre, showMore: !pre.showMore }
      }
      return newBeneficio;
    }))
  }, [])

  return <>
    <Box
      display='flex'
      flexWrap='wrap'
      rowGap={10}
      columnGap={5}
      justifyContent='center'
      mt={3}
    >
      {
        beneficios.map((b, idx) => (
          <Box
            key={idx}
            variant='outlined'
            sx={{
              position: 'relative',
              backgroundColor: '#4c7018',
              borderRadius: 0,
              color: 'white',
              width: 450,
              height: 300
            }}>
            <Box p={3} overflow='scroll' maxHeight={300}>
              <Collapse in={b.showMore}>
                <Typography p={1}>
                  {b.desc}
                </Typography>
              </Collapse>
              {
                !b.showMore && (<BeneficioContent beneficio={b} />)
              }
            </Box>
            <Button
              onClick={() => handleClick({ ...b, idx })}
              sx={{
                color: 'white',
                backgroundColor: '#73b21b',
                borderRadius: 5,
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'absolute',
                bottom: '-1.5em',
                zIndex: 999,
                width: '10em',
                height: '3em',
                '&:hover': {
                  backgroundColor: '#679F19'
                }
              }}>{b.showMore ? 'Ocultar' : 'Leer mas'}</Button>
          </Box>
        ))
      }
    </Box>
    <Title
      mt={8}
      variant='h4'
      component='h3'
      fontWeight={600}
      fontStyle='italic'>Fuente</Title>
    <Typography fontSize='1.3rem' color='#4c7018'>
      <cite>
        Alba García (2021). <NextLink
          href='https://es.greenpeace.org/es/noticias/regla-3-30-300-ciudades-verdes/'
          passHref>
          <MUILink
            color='#4c7018'
            rel='noreferrer noopener'
            target='_blank'
          >La regla 3-30-300 o cómo una ciudad verde te ayuda a vivir mejor.</MUILink>
        </NextLink> Greenpeace España
      </cite>
    </Typography>
  </>
}

const BeneficioContent = ({ beneficio }) => {
  return (<>
    <Box display='flex' justifyContent='center' mb={1}>
      <Image
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        loader={({ src }) => `https://chihuahua-metrica-bucket.s3.us-west-1.amazonaws.com/images/arbolado/${src}`}
        src={beneficio.icon}
        width={150}
        height={150}
      />
    </Box>
    <Typography
      textAlign='center'
      fontWeight={400}
      textTransform='uppercase'
      fontSize={20}>{beneficio.text}
    </Typography>
    <Typography
      textAlign='center'
      textTransform='uppercase'
      fontSize={20}
      fontWeight={600}>{beneficio.highlightedText}
    </Typography>
  </>)
}

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


const InventarioArboladoSection = () => {

  return (
    <Grid container>
      <Grid item xs={12} md={6} alignContent='center'>
        <iframe
          height='500px'
          width='100%'
          style={{ minHeight: '300px', padding: '40px 20px', border: 'none' }}
          src={'https://geoportal.implanchihuahua.org/sigmun/apps/webappviewer/index.html?id=842822f688c641ca90b69007fccc6b61'}
          title='Inventario del arbolado urbano'
        >Mapa</iframe>
      </Grid>
      <Grid item xs={12} md={6} alignContent='center'>
        <Image
          loader={({ src }) => `https://chihuahua-metrica-bucket.s3.us-west-1.amazonaws.com/images/arbolado/${src}`}
          src='banner_negro_arbolado_crop.jpg'
          layout='responsive'
          objectFit='cover'
          height={300}
          width={500}
          style={{ minHeight: '300px' }}
        />
      </Grid>
    </Grid>
  )
}

export default ArboladoUrbano;