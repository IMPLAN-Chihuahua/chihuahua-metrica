import Title from "@components/commons/Title";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  ImageButton,
  ImageSrc,
  ImageB,
  ImageBackdrop,
  ImageMarked,
  mapImage,
} from "styles/Components/ImageButton";
import Fade from 'react-reveal/Fade';

const MapButton = ({hasMap}) => {

    if (hasMap === 1){
    return (
        <>
        <Title margin={'3% 0 0 0'} variant={'h4'} content="Mapa"></Title>
        <Grid container item sx={{mt: '5%', justifyContent:'center', alignItems:'center'}} >
            <Box sx={ theme => (
                { 
                display: 'flex', 
                flexWrap: 'wrap', 
                minWidth: 300, 
                width: '100%',

                })
                }>
                <ImageButton
                focusRipple
                key={mapImage.title}
                style={{
                    width: mapImage.width,
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${mapImage.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <ImageB>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    alt="Mapa"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        backgroundColor: 'black',
                        opacity: 0.7,
                        borderRadius: '10%',
                    }}
                    >
                    Ver mapa
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </ImageB>
                </ImageButton>
            </Box>
        </Grid>
    </>
    ) 
    } else {
        return (<></>)
    }
}

export default MapButton;