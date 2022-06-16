const { Card, CardContent, Typography, Box } = require("@mui/material");
import styles from './Information.module.css';

const Information = ({ title, helperText, children }) => {
  return (
    <Card sx={{
      backgroundImage: `url(${'/rectangle_1.webp'})`,
      backgroundSize: 'cover',
      minHeight: '310px',
      height: '100%',
    }}>
      <Box
        className={styles.overlay}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Typography color='white' m='auto' fontSize='2em' fontWeight='bold'>{children}</Typography>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant='h5'
            component='h3'
            sx={{
              color: 'primary.contrastText',
              wordBreak: 'break-word'
            }}>
            {title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'primary.contrastText' }}>
            {helperText}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
};

export default Information;