import {Avatar, Card, CardContent, CardHeader, Typography, Link} from '@mui/material';

const Base = ({title, body, url}) => {
    return (
        <>
            <Link href={`/${url}`} style={{textDecoration: 'none'}}>
                <Card sx={{maxWidth: 900, boxShadow:30}} variant='outlined'>
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
            </Link>
        </>
    )
}

export default Base;