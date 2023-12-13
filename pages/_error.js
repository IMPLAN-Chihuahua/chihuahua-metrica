import { useRouter } from "next/router";

const { Alert, AlertTitle, Container, Button, Link } = require("@mui/material");

function Error(props) {
  const router = useRouter();
  return (
    <Container sx={{ mt: 2 }}>
      <Alert severity='error'>
        <AlertTitle>Hubo un error {props.statusCode}</AlertTitle>
        {props.message} <Link
          underline='none'
          color='inherit'
          sx={{ cursor: 'pointer' }}
          fontWeight={600}
          onClick={() => router.back()}>regresar</Link>
      </Alert>
    </Container>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;