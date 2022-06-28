import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import styles from './Footer.module.css';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';
import { YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <Box
        component='footer'
        className={styles.footerContainer}
        paddingLeft={5}
        paddingRight={5}
        paddingTop={4}
        backgroundColor='primary.main'
        color='white'
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          divider={
            <Divider
              sx={{
                display: { xs: 'none', md: 'block' },
                height: 30,
                width: 3,
                alignSelf: 'center',
                backgroundColor: 'whitesmoke'
              }}
              variant='medium'
              light
              flexItem />
          }
          justifyContent='space-around'
          mb={2}
        >
          <Box
            component='div'
            flexGrow={1}
            display='flex'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Image
              src='/logo_chihuahua_metrica.webp'
              height={90}
              width={300}
              alt='Implan logo'
              objectFit='contain'
            />
          </Box>
          <Box component='div' flexGrow={1}>
            <Typography variant='h5' component='h3'>Más Información</Typography>
            <ul className={styles.footerList}>
              <li>
                <NextLink href='/informacion/preguntas-frecuentes' passHref>
                  <MUILink variant='body2' underline='hover' color='#fff'>
                    Preguntas Frecuentes
                  </MUILink>
                </NextLink>
              </li>
            </ul>
          </Box>
          <Box component='div' flexGrow={1}>
            <Typography variant='h5' component='h3'>Legal</Typography>
            <ul className={styles.footerList}>
              <li>
                <NextLink href='/informacion/politicas-de-privacidad' passHref>
                  <MUILink variant='body2' underline='hover' color='#fff'>
                    Politicas de privacidad
                  </MUILink>
                </NextLink>
              </li>
              <li>
                <NextLink href='/informacion/aviso-de-privacidad-integral' passHref>
                  <MUILink variant='body2' underline='hover' color='#fff'>
                    Aviso de privacidad integral
                  </MUILink>
                </NextLink>
              </li>
            </ul>
          </Box>
          <Box component='div' flexGrow={1}>
            <Typography variant='h5' component='h3'>Síguenos</Typography>
            <Stack direction='row' spacing={4} justifyContent='center' mt={2}>
              <NextLink href='https://www.facebook.com/Implan-Chihuahua-108606468095094' passHref={true}>
                <a
                  alt="Ícono de Facebook que redirecciona hacia el perfil del IMPLAN"
                  title='¡Síguenos en Facebook!'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={styles.underline}>
                  <Facebook fontSize='large' style={{ color: '#4267B2' }} />
                </a>
              </NextLink>
              <NextLink href='https://twitter.com/IMPLANChih?s=08' passHref={true}>
                <a
                  alt="Ícono de Twitter que redirecciona hacia al perfil del IMPLAN"
                  title='¡Síguenos en Twitter!'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={styles.underline}>
                  <Twitter fontSize='large' style={{ color: '#1DA1F2' }} />
                </a>
              </NextLink>
              <NextLink href='https://www.instagram.com/implanchihuahua/' passHref={true}>
                <a alt='Ícono de Instagram que redirecciona al perfil del IMPLAN'
                  title='¡Síguenos en Instagram!'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={styles.underline}>
                  <Instagram fontSize='large' style={{ color: '#E1306C' }} />
                </a>
              </NextLink>
              <NextLink href='https://www.youtube.com/channel/UCOVGOuYfPdbttVLNz0yjGSg' passHref={true}>
                <a
                  alt='Ícono de Instagram que redirecciona al perfil del IMPLAN'
                  title='¡Síguenos en YouTube!'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={styles.underline}>
                  <YouTube fontSize='large' style={{ color: '#FF0000' }} />
                </a>
              </NextLink>
            </Stack>
            <Box
              sx={{
                width: 280,
                height: 90,
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                position: 'relative'
              }}
            >
              <NextLink href='https://www.implanchihuahua.org/' passHref={true}>
                <a
                  alt='Ícono del IMPLAN'
                  title='¡Visita nuestra sitio!'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <Image
                    src='/logo_implan_light.webp'
                    layout='fill'
                    objectFit='contain' />

                </a>
              </NextLink>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Typography
        variant='caption'
        align='center'
        display='block'
        fontWeight={500}
        sx={{
          backgroundColor: 'whitesmoke',
          paddingTop: 1,
          paddingBottom: 1
        }}>
        &copy; {new Date().getFullYear()} Instituto de Planeación Integral del Municipio de Chihuahua
      </Typography>
    </>
  );
};

export default Footer;