import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import style from './SatisfactionSurvey.module.css'
import Image from 'next/image' // 1. Importar el componente Image

const SatisfactionSurvey = () => {
  return (
    <Container>
      <Grid container className={style.surveyContainer}>
        <Grid item xs={12} md={6}>
          <div className={style.surveyItem}>
            <h4 className={style.surveyText}>Encuesta de <br /> <b className={style.surveyTextContrast}>SATISFACCIÓN</b></h4>
            <div>
              <a href="https://form.123formbuilder.com/6177335/form" target='_blank' rel="noreferrer">
                <Button variant='contained' className={style.btn}>Realizar</Button>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} >
          <div className={`${style.surveyImageContainer}`}>
            <Image
              src="/images/stats/survey.png"
              alt="Satisfaction Survey"
              className={style.surveyImage}
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SatisfactionSurvey