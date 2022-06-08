import Project from '@components/proyecto/Project';
import Grid from '@mui/material/Grid';

const PROJECTS = [
  {
    name: 'Indicadores de Chihuahua',
    url: '/proyecto-indicadores', 
    image: '/01-Planeación_-estructura-urbana-y-territorio.webp'
  },
  {
    name: 'Arbolado Urbano',
    url: '/arbolado',
    image: '/09-Medio-ambiente-y-recursos-naturales.webp'
  },
]

const ProjectList = () => {
  return (
    <Grid container spacing={3} mt={1} justifyContent='space-around'>
      {PROJECTS.map((project, i) => (
        <Grid key={i} item xs={12} md={4} >
          <Project  {...project} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectList;