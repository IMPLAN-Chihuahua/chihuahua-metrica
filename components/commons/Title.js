import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Title = ({ children, ...props }) => {
  return (
    <Box>
      <Typography
        mb={1}
        {...props}
        style={{ position: 'relative' }}>{children}</Typography>
    </Box>
  );
};

export default Title;