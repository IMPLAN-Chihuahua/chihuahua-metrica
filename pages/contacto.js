import { AboutLocation } from "@components/information/AboutLocation";
import { Container } from "@mui/material";
import { AboutForm } from '@components/information/AboutForm';
import Splashscreen from "@components/commons/Splashscreen";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Splashscreen />
      <Container>
        <AboutLocation />
        <AboutForm />
      </Container>
    </>
  );
};

export default Contact;