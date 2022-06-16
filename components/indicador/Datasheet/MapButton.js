import Title from "@components/commons/Title";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MapButton = ({ mapa }) => {
  return (
    <>
      {mapa &&
        (<>
          <Title variant='h4' component='h2'>Mapa</Title>
          <Stack direction='column' spacing={1} >
            <Grid container item sx={{ justifyContent: 'center', alignItems: 'center' }} >
              <Box sx={{
                minWidth: 300,
                width: '100%',
                height: 500
              }}>
                <iframe
                  title={`Mapa del indicador con ubicación en ${mapa.ubicacion}`}
                  src={mapa.url}
                  width='100%'
                  height='100%'>
                </iframe>
              </Box>
            </Grid>
            <Grid container justifyContent='flex-start'>
              <Grid item>
                <Button
                  target='_blank'
                  rel='noreferrer noopener'
                  href={mapa.url}
                  variant='outlined'
                  endIcon={<OpenInNewIcon />}>abrir mapa</Button>
              </Grid>
            </Grid>
          </Stack>
        </>)}
    </>
  );
}

export default MapButton;