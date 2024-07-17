import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';
import NextLink from 'next/link';

const Tema = ({ modulo }) => {
  const [isHover, setHover] = useState(false);
  return (
    <NextLink
      href={`/chihuahua-en-datos/temas/${modulo.id}/indicadores`}
      passHref
    >
      <a>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ position: 'relative' }} className={`${style.card}`}
        >
          <Image
            loader={() => modulo.urlImagen}
            src={modulo.urlImagen}
            layout='fill'
            objectFit='cover'
            objectPosition='center' />

          <div className='overlay'>
            <Box pt={2} pl={2} pr={2}>
              <Typography variant='h5' component='h3'>{modulo.temaIndicador}</Typography>
              <hr
                className={`${style.divider} ${isHover && style['divider-extended']}`}
                style={{
                  backgroundColor: modulo.color
                }} />
              <Typography variant='overline'>Indicadores: {modulo.indicadoresCount}</Typography>
            </Box>
          </div>
        </div>
      </a>
    </NextLink>
  );
}


const TemaList = ({ modulos }) => {
  return modulos.map((modulo) => (
    parseInt(modulo.indicadoresCount) > 0 && (
      <Grid item xs={12} md={6} lg={4} key={modulo.id}>
        <Tema key={modulo.id} modulo={modulo} />
      </Grid>)
  ))
};

export default TemaList;