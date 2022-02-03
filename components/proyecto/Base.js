import { Avatar, Card, CardContent, CardHeader, CardActions, Typography, Button, ThemeProvider } from '@mui/material';
import AttractionsIcon from '@mui/icons-material/Attractions';
import styled from "@mui/system/styled";
import theme from '../../styles/theme';
import NextLink from 'next/link';

const SecondaryColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
        backgroundColor: '#B5955C',
    },
}));

const Base = ({ title, body, url }) => {
    return (
        <>
            <Card sx={{ maxWidth: 900, boxShadow: 30 }} variant='outlined'>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: 'secondary.main' }}
                        >
                            <AttractionsIcon />
                        </Avatar>
                    }
                    title={title}
                    titleTypographyProps={{ variant: 'h5' }}
                />

                <CardContent>
                    <Typography variant="body" style={{ whiteSpace: 'pre-line' }}>
                        {body}
                    </Typography>

                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button title={`Sección de proyecto ${title}`} aria-label={`Botón que redirecciona a la sección del proyecto ${title}`} variant='contained' size='small' sx={{ bgcolor: 'primary.main' }}>
                        <NextLink href={`/${url}`} style={{ textDecoration: 'none' }} passHref>
                            <a>
                                <Typography variant="body" sx={{ fontWeight: 'bold', color: 'primary.buttonColor' }}>
                                    Ver más
                                </Typography>
                            </a>
                        </NextLink>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Base;