import {Avatar, Card, CardContent, CardHeader, Rating, Typography, SearchIcon} from '@mui/material';

const Base = ({title='Indicadores', body='noice'}) => {
    return (
        <Card sx={{maxWidth: 800}}>
            <CardHeader 
                avatar={
                    <Avatar
                        sx={{bgcolor: 'secondary.main'}}
                        aria-label={`Icono de proyecto ${title}`}
                    >
                    </Avatar>
                }
                title={title}
                titleTypographyProps={{variant:'h4'}}
            />
            <CardContent>
                <Typography variant="body">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Base;