import { AboutLocation } from "@components/information/AboutLocation";
import { Container } from "@mui/material";
import { AboutForm } from '@components/information/AboutForm';
import Splashscreen from "@components/commons/Splashscreen";

const Contact = () => {
  return (
    <>
      <Splashscreen />
      <Container>
        <AboutLocation />
        <AboutForm />
      </Container>
    </>
  );
};

export default Contact;