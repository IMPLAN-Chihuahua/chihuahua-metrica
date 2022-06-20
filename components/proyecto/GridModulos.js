import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import NextLink from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';

const Tema = ({ modulo }) => {
  const [isHover, setHover] = useState(false);

  return (
    <Grid item xs={12} md={6} lg={4} key={modulo.id}>
      <NextLink href={`/chihuahua-en-datos/temas/${modulo.id}/indicadores`}>
        <div
          className={`${style.card}`}
          style={{
            backgroundImage: `url(http://localhost:8080${modulo.urlImagen})`
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className='overlay'>
            <Box pt={2} pl={2}>
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
      </NextLink>
    </Grid>
  );
}


const TemaList = ({ modulos }) => {
  return modulos.map((modulo) => (<Tema key={modulo.id} modulo={modulo} />))
};

export default TemaList;