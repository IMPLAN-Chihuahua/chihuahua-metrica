import {Avatar, Card, CardContent, CardHeader, Typography, Link} from '@mui/material';
import AttractionsIcon from '@mui/icons-material/Attractions';

const Base = ({title, body, url}) => {
    return (
        <>
            <Card sx={{maxWidth: 900, boxShadow:30}} variant='outlined'>
                <Link href={`/${url}`} style={{textDecoration: 'none'}}>
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
                </Link>
                    <CardContent>
                        <Typography variant="body">
                            {body}
                        </Typography>
                    </CardContent>
                </Card>
        </>
    )
}

export default Base;