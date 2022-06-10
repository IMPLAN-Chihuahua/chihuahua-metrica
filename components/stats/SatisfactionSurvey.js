import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import style from './SatisfactionSurvey.module.css'

const SatisfactionSurvey = () => {
    return (
        <Container>
            <Grid container className={style.surveyContainer}>
                <Grid item xs={12} md={6}>
                    <div className={style.surveyItem}>
                        <h4 className={style.surveyText}>Encuesta de <br /> <b className={style.surveyTextContrast}>SATISFACCIÓN</b></h4>
                        <div>
                            <a href="https://form.123formbuilder.com/6177335/form" target='_blank'>
                                <Button variant='contained' className={style.btn}>Realizar</Button>
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div className={`${style.surveyImageContainer}`}>
                        <img src="/images/stats/survey.png" alt="Satisfaction Survey" className={style.surveyImage} />
                    </div>
                </Grid>
            </Grid>
        </Container>
        // <div className={style.surveyContainer}>
        //     {/* <img className={style.pollImage} src="/images/stats/satisfaction.png" alt="stats-indicadores" /> */}
        // </div>
    )
}

export default SatisfactionSurvey