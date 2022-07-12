import React from 'react';
import ProjectList from '@components/proyecto/ProjectList';
import Title from '@components/commons/Title';


export const ProjectsSection = () => {
  return (
    <div id='proyectos'>
      <Title variant='h4' component='h2'>Proyectos</Title>
      <ProjectList />
    </div>
  );
};
