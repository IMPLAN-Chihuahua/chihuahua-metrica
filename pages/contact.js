import Head from 'next/head'
import { AboutLocation } from "@components/information/AboutLocation";
import { Container } from "@mui/material";
import { AboutForm } from '@components/information/AboutForm';
import Title from '@components/commons/Title';

const Contact = () => {
    return (
    <>
        <body>
            <Container>
                <AboutLocation/>
                <AboutForm/>
            </Container>
        </body>
    </>   
    );
};

export default Contact;