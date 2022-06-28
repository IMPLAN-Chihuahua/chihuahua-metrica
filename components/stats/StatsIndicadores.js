import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import style from './StatsIndicadores.module.css'

const Stat = ({ indicador, indextest }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Grid item xs={12} md={3}>
      <div className={style.statsContainer}>
        <div
          className={`${style.circle}`}
          style={{ backgroundImage: isHovering ? `url('/images/stats/rounded-images/${indextest + 1}.png')` : '' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={isHovering && style.overlay}>
            <Box className={`${style.circleStats}`} style={{ filter: isHovering ? 'invert(100%)' : '' }}>
              <Image src={indicador.icon} width={100} height={100} />
            </Box>
            <Typography textAlign='center' className={`${style.circleStatsDescription}`}>{indicador.value}</Typography>
          </div>
        </div>
        <p className={style.indicador}>{indicador.name}</p>
      </div>
    </Grid>
  );
}


const StatsIndicadores = () => {
  const somearray = [{
    icon: '/stat_1.png',
    value: '215,940 árboles',
    name: 'Árboles en la ciudad'
  }, {
    icon: '/stat_3.png',
    value: '34 hab/ha',
    name: 'Densidad de población urbana'
  }, {
    icon: '/stat_2.png',
    value: '925,762 hab',
    name: 'Población de la ciudad'
  }, {
    icon: '/stat_4.png',
    value: '111.91 hab/km',
    name: 'Densidad de población municipal'
  }];

  return (<>
    {<Grid container className={style.test}>
      {somearray.map((item, index) => (
        <Stat key={index} indicador={item} indextest={index} />
      ))}
    </Grid>}
  </>)
}

export default StatsIndicadores