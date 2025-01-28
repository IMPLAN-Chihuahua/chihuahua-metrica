import { AboutLocation } from "@components/information/AboutLocation";
import { Container } from "@mui/material";
import Splashscreen from "@components/commons/Splashscreen";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>
      <Splashscreen />
      <Container sx={{ mt: 3 }}>
        <AboutLocation />
      </Container>
    </>
  );
};

export default Contact;