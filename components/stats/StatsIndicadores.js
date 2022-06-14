import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './StatsIndicadores.module.css'

const Stat = ({ indicador, indextest }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [index, setIndex] = useState(0)
    const [hoverStyle, setHoverStyle] = useState({})

    const mouseEntered = (index) => {
        setIsHovering(true);
        setIndex(index + 1);
    }

    const mouseLeft = () => setIsHovering(false)

    useEffect(() => {
        if (isHovering) {
            setHoverStyle({
                background: `center url("/images/stats/rounded-images/${index}.png") no-repeat`,
                border: '1px solid #f5f5f5',
                boxShadow: '0px 0px 10px #f5f5f5',
                transition: 'all 0.3s ease-in-out'
            });
        } else {
            setHoverStyle({});
        }
    }, [isHovering]);

    return (
        <Grid item xs={12} md={3} key={indextest}>
            <div className={style.statsContainer}>
                <div className={style.circle} style={hoverStyle} onMouseEnter={(e) => { mouseEntered(indextest) }} onMouseLeave={mouseLeft}>
                    <p className={style.circleStats}>Some value</p>
                    <p className={`${style.circleStats} ${style.circleStatsDescription}`}>Ver más</p>
                </div>
                <p className={style.indicador}>Some name</p>
            </div>
        </Grid>
    );
}


const StatsIndicadores = () => {

    const somearray = ['10%', '50%', '60%', '60%']


    return (
        <>

            {<Grid container className={style.test}>
                {
                    somearray.map((item, index) => (
                        <Stat key={index} indicador={item} indextest={index} />
                    ))
                }
            </Grid>}
        </>
    )
}

export default StatsIndicadores