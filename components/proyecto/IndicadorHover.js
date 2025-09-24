import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import NextLink from 'next/link';

const IndicadorHover = ({ indicador }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            transition: '0.3s ease-in-out',
        }}>
            {
                indicador.id
                    ? (
                        <>
                            <Box sx={{
                                height: '50%',
                                width: '100%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'end',
                                pb: 4
                            }}>
                                <Typography variant='body1' component='h3' fontWeight={500} color={'white'} fontStyle={'italic'} sx={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    pr: 2,
                                    pt: 2
                                }}>
                                    Actualizado el año {indicador.anioUltimoValorDisponible}
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pt: 8,
                                    alignItems: 'center',
                                }}>
                                    <img
                                        src={indicador.Tema?.urlImagen}
                                        alt='Indicador'
                                        layout='fill'
                                        style={{
                                            borderRadius: '50%',
                                            height: '200px',
                                            width: '200px',
                                        }}
                                    />
                                </Box>

                                <Typography variant='h4' component='h1' textAlign={'center'} color={'white'} sx={{
                                    pt: 2
                                }}>
                                    {indicador.nombre}
                                </Typography>
                            </Box>
                            <Box sx={{
                                height: '50%',
                                width: '100%',
                                pr: 2,
                                pl: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            }}>
                                <Typography variant='h6' component='h2' textAlign={'center'} color={'white'}>
                                    {indicador.definicion}
                                </Typography>
                                <Typography variant='subtitle1' component='h2' textAlign={'center'} color={'white'}>
                                    Este indicador forma parte del objetivo del objetivo de {indicador.objetivos[0].titulo}
                                </Typography>

                                <NextLink
                                    href={`/chihuahua-en-datos/indicadores/${indicador.id}`}
                                >
                                    <Typography variant='subtitle1' fontWeight={600} component='h2' textAlign={'center'} color={'white'}
                                        sx={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                            '&:hover': {
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        Ver más
                                    </Typography>
                                </NextLink>

                            </Box>
                        </>
                    ) :
                    <>
                        <Box sx={{
                            height: '50%',
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            pb: 4
                        }}>

                            <Typography variant='h4' component='h1' textAlign={'center'} color={'white'} sx={{
                                pt: 2
                            }}>
                                ¡Pasa el ratón por un tema de interés para visualizar un indicador!
                            </Typography>
                        </Box>
                        <Box sx={{
                            height: '50%',
                            width: '100%',
                            pr: 2,
                            pl: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}>
                            <Typography variant='h6' component='h2' textAlign={'center'} color={'white'}>
                                Esto te mostrará la vista previa de un indicador.
                            </Typography>

                        </Box>
                    </>


            }
        </Box>
    )
}

export default IndicadorHover