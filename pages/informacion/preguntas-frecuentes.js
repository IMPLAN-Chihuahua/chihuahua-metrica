import Title from '@components/commons/Title';
import QuestionsContent from '@components/information/QuestionsContent';
import React from 'react';

const questions = () => {
  
  return (
    <>
    <Title margin={'3% 0 0 0'} variant={'h4'} content={'Preguntas frecuentes'} />
    <QuestionsContent />
    </>
  );
};

export default questions;
