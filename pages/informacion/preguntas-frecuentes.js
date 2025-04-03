import Title from '@components/commons/Title';
import QuestionsContent from '@components/information/QuestionsContent';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const questions = () => {

  return (
    <Container>
      <Typography variant='h4' mt={3} mb={2}>Preguntas frecuentes</Typography>
      <QuestionsContent />
    </Container>
  );
};

export default questions;
