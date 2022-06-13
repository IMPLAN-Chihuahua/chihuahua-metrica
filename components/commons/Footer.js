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
                paddingBottom={4}
                backgroundColor='primary.main'
                color='primary.contrastText'
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/images/city-shape.webp)',
                    backgroundRepeat: 'cover',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    divider={
                        <Divider
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                height: 25,
                                border: '1px dashed #E8E8E8',
                                alignSelf: 'center'
                            }}
                            variant='medium'
                            light
                            flexItem />
                    }
                    justifyContent='space-around'
                    mb={2}
                >
                    <Box component='div' flexGrow={1} textAlign='center'>
                        <Image src='/logo_chihuahua_metrica.webp' height={90} width={300} alt='Implan logo' />
                    </Box>
                    <Box component='div' flexGrow={1}>
                        <Typography variant='h5' component='h3'>Más Información</Typography>
                        <ul className={styles.footerList}>
                            <li>
                                <NextLink href='/informacion/preguntas-frecuentes' passHref>
                                    <MUILink variant='body2' color='info.main'>
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
                                    <MUILink variant='body2' color='info.main'>
                                        Politicas de privacidad
                                    </MUILink>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href='/informacion/aviso-de-privacidad-integral' passHref>
                                    <MUILink variant='body2' color='info.main'>
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
                                    aria-label="Ícono de Facebook"
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className={styles.underline}>
                                    <Facebook fontSize='large' style={{ color: '#4267B2' }} />
                                </a>
                            </NextLink>
                            <NextLink aria-label="Ícono de Twitter" href='https://twitter.com/IMPLANChih?s=08' passHref={true}>
                                <a
                                    alt="Ícono de Twitter que redirecciona hacia al perfil del IMPLAN"
                                    title='¡Síguenos en Twitter!'
                                    aria-label="Ícono de Twitter"
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className={styles.underline}>
                                    <Twitter fontSize='large' style={{ color: '#1DA1F2' }} />
                                </a>
                            </NextLink>
                            <NextLink aria-label="Ícono de Instagram" href='https://www.instagram.com/implanchihuahua/' passHref={true}>
                                <a alt='Ícono de Instagram que redirecciona al perfil del IMPLAN'
                                    title='¡Síguenos en Instagram!'
                                    aria-label='Ícono de Instagram'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className={styles.underline}>
                                    <Instagram fontSize='large' style={{ color: '#E1306C' }} />
                                </a>
                            </NextLink>
                            <NextLink aria-label="Ícono de Instagram" href='https://www.youtube.com/channel/UCOVGOuYfPdbttVLNz0yjGSg' passHref={true}>
                                <a
                                    alt='Ícono de Instagram que redirecciona al perfil del IMPLAN'
                                    title='¡Síguenos en Instagram!'
                                    aria-label='Ícono de Instagram'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className={styles.underline}>
                                    <YouTube fontSize='large' style={{ color: '#FF0000' }} />
                                </a>
                            </NextLink>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Typography
                variant='caption'
                align='center'
                display='block'
                sx={{
                    backgroundColor: 'whitesmoke',
                    lineHeight: '2rem',
                }}>
                &copy; {new Date().getFullYear()} Instituto de Planeación Integral del Municipio de Chihuahua
            </Typography>
        </>
    );
};

export default Footer;