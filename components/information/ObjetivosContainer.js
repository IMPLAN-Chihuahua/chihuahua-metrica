import ObjetivosList from '@components/objetivo/GridObjetivos';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import style from './information.module.css'
import AboutIndicadores from './AboutIndicadores';
import TemasCarousel from '@components/proyecto/TemasCarousel';
import TemasBook from '@components/proyecto/TemasBook';

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
            {/* <AboutIndicadores /> */}
            {isMobile ?
                <TemasCarousel temas={temas} />
                :
                <TemasBook temas={temas} />
            }
        </Box>
    )
}

export default ObjetivosContainer