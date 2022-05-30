import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Title = ({ children, ...props }) => {
  return (
    <Box>
      <Typography
        {...props}
        style={{ position: 'relative' }}>{children}</Typography>
    </Box>
  );
};

export default Title;