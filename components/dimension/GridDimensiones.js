import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../../styles/dimension.module.css'
import Image from 'next/image';
import NextLink from 'next/link';

const Dimension = ({ dimension }) => {
    const [isHover, setHover] = useState(false);

    return (
        <NextLink
            href={`/chihuahua-en-datos/dimensiones/${dimension.id}/indicadores`}
            passHref>
            <a>
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{ position: 'relative' }} className={`${style.card}`}
                >
                    <Image
                        loader={() => dimension.urlImagen}
                        src={dimension.urlImagen}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center' />

                    <Box className='overlay' sx={{ position: 'relative' }}>
                        <Box pt={2} pl={2} pr={2}>
                            <Typography variant='h5' component='h3'>{dimension.titulo}</Typography>
                            <hr
                                className={`${style.divider} ${isHover && style['divider-extended']}`}
                                style={{
                                    backgroundColor: dimension.color
                                }} />
                            <Typography variant='overline' sx={{
                                position: 'absolute',
                                bottom: 0,
                            }}>Indicadores: {dimension.indicadoresCount}</Typography>
                        </Box>
                    </Box>
                </div>
            </a>
        </NextLink>
    )
}

const DimensionesList = ({ dimensiones }) => {
    return dimensiones.map((dimension) => (
        parseInt(dimension.indicadoresCount) > 0 && (
            <Grid item xs={12} md={6} lg={4} key={dimension.id}>
                <Dimension key={dimension.id} dimension={dimension} />
            </Grid>)
    ))
}

export default DimensionesList