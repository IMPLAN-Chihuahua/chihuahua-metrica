import { Container, Grid } from '@mui/material'
import React from 'react'
import style from './StatsIndicadores.module.css'

const StatsIndicadores = () => {

    const somearray = ['10%', '50%', '60%', '60%']

    return (
        <>
            {/* <div className={style.test}>
                {
                    somearray.map((item, index) => (
                        <div className={style.lineContainer}>
                            <hr className={style.line} style={{ width: item }} />
                            <div className={style.dot} style={{ left: item }}>
                            </div>
                        </div>
                    ))
                }
            </div> */}

            {<Grid container className={style.test}>
                {
                    somearray.map((item, index) => (
                        <Grid item xs={12} md={3}>
                            <div className={style.statsContainer}>
                                <div className={style.circle}>
                                    <p className={style.circleStats}>Some value</p>
                                    <p className={`${style.circleStats} ${style.circleStatsDescription}`}>Ver más</p>
                                </div>
                                <p className={style.indicador}>Some name</p>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>}
        </>

    )
}

export default StatsIndicadores