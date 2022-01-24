import {Avatar, Card, CardContent, CardHeader, CardActions, Typography, Link, Button, ThemeProvider} from '@mui/material';
import AttractionsIcon from '@mui/icons-material/Attractions';
import styled from "@mui/system/styled";
import theme from '../../styles/theme';

const SecondaryColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
        backgroundColor: '#B5955C',
    },
}));

const Base = ({title, body, url}) => {
    return (
        <>
            <Card sx={{maxWidth: 900, boxShadow:30}} variant='outlined'>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{bgcolor: 'secondary.main'}}
                                aria-label={`Icono de proyecto ${title}`}
                            >
                                <AttractionsIcon />
                            </Avatar>
                        }
                        title={title}
                        titleTypographyProps={{variant:'h5'}}
                    />

                    <CardContent>
                        <Typography variant="body" style={{whiteSpace: 'pre-line'}}>
                            {body} 
                        </Typography>

                    </CardContent>
                    <CardActions disableSpacing sx={{display: 'flex', justifyContent:'flex-end'}}>
                        <Button variant='contained' size='small' sx={{bgcolor: 'primary.main'}}>
                            <Link href={`/${url}`} style={{textDecoration: 'none'}}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="body" sx={{fontWeight: 'bold', color: 'primary.buttonColor'}}>
                                        Ver más
                                    </Typography>
                                 </ThemeProvider>
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
        </>
    )
}

export default Base;