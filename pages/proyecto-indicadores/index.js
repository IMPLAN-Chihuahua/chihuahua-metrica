import { Box, Button, Card, CardActionArea, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';
import GridModulos from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';

export default function Modulo(props) {
    const data = props.data;
    return (<>
        <Container sx={{ mb: '3%' }}>
            <Head>
                <title>Proyecto Indicadores</title>
                <meta name="description" content="Proyecto indicadores de la ciudad de Chihuahua" />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Title variant='h3' component='h1' margin='3% 0 1% 0'>Módulos de Chihuahua</Title>
            <Grid container>
                <Grid item xs={12} lg={9}>
                    <Typography textAlign='start' variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum mi vel risus ultricies vestibulum. Maecenas consectetur ut arcu id dignissim. Vivamus lorem purus, malesuada eu nisl nec, pharetra varius purus. In facilisis quis sem in ornare. Suspendisse varius magna sapien, et congue ante cursus eget. Praesent mattis, eros eget congue rutrum, massa lorem auctor neque, a molestie metus risus vel leo. Aenean ac odio nisl.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Box className={style.rightSide}>
                        <Image src='/images/implan-logo.webp' alt='implan_logo' width={200} height={150} />
                    </Box>
                </Grid>
            </Grid>
            <Title variant='h4' component='h2' margin='0 0 2% 0'>Temas de interés</Title>
            <Grid container spacing={2}>
                <GridModulos data={data} />
            </Grid>
        </Container>
    </>);
};




export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
    const data = await res.json();

    if (res.status === 200) {
        return {
            props: {
                ...data
            }
        }
    } else {
        return {
            props: {
                data: []
            }
        }
    }
}
