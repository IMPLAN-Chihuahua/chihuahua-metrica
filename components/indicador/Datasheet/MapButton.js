import Title from "@components/commons/Title";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';

const MapButton = ({ mapa }) => {
    return (
        <>
            {mapa &&
                (<>
                    <Title margin={'3% 0 0 0'} variant={'h4'} content="Mapa"></Title>
                    <Stack direction='column' spacing={1} >
                        <Grid container item sx={{ mt: '5%', justifyContent: 'center', alignItems: 'center' }} >
                            <Box sx={theme => (
                                {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    minWidth: 300,
                                    width: '100%',
                                    height: 500
                                })
                            }>
                                <iframe
                                    title={`Mapa del indicador con ubicación en ${mapa.ubicacion}`}
                                    src={mapa.url}
                                    width='100%'
                                    height='100%'>
                                </iframe>
                            </Box>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Button target='_blank' rel='noreferrer noopener' href={mapa.url} variant='contained'>Mostrar Mapa</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </>)}
        </>
    );
}

export default MapButton;