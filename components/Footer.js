import { Stack, Box, Typography, Divider } from '@mui/material'
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {
    const theme = useTheme();
    const isMidSize = useMediaQuery(theme.breakpoints.down('md'));
    let size = isMidSize ? { display: 'none' } : { height: '50px' };
    return (
        <Box
            component='footer'
            className={styles.footerContainer}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={4}
            paddingBottom={4}
            backgroundColor='primary.main'
            color='primary.onMain'
            marginTop={5}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                divider={
                    <Divider
                        sx={{
                            ...size,
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
                    <Image src='/images/implan-logo.webp' width={200} height={150} />
                </Box>
                <Box component='div' flexGrow={1}>
                    <Typography variant='h5' component='h3'>Más Información</Typography>
                    <ul className={styles.footerList}>
                        <li>
                            <Link href='/'>
                                <a className={styles.underline}>
                                    Preguntas Frequentes
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className={styles.underline}>
                                    Objetivos
                                </a>
                            </Link>
                        </li>
                    </ul>
                </Box>
                <Box component='div' flexGrow={1}>
                    <Typography variant='h5' component='h3'>Legal</Typography>
                    <ul className={styles.footerList}>
                        <Link href='/'>
                            <a className={styles.underline}>
                                Politicas de Privacidad
                            </a>
                        </Link>
                    </ul>
                </Box>
                <Box component='div' flexGrow={1}>
                    <Typography variant='h5' component='h3'>Siguenos</Typography>
                    <Stack direction='row' spacing={4} justifyContent='center' mt={2}>
                        <Link href='https://www.facebook.com/Implan-Chihuahua-108606468095094' passHref={true}>
                            <a target='_blank' rel='noreferrer noopener'
                                className={styles.underline}>
                                <Facebook fontSize='large' />
                            </a>
                        </Link>
                        <Link href='https://twitter.com/IMPLANChih?s=08' passHref={true}>
                            <a target='_blank' rel='noreferrer noopener'
                                className={styles.underline}>
                                <Twitter fontSize='large' />
                            </a>
                        </Link>
                        <Link href='https://www.instagram.com/implanchihuahua/' passHref={true}>
                            <a target='_blank' rel='noreferrer noopener'
                                className={styles.underline}>
                                <Instagram fontSize='large' />
                            </a>
                        </Link>

                    </Stack>
                </Box>
            </Stack>
            <Typography variant='caption' align='center' display='block'>
                &copy; {new Date().getFullYear()} Instituto de Planeación Integral del Municipio de Chihuahua
            </Typography>
        </Box>
    );
};

export default Footer;