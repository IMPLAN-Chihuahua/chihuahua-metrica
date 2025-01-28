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
  Icon: (props) => <FlagIcon {...props} />
}, {
  title: 'Evalúa',
  desc: 'Las políticas públicas referentes a al desarrollo y competitividad.',
  Icon: (props) => <VisibilityIcon {...props} />,
}, {
  title: 'Monitorea',
  desc: 'Indicadores en temas de desarrollo socioeconómico, urbano y ambiental.',
  Icon: (props) => <TimelineIcon {...props} />
}, {
  title: 'Ofrece',
  desc: 'Herramientas didácticas para la consulta de la información contenida en la plataforma.',
  Icon: (props) => <ContactlessIcon {...props} />
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
          <Stack direction='row' columnGap={2} my={3} flexWrap='wrap'>
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
  const { title, desc, Icon } = props;
  return (
    <Box my={3} sx={{ flex: { md: '1 1 0', xs: '1 1 100%' } }}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        sx={{ color: '#183350' }}
      >
        <Icon
          sx={{
            fontSize: '3em',
            marginRight: '8px',
            color: 'rgba(8, 32, 62, 1)',
          }}
        />
        <Typography fontSize='1.5em' fontWeight={600}>{title}</Typography>
      </Box>
      <Typography variant='body2'>{desc}</Typography>
    </Box>
  )
};

export default AboutUs