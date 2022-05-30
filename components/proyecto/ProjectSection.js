import React from 'react';
import ProjectList from '@components/proyecto/ProjectList';
import Container from "@mui/material/Container";
import { Box } from '@mui/material';
import Title from '@components/commons/Title';


export const ProjectsSection = () => {
  return (
    <>
      <Title variant='h4' component='h2'>Proyectos</Title>
      <ProjectList />
    </>
  );
};
