import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactlessIcon from '@mui/icons-material/Contactless';
import TimelineIcon from '@mui/icons-material/Timeline';
import { pink } from '@mui/material/colors';
import Image from 'next/image';

const goals = [{
  title: 'Informa',
  desc: 'Datos de alta prioridad y relevancia para la toma de decisiones en temas de desarrollo socioeconómico, urbano y ambiental.',
  icon: '/informa.png'
}, {
  title: 'Evalúa',
  desc: 'Las políticas públicas referentes a al desarrollo y competitividad.',
  icon: '/evalua.png',
}, {
  title: 'Monitorea',
  desc: 'Indicadores en temas de desarrollo socioeconómico, urbano y ambiental.',
  icon: '/monitorea.png'
}, {
  title: 'Ofrece',
  desc: 'Herramientas didácticas para la consulta de la información contenida en la plataforma.',
  icon: '/ofrece.png'
}]

const AboutUs = () => {

  return (
    <>
      <div style={{
        margin: 0,
        padding: 0,
        height: '40vh',
        width: '100vw',
        minHeight: '200px',
        position: 'relative',
      }}>
        <Image
          loader={() => '/images/Banner/presa.jpg'}
          src={'/images/Banner/presa.jpg'}
          alt="Presa de Chihuahua"
          width={0}
          height={0}
          layout='fill'
          objectFit='cover'
          objectPosition='center top'
        />
      </div>
      <Container>
        <Box component='section' my={4}>
          <Typography mt={3} mb={2} variant='h4'>Conócenos</Typography>
          <Typography>
            Chihuahua Métrica es una plataforma digital innovadora impulsada por el Instituto de Planeación Integral del Municipio
            de Chihuahua para informar, monitorear y evaluar la transformación de nuestra ciudad y municipio en el ámbito de la planeación
            urbana y territorial, a través de proyectos y herramientas fáciles de utilizar, entender e interpretar
            para cualquier usuario que tome decisiones.
          </Typography>
          <Stack direction='row' columnGap={2} rowGap={2} my={3} flexWrap='wrap'>
            {
              goals.map((goal, idx) => (
                <Goal key={idx} {...goal} />
              ))
            }
          </Stack>
        </Box>
      </Container>
    </>
  )
}


const Goal = (props) => {
  const { title, desc, icon } = props;
  return (
    <Box
      my={1}
      sx={{
        flex: { md: '1 1 0', xs: '1 1 100%' },
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(24, 51, 80, 0.1)',
        }
      }}
    >
      <Box display='flex' flexDirection='row' alignItems='center' gap={1.5}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#EEF2F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Image
            src={icon}
            alt={title}
            width={26}
            height={26}
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Typography fontSize='1.1em' fontWeight={500} color='#183350'>
          {title}
        </Typography>
      </Box>
      <Typography variant='body2' color='text.secondary' lineHeight={1.6}>
        {desc}
      </Typography>
    </Box>
  )
};

export default AboutUs