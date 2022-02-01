import { Box, Button, Card, CardActionArea, Container, Grid } from '@mui/material';
import Head from 'next/head';
import AdbIcon from '@mui/icons-material/Adb';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';
import NextLink from 'next/link';
import GridModulos from '@components/proyecto/GridModulos';
import Title from '@components/commons/Title';

export default function Modulo(props) {
    const data = props.data;
    return (
        <>
            <Container>
                <Head>
                    <title>Modulos</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 className={style.title}>Modulos de Chihuahua</h1>
                <hr className={style.hrMin} />
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={9}>
                        <Box className={style.leftSide}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum mi vel risus ultricies vestibulum. Maecenas consectetur ut arcu id dignissim. Vivamus lorem purus, malesuada eu nisl nec, pharetra varius purus. In facilisis quis sem in ornare. Suspendisse varius magna sapien, et congue ante cursus eget. Praesent mattis, eros eget congue rutrum, massa lorem auctor neque, a molestie metus risus vel leo. Aenean ac odio nisl.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Box className={style.rightSide}>
                            <Image src='/images/implan-logo.webp' alt='implan_logo' width={200} height={150} />
                        </Box>
                    </Grid>

                </Grid>
                <br />
                <h1 className={style.title}>Temas de interés</h1>

                <Grid container spacing={2}>
                    <GridModulos data={data}/>
                </Grid>
            </Container>
        </>
    );
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
