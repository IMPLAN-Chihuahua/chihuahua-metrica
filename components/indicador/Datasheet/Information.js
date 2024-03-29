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
        <CardContent sx={{ justifyContent: 'space-evenly', }} className={styles.cardContent}>
          <Typography
            component='h3'
            fontSize='1.5em'
            fontWeight='600'
            sx={{
              color: 'primary.contrastText',
              wordBreak: 'break-word',
            }}>
            {title}
          </Typography>
          <Typography color='white' m='auto' fontSize='2em' fontWeight='bold' align='center'>{children}</Typography>
          <div>
            <Typography variant='body2' fontSize='1em' sx={{ color: 'primary.contrastText' }}>
              <div dangerouslySetInnerHTML={{ __html: helperText }} />
            </Typography>
          </div>
        </CardContent>
      </Box>
    </Card>
  )
};

export default Information;