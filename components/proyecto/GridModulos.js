import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import style from '../../styles/indicador.module.css'

const GridModulos = ({ data }) => {
    const modulos = data.map(modulo => {
        return (
            <Grid item xs={12} md={6} lg={4} key={modulo.codigo}>
                <Card className={style.cardSection} sx={{ maxWidth: 900, boxShadow: 30 }} variant='outlined'>
                    <CardActionArea>
                        <Box className={style.card}>
                            <Box className={style.cardFront} >
                                <NextLink href={`/modulos/${modulo.id}/indicadores`} passHref>
                                    <a>
                                        <Box className={style.cardFront__tp} sx={{ 
                                            backgroundColor: `#34495E`,
                                            position:'relative',
                                            }} >
                                                 <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    right: '20px',
                                                }}
                                                className={style.numberCircle}
                                                >
                                                    {modulo.indicadoresCount}
                                                    </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                marginTop: '5%',
                                                marginBottom: '10%',
                                            
                                            }}>
                                               
                                                <AdbIcon sx={{ fontSize: '100px' }} />
                                            </Box>
                                        </Box>
                                        <Box className={style.cardFront__bt} sx={{ color: `main.primary` }}>
                                            <Typography
                                                fontWeight='bold'
                                                fontSize='1.2rem'>
                                                {modulo.temaIndicador}
                                            </Typography>
                                        </Box>
                                    </a>
                                </NextLink>
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    });
    return modulos;
};

export default GridModulos;