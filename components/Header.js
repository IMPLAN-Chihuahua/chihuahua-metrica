import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from 'next/image';
import { styled } from "@mui/system";

import Navbar from "./Navbar";
import SideBar from "./SideBar";
import HideOnScroll from "helpers/HideOnScroll";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Proyectos', path: '/' },
    { title: 'About us', path: '/' },
]
const Header = () => {
    return (
        <>
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: `flex`,
                            justifyContent: `space-between`
                        }}
                    >
                        <Image src='/images/small-logo.png' width={100} height={60} />

                        <Navbar navLinks={navLinks} />
                        <SideBar navLinks={navLinks} />
                    </Container>
                </Toolbar>
            </AppBar>
            </HideOnScroll>
            <Offset />
        </>
    )
}

export default Header;
