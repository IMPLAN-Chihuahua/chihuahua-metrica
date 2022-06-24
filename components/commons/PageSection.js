const { Box } = require("@mui/system");

const PageSection = ({children}) => {
  return (
    <Box component='section' mt={2}>
      {children}
    </Box>
  );
};
