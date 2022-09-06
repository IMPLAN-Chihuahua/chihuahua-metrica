import { Avatar, Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import style from '../../components/stats/StatsIndicadores.module.css'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

const Stat = ({ indicador, indextest }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Grid item xs={12} md={3}>
            <div
                className={`${style.circle}`}
                style={{ backgroundImage: isHovering ? `url('/images/stats/rounded-images/${indextest + 1}.png')` : undefined }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className={isHovering ? style.overlay : undefined}>
                    <Box className={`${style.circleStats}`} style={{ filter: isHovering ? 'invert(100%)' : undefined }}>
                        <Image src={indicador.icon} width={100} height={100} />
                    </Box>
                    <Typography textAlign='center' className={`${style.circleStatsDescription}`}>{indicador.value}</Typography>
                </div>
            </div>
            <p className={style.indicador}>{indicador.name}</p>
        </Grid>
    );
}

export default Stat;