import Title from '@components/commons/Title';
import QuestionsContent from '@components/information/QuestionsContent';
import { Box, Container } from '@mui/material';
import React from 'react';

const questions = () => {

  return (
    <Container>
      <br />
      <Title variant={'h4'}>Preguntas frecuentes</Title>
      <QuestionsContent />
    </Container>
  );
};

export default questions;
