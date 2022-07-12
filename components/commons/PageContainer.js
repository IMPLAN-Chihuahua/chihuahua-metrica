const { Container } = require("@mui/material");

const PageContainer = ({ children }) => {
  return (
    <Container mt={3} mb={3}>
      {children}
    </Container>
  );
}