import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../../styles/indicador.module.css'
import Image from 'next/image';
import NextLink from 'next/link';
import { hexAsRGBA, usefulString } from 'helpers/StringUtils';

export const Tema = ({ modulo }) => {
  const [isHover, setHover] = useState(false);
  return (

    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      passHref

      sx={{
        boxShadow: 2,
        borderRadius: 2,
        height: '230px',
        boxShadow: isHover ? ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' : '0px 0px 10px 0px rgba(0,0,0,0.25)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}>
        <Box sx={{
          height: '180px',
        }}>
          <Box className={style.cardHeader}>
            <Typography
              variant='h6' fontSize={'30px'} className={style.inter}>{modulo.temaIndicador}</Typography>
            <Typography fontWeight={300} className={style.inter}>
              Indicadores: {modulo.indicadoresCount}
            </Typography>
          </Box>
          <Typography
            variant='body1' component='h3' className={style.inter} >
            {/* If text is too big, display ellipsis */}
            {usefulString(modulo.descripcion, 100)}
          </Typography>
        </Box>
        <Button
          variant='contained'
          sx={{
            backgroundColor: `${hexAsRGBA(modulo.color, 1)}`,
            color: isHover ? 'white' : 'white',
            borderRadius: '0px 30px 30px 0px',
            width: '30%',
            '&:hover': {
              backgroundColor: `${hexAsRGBA(modulo.color, 1)}`,
            },
            fontWeight: 600,
          }}>
          <NextLink
            href={`/chihuahua-en-datos/temas/${modulo.id}/indicadores`}
          >
            <a>
              Ver más
            </a>
          </NextLink>
        </Button>
      </div>
    </Box>
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