import React from 'react';
import ProjectList from '@components/proyecto/ProjectList';
import Container from "@mui/material/Container";
import { Box } from '@mui/material';
import Title from '@components/commons/Title';


export const ProjectsSection = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'rgb(38, 48, 68,0.03)', width: '100%' }} id='proyectos' name='proyectos'>
        <Container sx={{ pt: '5%', pb: '5%' }} id='proyectos' name='proyectos'>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} id='proyectos' name='proyectos'>
            <Title variant='h4' component='h2' id='proyectos' name='proyectos'>Proyectos</Title>
          </Box>
          <ProjectList />
        </Container>
      </Box>
    </>
  );
};
