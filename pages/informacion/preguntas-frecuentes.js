import Title from '@components/commons/Title';
import QuestionsContent from '@components/information/QuestionsContent';
import { Box } from '@mui/material';
import React from 'react';

const questions = () => {
  
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <Title margin={'3% 0 0 0'} variant={'h4'}>Preguntas frecuentes</Title>
    </Box>
      
    <QuestionsContent />
    </>
  );
};

export default questions;
