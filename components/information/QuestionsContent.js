import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container } from '@mui/material';
import { useState } from 'react';

const data = [
  {
    id: 'q1',
    question: 'If something is described as "noisome", what characteristic does it have?',
    answer: 'Foul-Smelling',
  },
  {
    id: 'q2',
    question: 'What part of speech is "supplementary", meaning "being an addition to"?',
    answer: 'Adjective',
  },
  {
    id: 'q3',
    question: 'A plot arranges what in a story?',
    answer: 'Sequence Of Events',
  },
  {
    id: 'q4',
    question: 'What part of speech is "surreptitious", meaning "clandestine"?',
    answer: 'Adjective',
  },
  {
    id: 'q5',
    question: 'What part of speech is "summary", meaning "an abstract"?',
    answer: 'Noun',
  },
  {
    id: 'q6',
    question: 'If something is described as "noisome", what characteristic does it have?',
    answer: 'Foul-Smelling',
  },
  {
    id: 'q7',
    question: 'What part of speech is "supplementary", meaning "being an addition to"?',
    answer: 'Adjective',
  },
  {
    id: 'q8',
    question: 'A plot arranges what in a story?',
    answer: 'Sequence Of Events',
  },
  {
    id: 'q9',
    question: 'What part of speech is "surreptitious", meaning "clandestine"?',
    answer: 'Adjective',
  },
  {
    id: 'q10',
    question: 'What part of speech is "summary", meaning "an abstract"?',
    answer: 'Noun',
  },
];



 const Summary = () => {   
  

    const faq = data.map(({id,question, answer}) => {
        return (
            
            <Accordion key={id} elevation={0}>
              <AccordionSummary 
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id={id}
              sx={
                [
                  {
                    '&:hover':{
                      backgroundColor: 'rgb(49,154,197,0.1)'
                    }
                  }
                ]
              }
              
              >
                <Typography 
                variant='button' 
                display='block' 
                gutterBottom 
                sx={{
                    fontWeight:'bold',
                    }}>
                        {question}
                        </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                color:'rgb(49,154,197)'
              }}>
                  <Typography>{answer}</Typography>
              </AccordionDetails>
              </Accordion>
          
        ); 
    })
    return faq;
};

const QuestionsContent = () =>{
    return(
        <Container sx={{
        mt:'3%',
        mb:'3%'

        }}>
        <Summary/>
        </Container>
    )
}

export default QuestionsContent;
