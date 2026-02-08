import ObjetivosList from '@components/objetivo/GridObjetivos';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import style from './information.module.css'
import AboutIndicadores from './AboutIndicadores';
import TemasCarousel from '@components/proyecto/TemasCarousel';
import TemasBook from '@components/proyecto/TemasBook';
import InteractiveMap from '@components/objetivo/InteractiveMap';
import InteractiveMapDefinitions from '@components/objetivo/InteractiveMapDefinitions';
import InteractiveMapTemas from '@components/objetivo/InteractiveMapTemas';
import NewInteractiveMap from '@components/objetivo/NewInteractiveMap';

const ObjetivosContainer = ({ data }) => {
    const temas = data.temas;
    const objetivos = data.objetivos;

    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth < 760
    );
    console.log(isMobile)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 760);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Box sx={{ mt: 10 }}>
            <ObjetivosList objetivos={objetivos} />
            <Container maxWidth='lg'>
                <Typography
                    variant='h4'
                    component='h1'
                    fontWeight={700}
                    gutterBottom
                    className={style.subtitle}
                    sx={{ color: '#1a202c' }}
                >
                    Temas de interés
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                    }}
                >
                    Explora la integración de los datos municipales con el PDU 2040. Navega por este diagrama para entender cómo cada tema de interés contribuye a los grandes ejes de desarrollo y a los planes sectoriales que rigen nuestra ciudad. Puedes dar clic sobre algun tema para saber más al respecto.
                </Typography>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        border: '1px solid',
                        borderColor: 'rgba(0,0,0,0.08)',
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        mt: 2,
                        boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                        minHeight: '450px'
                    }}
                >
                    <NewInteractiveMap />
                </Grid>
                <InteractiveMapDefinitions />
            </Container>
        </Box>
    )
}

export default ObjetivosContainer