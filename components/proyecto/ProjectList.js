import Project from '@components/proyecto/Project';
import Grid from '@mui/material/Grid';

const PROJECTS = [
  {
    name: 'Chihuahua en Datos',
    url: '/chihuahua-en-datos', 
    image: '/01-Planeación_-estructura-urbana-y-territorio.webp'
  },
  {
    name: 'Arbolado Urbano',
    url: '/arbolado-urbano',
    image: '/09-Medio-ambiente-y-recursos-naturales.webp'
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