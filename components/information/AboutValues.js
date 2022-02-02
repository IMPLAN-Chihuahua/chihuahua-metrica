import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import Title from '@components/commons/Title';
const values = [
    {   
        id:'1',
        icon:'icon.ico',
        title:'V1',
        description: 'You are fantastic!',
        color: '#1e81b0'
    },
    {
        id:'2',
        icon:'icon.ico',
        title:'V2',
        description: 'You are fantastic!',
        color: '#10435b'
    },
    {
        id:'3',
        icon:'icon.ico',
        title:'V3',
        description: 'You are fantastic!',
        color: '#1e81b0'
    },
    {
        id:'4',
        icon:'icon.ico',
        title:'V4',
        description: 'You are fantastic!',
        color: '#10435b'
    },
    {
        id:'5',
        icon:'icon.ico',
        title:'V5',
        description: 'You are fantastic!',
        color: '#1e81b0'
    },
    {
        id:'6',
        icon:'icon.ico',
        title:'V6',
        description: 'You are fantastic!',
        color: '#10435b'
    },
]

const CardComponent = () =>{
    const cards = values.map( ({id,icon,title,description,color}) => {
        return (
        <Grid item xs={12} sm={4}  key={id}>
          <Card variant='none' sx={{
                  textAlign:'center'
              }}>
              <LayersRoundedIcon sx={{
                  fontSize: '120px',
                  color: `${color}`
              }}/>
              <CardContent>
                  <Typography gutterBottom variant='h5' component={'div'}>
                      {title}
                  </Typography>
                  <Typography variant='body2' color={'text.secondary'}>
                     {description}
                  </Typography>
              </CardContent>
          </Card>
        </Grid>
        )
    })
    return cards;
}


const AboutValues = () => {
  return (
      <Box sx={{backgroundColor:'rgb(38, 48, 68,0.03)'}}>
      <Container sx={{
          mt:'3%',
          mb:'3%',
        }}>
          <Title variant='h4' content='Valores'></Title>
          <Grid container spacing={2} sx={{mt:'3%'}}>
          <CardComponent/>
          </Grid>
      </Container>
          </Box>
  );
};

export default AboutValues;