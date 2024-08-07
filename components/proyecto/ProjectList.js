import Project from '@components/proyecto/Project';
import Grid from '@mui/material/Grid';

const PROJECTS = [
  {
    name: 'Sistema de Indicadores del PDUCP',
    url: '/chihuahua-en-datos',
    image: '/chihuahua-en-datos.webp'
  },
  {
    name: 'Arbolado Urbano',
    url: '/arbolado-urbano',
    image: '/arbolado-urbano.webp'
  },
]

const ProjectList = () => {
  return (
    <Grid container mt={1} justifyContent='space-around'>
      {PROJECTS.map((project, i) => (
        <Grid key={i} item xs={12} mb={2} md={4} sm={12} display='flex' justifyContent='center'>
          <Project  {...project} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectList;