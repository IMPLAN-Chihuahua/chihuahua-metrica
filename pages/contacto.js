import { AboutLocation } from "@components/information/AboutLocation";
import { Container } from "@mui/material";
import { AboutForm } from '@components/information/AboutForm';
import Splashscreen from "@components/commons/Splashscreen";
import Head from "next/head";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";

const CRUMBS = [
  {
    text: 'Contacto'
  }
]

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Splashscreen />
      <Container sx={{ mt: 3 }}>
        <PageBreadcrumb crumbs={CRUMBS} />
        <AboutLocation />
      </Container>
    </>
  );
};

export default Contact;