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
      <div
        className={`${style.card}`}
        style={{ backgroundImage: `url(/01-01-Planeación_-estructura-urbana-y-territorio.webp)` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='overlay rounded-corners'>
          <Typography variant='h5' component='h3' pt={2} pl={2}>{modulo.temaIndicador}</Typography>
          <hr
            className={`${style.divider} ${isHover && style['divider-extended']}`}
            style={{
              backgroundColor: modulo.color
            }} />
        </div>
      </div>
    </Grid>
  );
}


const TemaList = ({ modulos }) => {
  return modulos.map((modulo) => (<Tema key={modulo.id} modulo={modulo} />))
};

export default TemaList;