import { Box, Card, CardActionArea, Grid } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import style from '../../styles/indicador.module.css'

const GridModulos = ({data}) => {
    const modulos = data.map(modulo => {
        return (
            <Grid item xs={12} md={6} lg={4} key={modulo.codigo}>
                <Card className={style.cardSection} sx={{ maxWidth: 900, boxShadow: 30 }} variant='outlined'>
                    <CardActionArea>
                        <Box className={style.card}>
                            <Box className={style.cardFront} >
                                <NextLink href={`/modulos/${modulo.id}/indicadores`} style={{ textDecoration: 'none' }} passHref>
                                    <a>
                                        <Box className={style.cardFront__tp} sx={{ backgroundColor: `#34495E` }} >
                                            <Box sx={
                                                theme => ({
                                                    display: `flex`,
                                                    marginTop: `5%`,
                                                    marginBottom: `10%`,
                                                })

                                            }>
                                                <AdbIcon sx={{ fontSize: '100px' }} />
                                            </Box>

                                        </Box>
                                        <Box className={style.cardFront__bt} sx={{ color: `main.primary` }}>
                                            <p className={style.card_text}  >
                                                <b>{modulo.temaIndicador}</b>
                                            </p>
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