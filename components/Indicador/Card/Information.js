const { Card, Grid, CardContent, Typography, Box, CardHeader, Avatar} = require("@mui/material");
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Information = ({header, title, body}) => {

    typeof header === 'object' ? header = header.nombre : header;

    const processedHeader = header === 'ASCENDENTE' ? <ArrowUpwardIcon sx={{fontSize: '120px'}}/>
    : header === 'DESCENDENTE' ? <ArrowDownwardIcon sx={{fontSize: '120px'}}/>
    : header ;

    header = processedHeader;

    return (
        <>
        <Grid item xs={12} md={6}>
            <Card sx={{bgcolor: 'cardInformation.main',  textAlign: 'center', minHeight: '310px'}}>
                 <Box
                display="flex"
                >
                    <Avatar sx={{m: 'auto', mt: 1, width: '150px', height: '150px', bgcolor: 'primary.white', color: 'primary.main', fontWeight: 'bold'}}>
                    {header}
                    </Avatar>
                </Box>
                <CardContent sx={{ textAlign: 'center'}}>
                    <Typography variant='h5' sx={{color: 'primary.contrastText', fontWeight: 'bold',}}>
                        {title}
                    </Typography>
                    <Typography variant='body' sx={{color: 'primary.contrastText'}}>
                        {body}
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </>
    )
};

export default Information;