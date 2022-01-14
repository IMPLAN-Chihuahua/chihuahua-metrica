import { Grid, Typography } from '@mui/material';
import SocialNetworksList from './SocialNetworksList';
import Link from 'next/link';

const Footer = () => {
    const socialNetworks = [
        {
            name: 'Facebook',
            icon: '/images/facebook.svg',
            url: 'https://www.facebook.com/Implan-Chihuahua-108606468095094'
        },
        {
            name: 'Twitter',
            icon: '/images/twitter.svg',
            url: 'https://twitter.com/IMPLANChih?s=08'
        },
        {
            name: 'Instagram',
            icon: '/images/instagram.svg',
            url: 'https://www.instagram.com/implanchihuahua/'
        }
    ];
    return (
        <footer>
            <Grid container sx={{
                backgroundColor: 'primary.main',
                color: 'primary.onMain',
                textAlign: 'center',
                fontWeight: 'regular',
                paddingTop: '20px',
                marginTop: '20px'
            }}>
                <Grid item xs={12} md={4}>
                    <Typography>
                        IMPLAN
                    </Typography>
                    <Typography>
                        Contact us
                    </Typography>
                    <Typography>
                        We are on
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link href='/politicas'>
                        <a>
                            <Typography>
                                Politcas de uso
                            </Typography>
                        </a>
                    </Link>
                    <Typography>
                        Lorem
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography>
                        Mantente actualizado
                    </Typography>
                    <SocialNetworksList socialNetworks={socialNetworks} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant='caption'>
                        Derechos reservados {new Date().getFullYear() } por IMPLAN 
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;