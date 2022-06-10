const { Card, Grid, CardContent, Typography, Box, CardHeader, Avatar } = require("@mui/material");
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from './Information.module.css';
import { numberWithCommas } from 'helpers/FormatNumbers';
import { useEffect, useState } from 'react';

const Information = ({ header, title, children, icon = null }) => {

  const [headerContent, setHeaderContent] = useState();

  useEffect(() => {
    if (typeof header === 'object') {
      setHeaderContent(header.nombre)
      return;
    }
    if (header === 'ASCENDENTE') {

    }
    setHeaderContent(header)
  }, [header]);

  const processedHeader = header === 'ASCENDENTE' ? <ArrowUpwardIcon sx={{ fontSize: '120px' }} />
    : header === 'DESCENDENTE' ? <ArrowDownwardIcon sx={{ fontSize: '120px' }} />
      : header;

  header = processedHeader;

  return (
    <>
      <Grid item xs={12} md={6} >
        <Card sx={{
          backgroundImage: `url(${'/rectangle_1.webp'})`,
          backgroundSize: 'cover',
          textAlign: 'center',
          minHeight: '310px',
          height: '100%',
        }}>
          <div className={styles.overlay} style={{ height: '100%' }}>
            <Box display="flex" >
              <Avatar
                className={styles.circleInfo}
                variant="square"
                sx={{
                  m: 'auto',
                  mt: 5,
                  width: '100%',
                  height: '100px',
                  bgcolor: 'transparent',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '2em',
                }}>
                {numberWithCommas(header)}
              </Avatar>
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h5' sx={{ color: 'primary.contrastText', fontWeight: 'bold', }}>
                {title}
              </Typography>
              <Typography variant='body2' sx={{ color: 'primary.contrastText' }}>
                {children}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </>
  )
};

export default Information;